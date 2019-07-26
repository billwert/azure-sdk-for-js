/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/serviceMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Service. */
export class Service {
  private readonly client: StorageClientContext;

  /**
   * Create a Service.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Sets properties for a storage account's Blob service endpoint, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules
   * @param storageServiceProperties The StorageService properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceSetPropertiesResponse>
   */
  setProperties(
    storageServiceProperties: Models.StorageServiceProperties,
    options?: Models.ServiceSetPropertiesOptionalParams
  ): Promise<Models.ServiceSetPropertiesResponse>;
  /**
   * @param storageServiceProperties The StorageService properties.
   * @param callback The callback
   */
  setProperties(
    storageServiceProperties: Models.StorageServiceProperties,
    callback: coreHttp.ServiceCallback<void>
  ): void;
  /**
   * @param storageServiceProperties The StorageService properties.
   * @param options The optional parameters
   * @param callback The callback
   */
  setProperties(
    storageServiceProperties: Models.StorageServiceProperties,
    options: Models.ServiceSetPropertiesOptionalParams,
    callback: coreHttp.ServiceCallback<void>
  ): void;
  setProperties(
    storageServiceProperties: Models.StorageServiceProperties,
    options?: Models.ServiceSetPropertiesOptionalParams | coreHttp.ServiceCallback<void>,
    callback?: coreHttp.ServiceCallback<void>
  ): Promise<Models.ServiceSetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        storageServiceProperties,
        options
      },
      setPropertiesOperationSpec,
      callback
    ) as Promise<Models.ServiceSetPropertiesResponse>;
  }

  /**
   * gets the properties of a storage account's Blob service, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceGetPropertiesResponse>
   */
  getProperties(
    options?: Models.ServiceGetPropertiesOptionalParams
  ): Promise<Models.ServiceGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: coreHttp.ServiceCallback<Models.StorageServiceProperties>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(
    options: Models.ServiceGetPropertiesOptionalParams,
    callback: coreHttp.ServiceCallback<Models.StorageServiceProperties>
  ): void;
  getProperties(
    options?:
      | Models.ServiceGetPropertiesOptionalParams
      | coreHttp.ServiceCallback<Models.StorageServiceProperties>,
    callback?: coreHttp.ServiceCallback<Models.StorageServiceProperties>
  ): Promise<Models.ServiceGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback
    ) as Promise<Models.ServiceGetPropertiesResponse>;
  }

  /**
   * Retrieves statistics related to replication for the Blob service. It is only available on the
   * secondary location endpoint when read-access geo-redundant replication is enabled for the
   * storage account.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceGetStatisticsResponse>
   */
  getStatistics(
    options?: Models.ServiceGetStatisticsOptionalParams
  ): Promise<Models.ServiceGetStatisticsResponse>;
  /**
   * @param callback The callback
   */
  getStatistics(callback: coreHttp.ServiceCallback<Models.StorageServiceStats>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getStatistics(
    options: Models.ServiceGetStatisticsOptionalParams,
    callback: coreHttp.ServiceCallback<Models.StorageServiceStats>
  ): void;
  getStatistics(
    options?:
      | Models.ServiceGetStatisticsOptionalParams
      | coreHttp.ServiceCallback<Models.StorageServiceStats>,
    callback?: coreHttp.ServiceCallback<Models.StorageServiceStats>
  ): Promise<Models.ServiceGetStatisticsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getStatisticsOperationSpec,
      callback
    ) as Promise<Models.ServiceGetStatisticsResponse>;
  }

  /**
   * The List Containers Segment operation returns a list of the containers under the specified
   * account
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListContainersSegmentResponse>
   */
  listContainersSegment(
    options?: Models.ServiceListContainersSegmentOptionalParams
  ): Promise<Models.ServiceListContainersSegmentResponse>;
  /**
   * @param callback The callback
   */
  listContainersSegment(
    callback: coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>
  ): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listContainersSegment(
    options: Models.ServiceListContainersSegmentOptionalParams,
    callback: coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>
  ): void;
  listContainersSegment(
    options?:
      | Models.ServiceListContainersSegmentOptionalParams
      | coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>,
    callback?: coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>
  ): Promise<Models.ServiceListContainersSegmentResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listContainersSegmentOperationSpec,
      callback
    ) as Promise<Models.ServiceListContainersSegmentResponse>;
  }

  /**
   * Retrieves a user delgation key for the Blob service. This is only a valid operation when using
   * bearer token authentication.
   * @param keyInfo
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceGetUserDelegationKeyResponse>
   */
  getUserDelegationKey(
    keyInfo: Models.KeyInfo,
    options?: Models.ServiceGetUserDelegationKeyOptionalParams
  ): Promise<Models.ServiceGetUserDelegationKeyResponse>;
  /**
   * @param keyInfo
   * @param callback The callback
   */
  getUserDelegationKey(
    keyInfo: Models.KeyInfo,
    callback: coreHttp.ServiceCallback<Models.UserDelegationKey>
  ): void;
  /**
   * @param keyInfo
   * @param options The optional parameters
   * @param callback The callback
   */
  getUserDelegationKey(
    keyInfo: Models.KeyInfo,
    options: Models.ServiceGetUserDelegationKeyOptionalParams,
    callback: coreHttp.ServiceCallback<Models.UserDelegationKey>
  ): void;
  getUserDelegationKey(
    keyInfo: Models.KeyInfo,
    options?:
      | Models.ServiceGetUserDelegationKeyOptionalParams
      | coreHttp.ServiceCallback<Models.UserDelegationKey>,
    callback?: coreHttp.ServiceCallback<Models.UserDelegationKey>
  ): Promise<Models.ServiceGetUserDelegationKeyResponse> {
    return this.client.sendOperationRequest(
      {
        keyInfo,
        options
      },
      getUserDelegationKeyOperationSpec,
      callback
    ) as Promise<Models.ServiceGetUserDelegationKeyResponse>;
  }

  /**
   * Returns the sku name and account kind
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceGetAccountInfoResponse>
   */
  getAccountInfo(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.ServiceGetAccountInfoResponse>;
  /**
   * @param callback The callback
   */
  getAccountInfo(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAccountInfo(
    options: coreHttp.RequestOptionsBase,
    callback: coreHttp.ServiceCallback<void>
  ): void;
  getAccountInfo(
    options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>,
    callback?: coreHttp.ServiceCallback<void>
  ): Promise<Models.ServiceGetAccountInfoResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAccountInfoOperationSpec,
      callback
    ) as Promise<Models.ServiceGetAccountInfoResponse>;
  }

  /**
   * The List Containers Segment operation returns a list of the containers under the specified
   * account
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceListContainersSegmentResponse>
   */
  listContainersSegmentNext(
    nextPageLink: string,
    options?: Models.ServiceListContainersSegmentNextOptionalParams
  ): Promise<Models.ServiceListContainersSegmentResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listContainersSegmentNext(
    nextPageLink: string,
    callback: coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listContainersSegmentNext(
    nextPageLink: string,
    options: Models.ServiceListContainersSegmentNextOptionalParams,
    callback: coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>
  ): void;
  listContainersSegmentNext(
    nextPageLink: string,
    options?:
      | Models.ServiceListContainersSegmentNextOptionalParams
      | coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>,
    callback?: coreHttp.ServiceCallback<Models.ListContainersSegmentResponse>
  ): Promise<Models.ServiceListContainersSegmentResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listContainersSegmentNextOperationSpec,
      callback
    ) as Promise<Models.ServiceListContainersSegmentResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype0, Parameters.comp0],
  headerParameters: [Parameters.version, Parameters.requestId],
  requestBody: {
    parameterPath: "storageServiceProperties",
    mapper: {
      ...Mappers.StorageServiceProperties,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.ServiceSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype0, Parameters.comp0],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceProperties,
      headersMapper: Mappers.ServiceGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getStatisticsOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype0, Parameters.comp1],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceStats,
      headersMapper: Mappers.ServiceGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const listContainersSegmentOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.url],
  queryParameters: [
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxresults,
    Parameters.include0,
    Parameters.timeout,
    Parameters.comp2
  ],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersSegmentResponse,
      headersMapper: Mappers.ServiceListContainersSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getUserDelegationKeyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype0, Parameters.comp3],
  headerParameters: [Parameters.version, Parameters.requestId],
  requestBody: {
    parameterPath: "keyInfo",
    mapper: {
      ...Mappers.KeyInfo,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    200: {
      bodyMapper: Mappers.UserDelegationKey,
      headersMapper: Mappers.ServiceGetUserDelegationKeyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getAccountInfoOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.restype1, Parameters.comp0],
  headerParameters: [Parameters.version],
  responses: {
    200: {
      headersMapper: Mappers.ServiceGetAccountInfoHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const listContainersSegmentNextOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{url}",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersSegmentResponse,
      headersMapper: Mappers.ServiceListContainersSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
