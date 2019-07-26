import * as assert from "assert";
import { getBSU } from "./utils";
import * as dotenv from "dotenv";
import { ShareClient, DirectoryClient } from "../src";
import { record } from "./utils/recorder";
import { DirectoryForceCloseHandlesResponse } from "../src/generated/src/models";
dotenv.config({ path: "../.env" });

describe("DirectoryClient", () => {
  const serviceClient = getBSU();
  let shareName: string;
  let shareClient: ShareClient;
  let dirName: string;
  let dirClient: DirectoryClient;

  let recorder: any;

  beforeEach(async function() {
    recorder = record(this);
    shareName = recorder.getUniqueName("share");
    shareClient = serviceClient.getShareClient(shareName);
    await shareClient.create();

    dirName = recorder.getUniqueName("dir");
    dirClient = shareClient.getDirectoryClient(dirName);
    await dirClient.create();
  });

  afterEach(async function() {
    await dirClient.delete();
    await shareClient.delete();
    recorder.stop();
  });

  it("setMetadata", async () => {
    const metadata = {
      key0: "val0",
      keya: "vala",
      keyb: "valb"
    };
    try {
      await dirClient.setMetadata(metadata);

      const result = await dirClient.getProperties();
      assert.deepEqual(result.metadata, metadata);
    } catch (err) {
      console.log(err);
    }
  });

  it("getProperties", async () => {
    const result = await dirClient.getProperties();
    assert.ok(result.eTag!.length > 0);
    assert.ok(result.lastModified);
    assert.ok(result.requestId);
    assert.ok(result.version);
    assert.ok(result.date);
  });

  it("create with default parameters", (done) => {
    // create() with default parameters has been tested in beforeEach
    done();
  });

  it("create with all parameters configured", async () => {
    const cClient = serviceClient.getShareClient(recorder.getUniqueName(shareName));
    const metadata = { key: "value" };
    await cClient.create({ metadata });
    const result = await cClient.getProperties();
    assert.deepStrictEqual(result.metadata, metadata);
  });

  it("delete", (done) => {
    // delete() with default parameters has been tested in afterEach
    done();
  });

  it("listFilesAndDirectories under root directory", async () => {
    const subDirClients = [];
    const rootDirClient = shareClient.getDirectoryClient("");

    const prefix = recorder.getUniqueName(
      `pre${recorder
        .newDate()
        .getTime()
        .toString()}`
    );
    for (let i = 0; i < 3; i++) {
      const subDirClient = rootDirClient.getDirectoryClient(
        recorder.getUniqueName(`${prefix}dir${i}`)
      );
      await subDirClient.create();
      subDirClients.push(subDirClient);
    }

    const subFileClients = [];
    for (let i = 0; i < 3; i++) {
      const subFileClient = rootDirClient.getFileClient(
        recorder.getUniqueName(`${prefix}file${i}`)
      );
      await subFileClient.create(1024);
      subFileClients.push(subFileClient);
    }

    const result = (await rootDirClient
      .listFilesAndDirectories({ prefix })
      .byPage()
      .next()).value;

    assert.ok(result.serviceEndpoint.length > 0);
    assert.ok(shareClient.url.indexOf(result.shareName));
    assert.deepStrictEqual(result.nextMarker, "");
    assert.deepStrictEqual(result.segment.directoryItems.length, subDirClients.length);
    assert.deepStrictEqual(result.segment.fileItems.length, subFileClients.length);

    let i = 0;
    for (const entry of result.segment.directoryItems) {
      assert.ok(subDirClients[i++].url.indexOf(entry.name) > 0);
    }

    i = 0;
    for (const entry of result.segment.fileItems) {
      assert.ok(subFileClients[i++].url.indexOf(entry.name) > 0);
    }

    for (const subFile of subFileClients) {
      await subFile.delete();
    }
    for (const subDir of subDirClients) {
      await subDir.delete();
    }
  });

  it("listFilesAndDirectories with all parameters confirgured", async () => {
    const subDirClients = [];
    const rootDirClient = shareClient.getDirectoryClient("");

    const prefix = recorder.getUniqueName(
      `pre${recorder
        .newDate()
        .getTime()
        .toString()}`
    );
    for (let i = 0; i < 3; i++) {
      const subDirClient = rootDirClient.getDirectoryClient(
        recorder.getUniqueName(`${prefix}dir${i}`)
      );
      await subDirClient.create();
      subDirClients.push(subDirClient);
    }

    const subFileClients = [];
    for (let i = 0; i < 3; i++) {
      const subFileClient = rootDirClient.getFileClient(
        recorder.getUniqueName(`${prefix}file${i}`)
      );
      await subFileClient.create(1024);
      subFileClients.push(subFileClient);
    }

    const firstRequestSize = Math.ceil((subDirClients.length + subFileClients.length) / 2);
    const secondRequestSize = subDirClients.length + subFileClients.length - firstRequestSize;

    const firstResult = (await rootDirClient
      .listFilesAndDirectories({ prefix })
      .byPage({ maxPageSize: firstRequestSize })
      .next()).value;

    assert.deepStrictEqual(
      firstResult.segment.directoryItems.length + firstResult.segment.fileItems.length,
      firstRequestSize
    );
    assert.notDeepEqual(firstResult.nextMarker, undefined);

    const secondResult = (await rootDirClient
      .listFilesAndDirectories({ prefix })
      .byPage({
        continuationToken: firstResult.nextMarker,
        maxPageSize: firstRequestSize + secondRequestSize
      })
      .next()).value;
    assert.deepStrictEqual(
      secondResult.segment.directoryItems.length + secondResult.segment.fileItems.length,
      secondRequestSize
    );

    for (const subFile of subFileClients) {
      await subFile.delete();
    }
    for (const subDir of subDirClients) {
      await subDir.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator for listFilesAndDirectories", async () => {
    const subDirClients = [];
    const rootDirClient = shareClient.getDirectoryClient("");

    const prefix = recorder.getUniqueName(
      `pre${recorder
        .newDate()
        .getTime()
        .toString()}`
    );
    for (let i = 0; i < 3; i++) {
      const subDirClient = rootDirClient.getDirectoryClient(
        recorder.getUniqueName(`${prefix}dir${i}`)
      );
      await subDirClient.create();
      subDirClients.push(subDirClient);
    }

    const subFileClients = [];
    for (let i = 0; i < 3; i++) {
      const subFileClient = rootDirClient.getFileClient(
        recorder.getUniqueName(`${prefix}file${i}`)
      );
      await subFileClient.create(1024);
      subFileClients.push(subFileClient);
    }

    for await (const entity of rootDirClient.listFilesAndDirectories({ prefix })) {
      assert.ok(entity.name.startsWith(prefix));
      if (entity.kind == "file") {
        assert.deepEqual(entity.properties.contentLength, 1024);
      }
    }

    for (const subFile of subFileClients) {
      await subFile.delete();
    }
    for (const subDir of subDirClients) {
      await subDir.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator(generator .next() syntax) for listFilesAndDirectories", async () => {
    const subDirClients = [];
    const rootDirClient = shareClient.getDirectoryClient("");

    const prefix = recorder.getUniqueName(
      `pre${recorder
        .newDate()
        .getTime()
        .toString()}`
    );
    for (let i = 0; i < 3; i++) {
      const subDirClient = rootDirClient.getDirectoryClient(
        recorder.getUniqueName(`${prefix}dir${i}`)
      );
      await subDirClient.create();
      subDirClients.push(subDirClient);
    }

    const subFileClients = [];
    for (let i = 0; i < 3; i++) {
      const subFileClient = rootDirClient.getFileClient(
        recorder.getUniqueName(`${prefix}file${i}`)
      );
      await subFileClient.create(1024);
      subFileClients.push(subFileClient);
    }

    const iter = await rootDirClient.listFilesAndDirectories({ prefix });
    let entity = (await iter.next()).value;
    assert.ok(entity.name.startsWith(prefix));
    if (entity.kind == "file") {
      assert.deepEqual(entity.properties.contentLength, 1024);
    }

    entity = (await iter.next()).value;
    assert.ok(entity.name.startsWith(prefix));
    if (entity.kind == "file") {
      assert.deepEqual(entity.properties.contentLength, 1024);
    }

    for (const subFile of subFileClients) {
      await subFile.delete();
    }
    for (const subDir of subDirClients) {
      await subDir.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator(byPage()) for listFilesAndDirectories", async () => {
    const subDirClients = [];
    const rootDirClient = shareClient.getDirectoryClient("");

    const prefix = recorder.getUniqueName(
      `pre${recorder
        .newDate()
        .getTime()
        .toString()}`
    );
    for (let i = 0; i < 3; i++) {
      const subDirClient = rootDirClient.getDirectoryClient(
        recorder.getUniqueName(`${prefix}dir${i}`)
      );
      await subDirClient.create();
      subDirClients.push(subDirClient);
    }

    const subFileClients = [];
    for (let i = 0; i < 3; i++) {
      const subFileClient = rootDirClient.getFileClient(
        recorder.getUniqueName(`${prefix}file${i}`)
      );
      await subFileClient.create(1024);
      subFileClients.push(subFileClient);
    }

    for await (const response of rootDirClient
      .listFilesAndDirectories({
        prefix
      })
      .byPage({ maxPageSize: 2 })) {
      for (const fileItem of response.segment.fileItems) {
        assert.ok(fileItem.name.startsWith(prefix));
        assert.deepEqual(fileItem.properties.contentLength, 1024);
      }
      for (const dirItem of response.segment.directoryItems) {
        assert.ok(dirItem.name.startsWith(prefix));
      }
    }

    for (const subFile of subFileClients) {
      await subFile.delete();
    }
    for (const subDir of subDirClients) {
      await subDir.delete();
    }
  });

  it("Verify PagedAsyncIterableIterator(byPage() - continuationToken) for listFilesAndDirectories", async () => {
    const subDirClients = [];
    const rootDirClient = shareClient.getDirectoryClient("");

    const prefix = recorder.getUniqueName(
      `pre${recorder
        .newDate()
        .getTime()
        .toString()}`
    );
    for (let i = 0; i < 3; i++) {
      const subDirClient = rootDirClient.getDirectoryClient(
        recorder.getUniqueName(`${prefix}dir${i}`)
      );
      await subDirClient.create();
      subDirClients.push(subDirClient);
    }

    const subFileClients = [];
    for (let i = 0; i < 3; i++) {
      const subFileClient = rootDirClient.getFileClient(
        recorder.getUniqueName(`${prefix}file${i}`)
      );
      await subFileClient.create(1024);
      subFileClients.push(subFileClient);
    }

    const firstRequestSize = Math.ceil((subDirClients.length + subFileClients.length) / 2);
    const secondRequestSize = subDirClients.length + subFileClients.length - firstRequestSize;

    let iter = await rootDirClient
      .listFilesAndDirectories({
        prefix
      })
      .byPage({ maxPageSize: firstRequestSize });
    let response = (await iter.next()).value;

    assert.deepStrictEqual(
      response.segment.directoryItems.length + response.segment.fileItems.length,
      firstRequestSize
    );
    assert.notDeepEqual(response.nextMarker, undefined);

    iter = await rootDirClient
      .listFilesAndDirectories({
        prefix
      })
      .byPage({
        continuationToken: response.nextMarker,
        maxPageSize: firstRequestSize + secondRequestSize
      });
    response = (await iter.next()).value;
    assert.deepStrictEqual(
      response.segment.directoryItems.length + response.segment.fileItems.length,
      secondRequestSize
    );

    for (const subFile of subFileClients) {
      await subFile.delete();
    }
    for (const subDir of subDirClients) {
      await subDir.delete();
    }
  });

  it("createSubDirectory and deleteSubDirectory", async () => {
    const directoryName = recorder.getUniqueName("directory");
    const metadata = { key: "value" };

    const { directoryClient: subDirClient } = await dirClient.createSubdirectory(directoryName, {
      metadata
    });
    const result = await subDirClient.getProperties();
    assert.deepEqual(result.metadata, metadata);

    await dirClient.deleteSubdirectory(directoryName);
    try {
      await subDirClient.getProperties();
      assert.fail(
        "Expecting an error in getting properties from a deleted block blob but didn't get one."
      );
    } catch (error) {
      assert.ok((error.statusCode as number) === 404);
    }
  });

  it("createFile and deleteFile", async () => {
    const directoryName = recorder.getUniqueName("directory");
    const { directoryClient: subDirClient } = await dirClient.createSubdirectory(directoryName);
    const fileName = recorder.getUniqueName("file");
    const metadata = { key: "value" };
    const { fileClient } = await subDirClient.createFile(fileName, 256, { metadata });
    const result = await fileClient.getProperties();
    assert.deepEqual(result.metadata, metadata);

    await subDirClient.deleteFile(fileName);
    try {
      await fileClient.getProperties();
      assert.fail(
        "Expecting an error in getting properties from a deleted block blob but didn't get one."
      );
    } catch (error) {
      assert.ok((error.statusCode as number) === 404);
    }
    await subDirClient.delete();
  });

  it("listHandles should work", async () => {
    // TODO: Open or create a handle; Currently can only be done manually; No REST APIs for creating handles

    const result = await dirClient.listHandlesSegment(undefined);
    if (result.handleList !== undefined && result.handleList.length > 0) {
      const handle = result.handleList[0];
      assert.notDeepStrictEqual(handle.handleId, undefined);
      assert.notDeepStrictEqual(handle.path, undefined);
      assert.notDeepStrictEqual(handle.fileId, undefined);
      assert.notDeepStrictEqual(handle.sessionId, undefined);
      assert.notDeepStrictEqual(handle.clientIp, undefined);
      assert.notDeepStrictEqual(handle.openTime, undefined);
    }
  });

  it("forceCloseHandlesSegment should work", async () => {
    // TODO: Open or create a handle; Currently can only be done manually; No REST APIs for creating handles

    let marker: string | undefined = "";

    do {
      const response: DirectoryForceCloseHandlesResponse = await dirClient.forceCloseHandlesSegment(
        marker,
        {
          recursive: true
        }
      );
      marker = response.marker;
    } while (marker);
  });

  it("forceCloseHandle should work", async () => {
    // TODO: Open or create a handle; Currently can only be done manually; No REST APIs for creating handles

    const result = await dirClient.listHandlesSegment(undefined);
    if (result.handleList !== undefined && result.handleList.length > 0) {
      const handle = result.handleList[0];
      await dirClient.forceCloseHandle(handle.handleId);
    }
  });
});
