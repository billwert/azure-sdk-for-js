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
  Certificate,
  CertificatesCreateOrUpdateOptionalParams,
  ContainerAppsAPIClient
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or Update a Certificate.
 *
 * @summary Create or Update a Certificate.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/Certificate_CreateOrUpdate.json
 */
async function createOrUpdateCertificate() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const environmentName = "testcontainerenv";
  const certificateName = "certificate-firendly-name";
  const certificateEnvelope: Certificate = {
    location: "East US",
    properties: {
      password: "private key password",
      value: Buffer.from("PFX-or-PEM-blob")
    }
  };
  const options: CertificatesCreateOrUpdateOptionalParams = {
    certificateEnvelope
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.certificates.createOrUpdate(
    resourceGroupName,
    environmentName,
    certificateName,
    options
  );
  console.log(result);
}

createOrUpdateCertificate().catch(console.error);
