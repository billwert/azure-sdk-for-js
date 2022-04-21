/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation retrieves the built-in policy definition with the given name.
 *
 * @summary This operation retrieves the built-in policy definition with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/getBuiltinPolicyDefinition.json
 */
async function retrieveABuiltInPolicyDefinition() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policyDefinitionName = "7433c107-6db4-4ad1-b57a-a76dce0154a1";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyDefinitions.getBuiltIn(
    policyDefinitionName
  );
  console.log(result);
}

retrieveABuiltInPolicyDefinition().catch(console.error);
