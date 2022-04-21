/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureDatabricksManagementClient } = require("@azure/arm-databricks");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates vNet Peering for workspace.
 *
 * @summary Creates vNet Peering for workspace.
 * x-ms-original-file: specification/databricks/resource-manager/Microsoft.Databricks/preview/2021-04-01-preview/examples/WorkspaceVirtualNetworkPeeringCreateOrUpdate.json
 */
async function createVNetPeeringForWorkspace() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg";
  const workspaceName = "myWorkspace";
  const peeringName = "vNetPeeringTest";
  const virtualNetworkPeeringParameters = {
    allowForwardedTraffic: false,
    allowGatewayTransit: false,
    allowVirtualNetworkAccess: true,
    remoteVirtualNetwork: {
      id: "/subscriptions/0140911e-1040-48da-8bc9-b99fb3dd88a6/resourceGroups/subramantest/providers/Microsoft.Network/virtualNetworks/subramanvnet",
    },
    useRemoteGateways: false,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureDatabricksManagementClient(credential, subscriptionId);
  const result = await client.vNetPeering.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    peeringName,
    virtualNetworkPeeringParameters
  );
  console.log(result);
}

createVNetPeeringForWorkspace().catch(console.error);
