/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all delivery attributes for an event subscription of a partner topic.
 *
 * @summary Get all delivery attributes for an event subscription of a partner topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/PartnerTopicEventSubscriptions_GetDeliveryAttributes.json
 */
async function partnerTopicEventSubscriptionsGetDeliveryAttributes() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerTopicName = "examplePartnerTopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopicEventSubscriptions.getDeliveryAttributes(
    resourceGroupName,
    partnerTopicName,
    eventSubscriptionName
  );
  console.log(result);
}

partnerTopicEventSubscriptionsGetDeliveryAttributes().catch(console.error);
