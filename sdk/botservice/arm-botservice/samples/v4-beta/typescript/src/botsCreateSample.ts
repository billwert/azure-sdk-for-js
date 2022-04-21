/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Bot, AzureBotService } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a Bot Service. Bot Service is a resource group wide resource type.
 *
 * @summary Creates a Bot Service. Bot Service is a resource group wide resource type.
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/CreateBot.json
 */
async function createBot() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const parameters: Bot = {
    etag: "etag1",
    kind: "sdk",
    location: "West US",
    properties: {
      description: "The description of the bot",
      cmekKeyVaultUrl: "https://myCmekKey",
      developerAppInsightKey: "appinsightskey",
      developerAppInsightsApiKey: "appinsightsapikey",
      developerAppInsightsApplicationId: "appinsightsappid",
      disableLocalAuth: true,
      displayName: "The Name of the bot",
      endpoint: "http://mybot.coffee",
      iconUrl: "http://myicon",
      isCmekEnabled: true,
      luisAppIds: ["luisappid1", "luisappid2"],
      luisKey: "luiskey",
      msaAppId: "exampleappid",
      msaAppMSIResourceId:
        "/subscriptions/foo/resourcegroups/bar/providers/microsoft.managedidentity/userassignedidentities/sampleId",
      msaAppTenantId: "exampleapptenantid",
      msaAppType: "UserAssignedMSI",
      publicNetworkAccess: "Enabled",
      schemaTransformationVersion: "1.0"
    },
    sku: { name: "S1" },
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.bots.create(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

createBot().catch(console.error);
