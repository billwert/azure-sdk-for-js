/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DevCenterClient } = require("@azure/arm-devcenter");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the current status of an async operation.
 *
 * @summary Gets the current status of an async operation.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/OperationStatus_Get.json
 */
async function getOperationStatus() {
  const subscriptionId = "{subscriptionId}";
  const location = "{location}";
  const operationId = "{operationId}";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.operationStatuses.get(location, operationId);
  console.log(result);
}

getOperationStatus().catch(console.error);
