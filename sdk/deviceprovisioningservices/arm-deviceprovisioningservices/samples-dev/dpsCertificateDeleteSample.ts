/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IotDpsClient } from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified certificate associated with the Provisioning Service
 *
 * @summary Deletes the specified certificate associated with the Provisioning Service
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2021-10-15/examples/DPSDeleteCertificate.json
 */
async function dpsDeleteCertificate() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName = "myResourceGroup";
  const ifMatch = "AAAAAAAADGk=";
  const provisioningServiceName = "myFirstProvisioningService";
  const certificateName = "cert";
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.dpsCertificate.delete(
    resourceGroupName,
    ifMatch,
    provisioningServiceName,
    certificateName
  );
  console.log(result);
}

dpsDeleteCertificate().catch(console.error);
