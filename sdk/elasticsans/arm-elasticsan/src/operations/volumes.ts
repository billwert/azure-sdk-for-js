/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Volumes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ElasticSanManagement } from "../elasticSanManagement";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Volume,
  VolumesListByVolumeGroupNextOptionalParams,
  VolumesListByVolumeGroupOptionalParams,
  VolumesCreateOptionalParams,
  VolumesCreateResponse,
  VolumeUpdate,
  VolumesUpdateOptionalParams,
  VolumesUpdateResponse,
  VolumesDeleteOptionalParams,
  VolumesGetOptionalParams,
  VolumesGetResponse,
  VolumesListByVolumeGroupResponse,
  VolumesListByVolumeGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Volumes operations. */
export class VolumesImpl implements Volumes {
  private readonly client: ElasticSanManagement;

  /**
   * Initialize a new instance of the class Volumes class.
   * @param client Reference to the service client
   */
  constructor(client: ElasticSanManagement) {
    this.client = client;
  }

  /**
   * List Volumes in a VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  public listByVolumeGroup(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumesListByVolumeGroupOptionalParams
  ): PagedAsyncIterableIterator<Volume> {
    const iter = this.listByVolumeGroupPagingAll(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByVolumeGroupPagingPage(
          resourceGroupName,
          elasticSanName,
          volumeGroupName,
          options
        );
      }
    };
  }

  private async *listByVolumeGroupPagingPage(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumesListByVolumeGroupOptionalParams
  ): AsyncIterableIterator<Volume[]> {
    let result = await this._listByVolumeGroup(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByVolumeGroupNext(
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByVolumeGroupPagingAll(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumesListByVolumeGroupOptionalParams
  ): AsyncIterableIterator<Volume> {
    for await (const page of this.listByVolumeGroupPagingPage(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param parameters Volume object.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    parameters: Volume,
    options?: VolumesCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<VolumesCreateResponse>, VolumesCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VolumesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        parameters,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param parameters Volume object.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    parameters: Volume,
    options?: VolumesCreateOptionalParams
  ): Promise<VolumesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      volumeName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param parameters Volume object.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    parameters: VolumeUpdate,
    options?: VolumesUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<VolumesUpdateResponse>, VolumesUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VolumesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        parameters,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param parameters Volume object.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    parameters: VolumeUpdate,
    options?: VolumesUpdateOptionalParams
  ): Promise<VolumesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      volumeName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete an Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete an Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    options?: VolumesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      volumeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get an Volume.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param volumeName The name of the Volume.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    volumeName: string,
    options?: VolumesGetOptionalParams
  ): Promise<VolumesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * List Volumes in a VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  private _listByVolumeGroup(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumesListByVolumeGroupOptionalParams
  ): Promise<VolumesListByVolumeGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, elasticSanName, volumeGroupName, options },
      listByVolumeGroupOperationSpec
    );
  }

  /**
   * ListByVolumeGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param nextLink The nextLink from the previous successful call to the ListByVolumeGroup method.
   * @param options The options parameters.
   */
  private _listByVolumeGroupNext(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    nextLink: string,
    options?: VolumesListByVolumeGroupNextOptionalParams
  ): Promise<VolumesListByVolumeGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, elasticSanName, volumeGroupName, nextLink, options },
      listByVolumeGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Volume
    },
    201: {
      bodyMapper: Mappers.Volume
    },
    202: {
      bodyMapper: Mappers.Volume
    },
    204: {
      bodyMapper: Mappers.Volume
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
    Parameters.volumeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Volume
    },
    201: {
      bodyMapper: Mappers.Volume
    },
    202: {
      bodyMapper: Mappers.Volume
    },
    204: {
      bodyMapper: Mappers.Volume
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
    Parameters.volumeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
    Parameters.volumeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Volume
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
    Parameters.volumeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByVolumeGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByVolumeGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.nextLink,
    Parameters.volumeGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
