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
  AvailableScopeRequest as AvailableScopeRequestMapper,
  SplitRequest as SplitRequestMapper,
  MergeRequest as MergeRequestMapper,
  Patch as PatchMapper,
  PurchaseRequest as PurchaseRequestMapper,
  ChangeDirectoryRequest as ChangeDirectoryRequestMapper,
  CalculateRefundRequest as CalculateRefundRequestMapper,
  RefundRequest as RefundRequestMapper,
  CalculateExchangeRequest as CalculateExchangeRequestMapper,
  ExchangeRequest as ExchangeRequestMapper,
  CurrentQuotaLimitBase as CurrentQuotaLimitBaseMapper
} from "../models/mappers";

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

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: AvailableScopeRequestMapper
};

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

export const reservationOrderId: OperationURLParameter = {
  parameterPath: "reservationOrderId",
  mapper: {
    serializedName: "reservationOrderId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const reservationId: OperationURLParameter = {
  parameterPath: "reservationId",
  mapper: {
    serializedName: "reservationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: SplitRequestMapper
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: MergeRequestMapper
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: PatchMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};

export const refreshSummary: OperationQueryParameter = {
  parameterPath: ["options", "refreshSummary"],
  mapper: {
    serializedName: "refreshSummary",
    type: {
      name: "String"
    }
  }
};

export const skiptoken: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "Number"
    }
  }
};

export const selectedState: OperationQueryParameter = {
  parameterPath: ["options", "selectedState"],
  mapper: {
    serializedName: "selectedState",
    type: {
      name: "String"
    }
  }
};

export const take: OperationQueryParameter = {
  parameterPath: ["options", "take"],
  mapper: {
    serializedName: "take",
    type: {
      name: "Number"
    }
  }
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

export const reservedResourceType: OperationQueryParameter = {
  parameterPath: ["options", "reservedResourceType"],
  mapper: {
    serializedName: "reservedResourceType",
    type: {
      name: "String"
    }
  }
};

export const location: OperationQueryParameter = {
  parameterPath: ["options", "location"],
  mapper: {
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};

export const publisherId: OperationQueryParameter = {
  parameterPath: ["options", "publisherId"],
  mapper: {
    serializedName: "publisherId",
    type: {
      name: "String"
    }
  }
};

export const offerId: OperationQueryParameter = {
  parameterPath: ["options", "offerId"],
  mapper: {
    serializedName: "offerId",
    type: {
      name: "String"
    }
  }
};

export const planId: OperationQueryParameter = {
  parameterPath: ["options", "planId"],
  mapper: {
    serializedName: "planId",
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: PurchaseRequestMapper
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: ChangeDirectoryRequestMapper
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: CalculateRefundRequestMapper
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: RefundRequestMapper
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: CalculateExchangeRequestMapper
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: ExchangeRequestMapper
};

export const providerId: OperationURLParameter = {
  parameterPath: "providerId",
  mapper: {
    serializedName: "providerId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-10-25",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createQuotaRequest: OperationParameter = {
  parameterPath: "createQuotaRequest",
  mapper: CurrentQuotaLimitBaseMapper
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const skiptoken1: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};
