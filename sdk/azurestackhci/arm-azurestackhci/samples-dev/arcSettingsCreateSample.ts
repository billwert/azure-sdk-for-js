/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ArcSetting, AzureStackHCIClient } from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create ArcSetting for HCI cluster.
 *
 * @summary Create ArcSetting for HCI cluster.
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/stable/2022-01-01/examples/PutArcSetting.json
 */
async function createArcSetting() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "test-rg";
  const clusterName = "myCluster";
  const arcSettingName = "default";
  const arcSetting: ArcSetting = {};
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.arcSettings.create(
    resourceGroupName,
    clusterName,
    arcSettingName,
    arcSetting
  );
  console.log(result);
}

createArcSetting().catch(console.error);
