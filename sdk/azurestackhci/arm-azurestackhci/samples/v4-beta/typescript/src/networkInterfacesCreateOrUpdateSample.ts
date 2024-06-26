/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NetworkInterfaces,
  AzureStackHCIClient
} from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create or update a network interface. Please note some properties can be set only during network interface creation.
 *
 * @summary The operation to create or update a network interface. Please note some properties can be set only during network interface creation.
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/preview/2023-09-01-preview/examples/PutNetworkInterface.json
 */
async function putNetworkInterface() {
  const subscriptionId =
    process.env["AZURESTACKHCI_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["AZURESTACKHCI_RESOURCE_GROUP"] || "test-rg";
  const networkInterfaceName = "test-nic";
  const networkInterfaces: NetworkInterfaces = {
    extendedLocation: {
      name:
        "/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location",
      type: "CustomLocation"
    },
    ipConfigurations: [
      { name: "ipconfig-sample", properties: { subnet: { id: "test-lnet" } } }
    ],
    location: "West US2"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.networkInterfacesOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkInterfaceName,
    networkInterfaces
  );
  console.log(result);
}

async function main() {
  putNetworkInterface();
}

main().catch(console.error);
