/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Triggers a policy evaluation scan for all the resources under the resource group.
 *
 * @summary Triggers a policy evaluation scan for all the resources under the resource group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_TriggerResourceGroupEvaluation.json
 */
async function triggerEvaluationsForAllResourcesInAResourceGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.policyStates.beginTriggerResourceGroupEvaluationAndWait(
    subscriptionId,
    resourceGroupName
  );
  console.log(result);
}

triggerEvaluationsForAllResourcesInAResourceGroup().catch(console.error);
