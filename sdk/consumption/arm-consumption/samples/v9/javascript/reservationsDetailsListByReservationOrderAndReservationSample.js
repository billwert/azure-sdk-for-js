/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConsumptionManagementClient } = require("@azure/arm-consumption");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the reservations details for provided date range.
 *
 * @summary Lists the reservations details for provided date range.
 * x-ms-original-file: specification/consumption/resource-manager/Microsoft.Consumption/stable/2021-10-01/examples/ReservationDetailsWithReservationId.json
 */
async function reservationDetailsWithReservationId() {
  const subscriptionId =
    process.env["CONSUMPTION_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const reservationOrderId = "00000000-0000-0000-0000-000000000000";
  const reservationId = "00000000-0000-0000-0000-000000000000";
  const filter = "properties/usageDate ge 2017-10-01 AND properties/usageDate le 2017-12-05";
  const credential = new DefaultAzureCredential();
  const client = new ConsumptionManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.reservationsDetails.listByReservationOrderAndReservation(
    reservationOrderId,
    reservationId,
    filter,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  reservationDetailsWithReservationId();
}

main().catch(console.error);
