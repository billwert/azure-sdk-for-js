/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlDatabaseThroughputGet.json
 */
async function cosmosDbSqlDatabaseThroughputGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlDatabaseThroughput(
    resourceGroupName,
    accountName,
    databaseName
  );
  console.log(result);
}

cosmosDbSqlDatabaseThroughputGet().catch(console.error);
