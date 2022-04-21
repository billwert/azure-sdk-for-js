/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AgentPool,
  AgentPoolsListOptionalParams,
  AgentPoolsGetOptionalParams,
  AgentPoolsGetResponse,
  AgentPoolsCreateOrUpdateOptionalParams,
  AgentPoolsCreateOrUpdateResponse,
  AgentPoolsDeleteOptionalParams,
  AgentPoolsGetUpgradeProfileOptionalParams,
  AgentPoolsGetUpgradeProfileResponse,
  AgentPoolsGetAvailableAgentPoolVersionsOptionalParams,
  AgentPoolsGetAvailableAgentPoolVersionsResponse,
  AgentPoolsUpgradeNodeImageVersionOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AgentPools. */
export interface AgentPools {
  /**
   * Gets a list of agent pools in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: AgentPoolsListOptionalParams
  ): PagedAsyncIterableIterator<AgentPool>;
  /**
   * Gets the specified managed cluster agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsGetOptionalParams
  ): Promise<AgentPoolsGetResponse>;
  /**
   * Creates or updates an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param parameters The agent pool to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    parameters: AgentPool,
    options?: AgentPoolsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AgentPoolsCreateOrUpdateResponse>,
      AgentPoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param parameters The agent pool to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    parameters: AgentPool,
    options?: AgentPoolsCreateOrUpdateOptionalParams
  ): Promise<AgentPoolsCreateOrUpdateResponse>;
  /**
   * Deletes an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the upgrade profile for an agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  getUpgradeProfile(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsGetUpgradeProfileOptionalParams
  ): Promise<AgentPoolsGetUpgradeProfileResponse>;
  /**
   * See [supported Kubernetes
   * versions](https://docs.microsoft.com/azure/aks/supported-kubernetes-versions) for more details about
   * the version lifecycle.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  getAvailableAgentPoolVersions(
    resourceGroupName: string,
    resourceName: string,
    options?: AgentPoolsGetAvailableAgentPoolVersionsOptionalParams
  ): Promise<AgentPoolsGetAvailableAgentPoolVersionsResponse>;
  /**
   * Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the
   * nodes. AKS provides one new image per week with the latest updates. For more details on node image
   * versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginUpgradeNodeImageVersion(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsUpgradeNodeImageVersionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the
   * nodes. AKS provides one new image per week with the latest updates. For more details on node image
   * versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginUpgradeNodeImageVersionAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsUpgradeNodeImageVersionOptionalParams
  ): Promise<void>;
}
