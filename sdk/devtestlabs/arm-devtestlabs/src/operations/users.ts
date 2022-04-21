/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Users } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  User,
  UsersListNextOptionalParams,
  UsersListOptionalParams,
  UsersListResponse,
  UsersGetOptionalParams,
  UsersGetResponse,
  UsersCreateOrUpdateOptionalParams,
  UsersCreateOrUpdateResponse,
  UsersDeleteOptionalParams,
  UserFragment,
  UsersUpdateOptionalParams,
  UsersUpdateResponse,
  UsersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Users operations. */
export class UsersImpl implements Users {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Users class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List user profiles in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    options?: UsersListOptionalParams
  ): PagedAsyncIterableIterator<User> {
    const iter = this.listPagingAll(resourceGroupName, labName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, labName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    options?: UsersListOptionalParams
  ): AsyncIterableIterator<User[]> {
    let result = await this._list(resourceGroupName, labName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    options?: UsersListOptionalParams
  ): AsyncIterableIterator<User> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List user profiles in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    options?: UsersListOptionalParams
  ): Promise<UsersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, options },
      listOperationSpec
    );
  }

  /**
   * Get user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: UsersGetOptionalParams
  ): Promise<UsersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    user: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<UsersCreateOrUpdateResponse>,
      UsersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<UsersCreateOrUpdateResponse> => {
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
      { resourceGroupName, labName, name, user, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or replace an existing user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    user: User,
    options?: UsersCreateOrUpdateOptionalParams
  ): Promise<UsersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      labName,
      name,
      user,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: UsersDeleteOptionalParams
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
      { resourceGroupName, labName, name, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete user profile. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: UsersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      labName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Allows modifying tags of user profiles. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the user profile.
   * @param user Profile of a lab user.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    name: string,
    user: UserFragment,
    options?: UsersUpdateOptionalParams
  ): Promise<UsersUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, user, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    nextLink: string,
    options?: UsersListNextOptionalParams
  ): Promise<UsersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    201: {
      bodyMapper: Mappers.User
    },
    202: {
      bodyMapper: Mappers.User
    },
    204: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.user,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.user1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
