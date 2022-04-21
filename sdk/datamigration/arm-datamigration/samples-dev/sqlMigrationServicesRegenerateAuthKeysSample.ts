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
  RegenAuthKeys,
  DataMigrationManagementClient
} from "@azure/arm-datamigration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime.
 *
 * @summary Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/RegenAuthKeysMigrationService.json
 */
async function regenerateTheOfAuthenticationKeys() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlMigrationServiceName = "service1";
  const parameters: RegenAuthKeys = { keyName: "authKey1" };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.sqlMigrationServices.regenerateAuthKeys(
    resourceGroupName,
    sqlMigrationServiceName,
    parameters
  );
  console.log(result);
}

regenerateTheOfAuthenticationKeys().catch(console.error);
