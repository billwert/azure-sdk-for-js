/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationStatusResult,
  OperationStatusListOptionalParams,
  OperationStatusGetOptionalParams,
  OperationStatusGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OperationStatus. */
export interface OperationStatus {
  /**
   * List Async Operations, currently in progress, in a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: OperationStatusListOptionalParams
  ): PagedAsyncIterableIterator<OperationStatusResult>;
  /**
   * Get Async Operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param operationId operation Id
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    operationId: string,
    options?: OperationStatusGetOptionalParams
  ): Promise<OperationStatusGetResponse>;
}
