/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ListQueue,
  QueueListOptionalParams,
  StorageQueue,
  QueueCreateOptionalParams,
  QueueCreateResponse,
  QueueUpdateOptionalParams,
  QueueUpdateResponse,
  QueueGetOptionalParams,
  QueueGetResponse,
  QueueDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Queue. */
export interface Queue {
  /**
   * Gets a list of all the queues under the specified storage account
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: QueueListOptionalParams
  ): PagedAsyncIterableIterator<ListQueue>;
  /**
   * Creates a new queue with the specified queue name, under the specified account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param queue Queue properties and metadata to be created with
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    queue: StorageQueue,
    options?: QueueCreateOptionalParams
  ): Promise<QueueCreateResponse>;
  /**
   * Creates a new queue with the specified queue name, under the specified account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param queue Queue properties and metadata to be created with
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    queue: StorageQueue,
    options?: QueueUpdateOptionalParams
  ): Promise<QueueUpdateResponse>;
  /**
   * Gets the queue with the specified queue name, under the specified account if it exists.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    options?: QueueGetOptionalParams
  ): Promise<QueueGetResponse>;
  /**
   * Deletes the queue with the specified queue name, under the specified account if it exists.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    options?: QueueDeleteOptionalParams
  ): Promise<void>;
}
