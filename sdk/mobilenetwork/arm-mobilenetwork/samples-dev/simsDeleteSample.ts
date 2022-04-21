/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified sim.
 *
 * @summary Deletes the specified sim.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-03-01-preview/examples/SimDelete.json
 */
async function deleteSim() {
  const subscriptionId = "subid";
  const resourceGroupName = "testResourceGroupName";
  const simName = "testSim";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.sims.beginDeleteAndWait(
    resourceGroupName,
    simName
  );
  console.log(result);
}

deleteSim().catch(console.error);
