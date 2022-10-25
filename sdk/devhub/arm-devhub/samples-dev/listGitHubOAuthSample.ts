/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DeveloperHubServiceClient } from "@azure/arm-devhub";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Callback URL to hit once authenticated with GitHub App to have the service store the OAuth token.
 *
 * @summary Callback URL to hit once authenticated with GitHub App to have the service store the OAuth token.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-04-01-preview/examples/GitHubOAuth_List.json
 */
async function listGitHubOAuth() {
  const subscriptionId = "subscriptionId1";
  const location = "eastus2euap";
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const result = await client.listGitHubOAuth(location);
  console.log(result);
}

listGitHubOAuth().catch(console.error);
