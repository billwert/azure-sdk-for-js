/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Settings about different configurations in security center
 *
 * @summary Settings about different configurations in security center
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-07-01/examples/Settings/GetSettings_example.json
 */
async function getSettingsOfSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.settings.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSettingsOfSubscription().catch(console.error);
