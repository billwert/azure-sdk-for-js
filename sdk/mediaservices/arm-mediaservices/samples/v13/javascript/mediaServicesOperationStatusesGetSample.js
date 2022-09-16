/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get media service operation status.
 *
 * @summary Get media service operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/media-service-operation-status-by-id-non-terminal-state-failed.json
 */
async function getStatusOfAsynchronousOperationWhenItIsCompletedWithError() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "D612C429-2526-49D5-961B-885AE11406FD";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationStatuses.get(locationName, operationId);
  console.log(result);
}

getStatusOfAsynchronousOperationWhenItIsCompletedWithError().catch(console.error);

/**
 * This sample demonstrates how to Get media service operation status.
 *
 * @summary Get media service operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/media-service-operation-status-by-id-terminal-state.json
 */
async function getStatusOfAsynchronousOperationWhenItIsCompleted() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "D612C429-2526-49D5-961B-885AE11406FD";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationStatuses.get(locationName, operationId);
  console.log(result);
}

getStatusOfAsynchronousOperationWhenItIsCompleted().catch(console.error);

/**
 * This sample demonstrates how to Get media service operation status.
 *
 * @summary Get media service operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/media-service-operation-status-by-id-non-terminal-state.json
 */
async function getStatusOfAsynchronousOperationWhenItIsOngoing() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const locationName = "westus";
  const operationId = "D612C429-2526-49D5-961B-885AE11406FD";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaServicesOperationStatuses.get(locationName, operationId);
  console.log(result);
}

getStatusOfAsynchronousOperationWhenItIsOngoing().catch(console.error);