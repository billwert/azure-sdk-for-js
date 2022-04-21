/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PolicyRestrictions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyInsightsClient } from "../policyInsightsClient";
import {
  CheckRestrictionsRequest,
  PolicyRestrictionsCheckAtSubscriptionScopeOptionalParams,
  PolicyRestrictionsCheckAtSubscriptionScopeResponse,
  PolicyRestrictionsCheckAtResourceGroupScopeOptionalParams,
  PolicyRestrictionsCheckAtResourceGroupScopeResponse,
  CheckManagementGroupRestrictionsRequest,
  PolicyRestrictionsCheckAtManagementGroupScopeOptionalParams,
  PolicyRestrictionsCheckAtManagementGroupScopeResponse
} from "../models";

/** Class containing PolicyRestrictions operations. */
export class PolicyRestrictionsImpl implements PolicyRestrictions {
  private readonly client: PolicyInsightsClient;

  /**
   * Initialize a new instance of the class PolicyRestrictions class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyInsightsClient) {
    this.client = client;
  }

  /**
   * Checks what restrictions Azure Policy will place on a resource within a subscription.
   * @param parameters The check policy restrictions parameters.
   * @param options The options parameters.
   */
  checkAtSubscriptionScope(
    parameters: CheckRestrictionsRequest,
    options?: PolicyRestrictionsCheckAtSubscriptionScopeOptionalParams
  ): Promise<PolicyRestrictionsCheckAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      checkAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * Checks what restrictions Azure Policy will place on a resource within a resource group. Use this
   * when the resource group the resource will be created in is already known.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The check policy restrictions parameters.
   * @param options The options parameters.
   */
  checkAtResourceGroupScope(
    resourceGroupName: string,
    parameters: CheckRestrictionsRequest,
    options?: PolicyRestrictionsCheckAtResourceGroupScopeOptionalParams
  ): Promise<PolicyRestrictionsCheckAtResourceGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, parameters, options },
      checkAtResourceGroupScopeOperationSpec
    );
  }

  /**
   * Checks what restrictions Azure Policy will place on resources within a management group.
   * @param managementGroupId Management group ID.
   * @param parameters The check policy restrictions parameters.
   * @param options The options parameters.
   */
  checkAtManagementGroupScope(
    managementGroupId: string,
    parameters: CheckManagementGroupRestrictionsRequest,
    options?: PolicyRestrictionsCheckAtManagementGroupScopeOptionalParams
  ): Promise<PolicyRestrictionsCheckAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, parameters, options },
      checkAtManagementGroupScopeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/checkPolicyRestrictions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckRestrictionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const checkAtResourceGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/checkPolicyRestrictions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckRestrictionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const checkAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/checkPolicyRestrictions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckRestrictionsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupsNamespace,
    Parameters.managementGroupId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
