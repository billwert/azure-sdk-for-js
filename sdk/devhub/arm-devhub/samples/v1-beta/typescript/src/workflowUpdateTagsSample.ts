/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, DeveloperHubServiceClient } from "@azure/arm-devhub";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates tags on a workflow.
 *
 * @summary Updates tags on a workflow.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-04-01-preview/examples/Workflow_UpdateTags.json
 */
async function updateManagedClusterTags() {
  const subscriptionId = "subscriptionId1";
  const resourceGroupName = "resourceGroup1";
  const workflowName = "workflow1";
  const parameters: TagsObject = {
    tags: { promote: "false", resourceEnv: "testing" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const result = await client.workflowOperations.updateTags(
    resourceGroupName,
    workflowName,
    parameters
  );
  console.log(result);
}

updateManagedClusterTags().catch(console.error);
