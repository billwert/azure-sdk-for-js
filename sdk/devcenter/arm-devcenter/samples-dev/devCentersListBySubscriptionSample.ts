/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all devcenters in a subscription.
 *
 * @summary Lists all devcenters in a subscription.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/DevCenters_ListBySubscription.json
 */
async function devCentersListBySubscription() {
  const subscriptionId = "{subscriptionId}";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.devCenters.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

devCentersListBySubscription().catch(console.error);
