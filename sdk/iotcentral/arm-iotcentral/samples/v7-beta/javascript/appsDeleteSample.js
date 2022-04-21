/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IotCentralClient } = require("@azure/arm-iotcentral");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete an IoT Central application.
 *
 * @summary Delete an IoT Central application.
 * x-ms-original-file: specification/iotcentral/resource-manager/Microsoft.IoTCentral/preview/2021-11-01-preview/examples/Apps_Delete.json
 */
async function appsDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "resRg";
  const resourceName = "myIoTCentralApp";
  const credential = new DefaultAzureCredential();
  const client = new IotCentralClient(credential, subscriptionId);
  const result = await client.apps.beginDeleteAndWait(resourceGroupName, resourceName);
  console.log(result);
}

appsDelete().catch(console.error);
