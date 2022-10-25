/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the specified load balancer.
 *
 * @summary Gets the specified load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/LoadBalancerGet.json
 */
async function getLoadBalancer() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.get(
    resourceGroupName,
    loadBalancerName
  );
  console.log(result);
}

getLoadBalancer().catch(console.error);

/**
 * This sample demonstrates how to Gets the specified load balancer.
 *
 * @summary Gets the specified load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/LoadBalancerGetInboundNatRulePortMapping.json
 */
async function getLoadBalancerWithInboundNatRulePortMapping() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.get(
    resourceGroupName,
    loadBalancerName
  );
  console.log(result);
}

getLoadBalancerWithInboundNatRulePortMapping().catch(console.error);
