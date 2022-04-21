/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServices } from "../azureMediaServices";
import {
  OperationStatusesGetOptionalParams,
  OperationStatusesGetResponse
} from "../models";

/** Class containing OperationStatuses operations. */
export class OperationStatusesImpl implements OperationStatuses {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class OperationStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Get asset track operation status.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param operationId Operation Id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    operationId: string,
    options?: OperationStatusesGetOptionalParams
  ): Promise<OperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        assetName,
        trackName,
        operationId,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks/{trackName}/operationStatuses/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssetTrackOperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.trackName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
