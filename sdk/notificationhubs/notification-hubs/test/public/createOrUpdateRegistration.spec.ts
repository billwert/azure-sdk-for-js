// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NotificationHubsClientContext, createClientContext } from "../../types/src/api/index.js";
import { assert } from "@azure/test-utils";
import { createAppleRegistrationDescription } from "@azure/notification-hubs/models/registration";
import { createOrUpdateRegistration } from "../../types/src/api/createOrUpdateRegistration.js";
import { createRegistrationId } from "../../types/src/api/createRegistrationId.js";
import { deleteRegistration } from "../../types/src/api/deleteRegistration.js";
import { getRegistration } from "../../types/src/api/getRegistration.js";

// Load the .env file if it exists
// eslint-disable-next-line sort-imports
import * as dotenv from "dotenv";

dotenv.config();

// Define connection string and hub name
const connectionString = process.env.NOTIFICATIONHUBS_CONNECTION_STRING || "<connection string>";
const hubName = process.env.NOTIFICATION_HUB_NAME || "<hub name>";

// Define message constants
const DUMMY_DEVICE = "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0";
const deviceToken = process.env.APNS_DEVICE_TOKEN || DUMMY_DEVICE;

let registrationId: string;
let context: NotificationHubsClientContext;

describe("createRegistrationId()", () => {
  beforeEach(async () => {
    context = createClientContext(connectionString, hubName);

    registrationId = await createRegistrationId(context);

    const registration = createAppleRegistrationDescription({
      registrationId,
      deviceToken,
      tags: ["likes_football", "likes_hockey"],
    });

    await createOrUpdateRegistration(context, registration);
  });

  afterEach(async () => {
    await deleteRegistration(context, registrationId);
  });

  it("should get a registration by the given registration ID", async () => {
    const registration = await getRegistration(context!, registrationId!);

    assert.equal(registration.registrationId, registrationId);
  });
});
