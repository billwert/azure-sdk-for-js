/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CdnManagementClient } = require("@azure/arm-cdn");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Check the quota and actual usage of the CDN profiles under the given subscription.
 *
 * @summary Check the quota and actual usage of the CDN profiles under the given subscription.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/ResourceUsage_List.json
 */
async function resourceUsageList() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourceUsageOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

resourceUsageList().catch(console.error);
