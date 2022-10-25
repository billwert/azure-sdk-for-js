/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  AvailabilityGroupListener as AvailabilityGroupListenerMapper,
  SqlVirtualMachineGroup as SqlVirtualMachineGroupMapper,
  SqlVirtualMachineGroupUpdate as SqlVirtualMachineGroupUpdateMapper,
  SqlVirtualMachine as SqlVirtualMachineMapper,
  SqlVirtualMachineUpdate as SqlVirtualMachineUpdateMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sqlVirtualMachineGroupName: OperationURLParameter = {
  parameterPath: "sqlVirtualMachineGroupName",
  mapper: {
    serializedName: "sqlVirtualMachineGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const availabilityGroupListenerName: OperationURLParameter = {
  parameterPath: "availabilityGroupListenerName",
  mapper: {
    serializedName: "availabilityGroupListenerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: AvailabilityGroupListenerMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: SqlVirtualMachineGroupMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: SqlVirtualMachineGroupUpdateMapper
};

export const sqlVirtualMachineName: OperationURLParameter = {
  parameterPath: "sqlVirtualMachineName",
  mapper: {
    serializedName: "sqlVirtualMachineName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: SqlVirtualMachineMapper
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: SqlVirtualMachineUpdateMapper
};
