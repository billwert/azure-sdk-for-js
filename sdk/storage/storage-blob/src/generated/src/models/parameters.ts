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
  OperationQueryParameter,
  QueryCollectionFormat
} from "@azure/core-http";
import {
  BlobServiceProperties as BlobServicePropertiesMapper,
  KeyInfo as KeyInfoMapper,
  QueryRequest as QueryRequestMapper,
  BlobTags as BlobTagsMapper,
  BlockLookupList as BlockLookupListMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const blobServiceProperties: OperationParameter = {
  parameterPath: "blobServiceProperties",
  mapper: BlobServicePropertiesMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const restype: OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    defaultValue: "service",
    isConstant: true,
    serializedName: "restype",
    type: {
      name: "String"
    }
  }
};

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "properties",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const timeoutInSeconds: OperationQueryParameter = {
  parameterPath: ["options", "timeoutInSeconds"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "timeout",
    xmlName: "timeout",
    type: {
      name: "Number"
    }
  }
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2021-06-08",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    xmlName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const comp1: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "stats",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const comp2: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "list",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const prefix: OperationQueryParameter = {
  parameterPath: ["options", "prefix"],
  mapper: {
    serializedName: "prefix",
    xmlName: "prefix",
    type: {
      name: "String"
    }
  }
};

export const marker: OperationQueryParameter = {
  parameterPath: ["options", "marker"],
  mapper: {
    serializedName: "marker",
    xmlName: "marker",
    type: {
      name: "String"
    }
  }
};

export const maxPageSize: OperationQueryParameter = {
  parameterPath: ["options", "maxPageSize"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "maxresults",
    xmlName: "maxresults",
    type: {
      name: "Number"
    }
  }
};

export const include: OperationQueryParameter = {
  parameterPath: ["options", "include"],
  mapper: {
    serializedName: "include",
    xmlName: "include",
    xmlElementName: "ListContainersIncludeType",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: ["metadata", "deleted", "system"]
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const keyInfo: OperationParameter = {
  parameterPath: "keyInfo",
  mapper: KeyInfoMapper
};

export const comp3: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "userdelegationkey",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const restype1: OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    defaultValue: "account",
    isConstant: true,
    serializedName: "restype",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    type: {
      name: "Stream"
    }
  }
};

export const comp4: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "batch",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const contentLength: OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    serializedName: "Content-Length",
    required: true,
    xmlName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};

export const multipartContentType: OperationParameter = {
  parameterPath: "multipartContentType",
  mapper: {
    serializedName: "Content-Type",
    required: true,
    xmlName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const comp5: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "blobs",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const where: OperationQueryParameter = {
  parameterPath: ["options", "where"],
  mapper: {
    serializedName: "where",
    xmlName: "where",
    type: {
      name: "String"
    }
  }
};

export const restype2: OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    defaultValue: "container",
    isConstant: true,
    serializedName: "restype",
    type: {
      name: "String"
    }
  }
};

export const metadata: OperationParameter = {
  parameterPath: ["options", "metadata"],
  mapper: {
    serializedName: "x-ms-meta",
    xmlName: "x-ms-meta",
    type: {
      name: "Dictionary",
      value: { type: { name: "String" } }
    },
    headerCollectionPrefix: "x-ms-meta-"
  }
};

export const access: OperationParameter = {
  parameterPath: ["options", "access"],
  mapper: {
    serializedName: "x-ms-blob-public-access",
    xmlName: "x-ms-blob-public-access",
    type: {
      name: "Enum",
      allowedValues: ["container", "blob"]
    }
  }
};

export const defaultEncryptionScope: OperationParameter = {
  parameterPath: [
    "options",
    "containerEncryptionScope",
    "defaultEncryptionScope"
  ],
  mapper: {
    serializedName: "x-ms-default-encryption-scope",
    xmlName: "x-ms-default-encryption-scope",
    type: {
      name: "String"
    }
  }
};

export const preventEncryptionScopeOverride: OperationParameter = {
  parameterPath: [
    "options",
    "containerEncryptionScope",
    "preventEncryptionScopeOverride"
  ],
  mapper: {
    serializedName: "x-ms-deny-encryption-scope-override",
    xmlName: "x-ms-deny-encryption-scope-override",
    type: {
      name: "Boolean"
    }
  }
};

export const leaseId: OperationParameter = {
  parameterPath: ["options", "leaseAccessConditions", "leaseId"],
  mapper: {
    serializedName: "x-ms-lease-id",
    xmlName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};

export const ifModifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifModifiedSince"],
  mapper: {
    serializedName: "If-Modified-Since",
    xmlName: "If-Modified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const ifUnmodifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifUnmodifiedSince"],
  mapper: {
    serializedName: "If-Unmodified-Since",
    xmlName: "If-Unmodified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const comp6: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "metadata",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const comp7: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "acl",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const containerAcl: OperationParameter = {
  parameterPath: ["options", "containerAcl"],
  mapper: {
    serializedName: "containerAcl",
    xmlName: "SignedIdentifiers",
    xmlIsWrapped: true,
    xmlElementName: "SignedIdentifier",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "SignedIdentifier"
        }
      }
    }
  }
};

export const comp8: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "undelete",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const deletedContainerName: OperationParameter = {
  parameterPath: ["options", "deletedContainerName"],
  mapper: {
    serializedName: "x-ms-deleted-container-name",
    xmlName: "x-ms-deleted-container-name",
    type: {
      name: "String"
    }
  }
};

export const deletedContainerVersion: OperationParameter = {
  parameterPath: ["options", "deletedContainerVersion"],
  mapper: {
    serializedName: "x-ms-deleted-container-version",
    xmlName: "x-ms-deleted-container-version",
    type: {
      name: "String"
    }
  }
};

export const comp9: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "rename",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const sourceContainerName: OperationParameter = {
  parameterPath: "sourceContainerName",
  mapper: {
    serializedName: "x-ms-source-container-name",
    required: true,
    xmlName: "x-ms-source-container-name",
    type: {
      name: "String"
    }
  }
};

export const sourceLeaseId: OperationParameter = {
  parameterPath: ["options", "sourceLeaseId"],
  mapper: {
    serializedName: "x-ms-source-lease-id",
    xmlName: "x-ms-source-lease-id",
    type: {
      name: "String"
    }
  }
};

export const comp10: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "lease",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const action: OperationParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "acquire",
    isConstant: true,
    serializedName: "x-ms-lease-action",
    type: {
      name: "String"
    }
  }
};

export const duration: OperationParameter = {
  parameterPath: ["options", "duration"],
  mapper: {
    serializedName: "x-ms-lease-duration",
    xmlName: "x-ms-lease-duration",
    type: {
      name: "Number"
    }
  }
};

export const proposedLeaseId: OperationParameter = {
  parameterPath: ["options", "proposedLeaseId"],
  mapper: {
    serializedName: "x-ms-proposed-lease-id",
    xmlName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};

export const action1: OperationParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "release",
    isConstant: true,
    serializedName: "x-ms-lease-action",
    type: {
      name: "String"
    }
  }
};

export const leaseId1: OperationParameter = {
  parameterPath: "leaseId",
  mapper: {
    serializedName: "x-ms-lease-id",
    required: true,
    xmlName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};

export const action2: OperationParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "renew",
    isConstant: true,
    serializedName: "x-ms-lease-action",
    type: {
      name: "String"
    }
  }
};

export const action3: OperationParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "break",
    isConstant: true,
    serializedName: "x-ms-lease-action",
    type: {
      name: "String"
    }
  }
};

export const breakPeriod: OperationParameter = {
  parameterPath: ["options", "breakPeriod"],
  mapper: {
    serializedName: "x-ms-lease-break-period",
    xmlName: "x-ms-lease-break-period",
    type: {
      name: "Number"
    }
  }
};

export const action4: OperationParameter = {
  parameterPath: "action",
  mapper: {
    defaultValue: "change",
    isConstant: true,
    serializedName: "x-ms-lease-action",
    type: {
      name: "String"
    }
  }
};

export const proposedLeaseId1: OperationParameter = {
  parameterPath: "proposedLeaseId",
  mapper: {
    serializedName: "x-ms-proposed-lease-id",
    required: true,
    xmlName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};

export const include1: OperationQueryParameter = {
  parameterPath: ["options", "include"],
  mapper: {
    serializedName: "include",
    xmlName: "include",
    xmlElementName: "ListBlobsIncludeItem",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "copy",
            "deleted",
            "metadata",
            "snapshots",
            "uncommittedblobs",
            "versions",
            "tags",
            "immutabilitypolicy",
            "legalhold",
            "deletedwithversions"
          ]
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const delimiter: OperationQueryParameter = {
  parameterPath: "delimiter",
  mapper: {
    serializedName: "delimiter",
    required: true,
    xmlName: "delimiter",
    type: {
      name: "String"
    }
  }
};

export const snapshot: OperationQueryParameter = {
  parameterPath: ["options", "snapshot"],
  mapper: {
    serializedName: "snapshot",
    xmlName: "snapshot",
    type: {
      name: "String"
    }
  }
};

export const versionId: OperationQueryParameter = {
  parameterPath: ["options", "versionId"],
  mapper: {
    serializedName: "versionid",
    xmlName: "versionid",
    type: {
      name: "String"
    }
  }
};

export const range: OperationParameter = {
  parameterPath: ["options", "range"],
  mapper: {
    serializedName: "x-ms-range",
    xmlName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};

export const rangeGetContentMD5: OperationParameter = {
  parameterPath: ["options", "rangeGetContentMD5"],
  mapper: {
    serializedName: "x-ms-range-get-content-md5",
    xmlName: "x-ms-range-get-content-md5",
    type: {
      name: "Boolean"
    }
  }
};

export const rangeGetContentCRC64: OperationParameter = {
  parameterPath: ["options", "rangeGetContentCRC64"],
  mapper: {
    serializedName: "x-ms-range-get-content-crc64",
    xmlName: "x-ms-range-get-content-crc64",
    type: {
      name: "Boolean"
    }
  }
};

export const encryptionKey: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionKey"],
  mapper: {
    serializedName: "x-ms-encryption-key",
    xmlName: "x-ms-encryption-key",
    type: {
      name: "String"
    }
  }
};

export const encryptionKeySha256: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionKeySha256"],
  mapper: {
    serializedName: "x-ms-encryption-key-sha256",
    xmlName: "x-ms-encryption-key-sha256",
    type: {
      name: "String"
    }
  }
};

export const encryptionAlgorithm: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionAlgorithm"],
  mapper: {
    serializedName: "x-ms-encryption-algorithm",
    xmlName: "x-ms-encryption-algorithm",
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    xmlName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    xmlName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const ifTags: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifTags"],
  mapper: {
    serializedName: "x-ms-if-tags",
    xmlName: "x-ms-if-tags",
    type: {
      name: "String"
    }
  }
};

export const deleteSnapshots: OperationParameter = {
  parameterPath: ["options", "deleteSnapshots"],
  mapper: {
    serializedName: "x-ms-delete-snapshots",
    xmlName: "x-ms-delete-snapshots",
    type: {
      name: "Enum",
      allowedValues: ["include", "only"]
    }
  }
};

export const blobDeleteType: OperationQueryParameter = {
  parameterPath: ["options", "blobDeleteType"],
  mapper: {
    serializedName: "deletetype",
    xmlName: "deletetype",
    type: {
      name: "String"
    }
  }
};

export const comp11: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "expiry",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const expiryOptions: OperationParameter = {
  parameterPath: "expiryOptions",
  mapper: {
    serializedName: "x-ms-expiry-option",
    required: true,
    xmlName: "x-ms-expiry-option",
    type: {
      name: "String"
    }
  }
};

export const expiresOn: OperationParameter = {
  parameterPath: ["options", "expiresOn"],
  mapper: {
    serializedName: "x-ms-expiry-time",
    xmlName: "x-ms-expiry-time",
    type: {
      name: "String"
    }
  }
};

export const blobCacheControl: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobCacheControl"],
  mapper: {
    serializedName: "x-ms-blob-cache-control",
    xmlName: "x-ms-blob-cache-control",
    type: {
      name: "String"
    }
  }
};

export const blobContentType: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentType"],
  mapper: {
    serializedName: "x-ms-blob-content-type",
    xmlName: "x-ms-blob-content-type",
    type: {
      name: "String"
    }
  }
};

export const blobContentMD5: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentMD5"],
  mapper: {
    serializedName: "x-ms-blob-content-md5",
    xmlName: "x-ms-blob-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};

export const blobContentEncoding: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentEncoding"],
  mapper: {
    serializedName: "x-ms-blob-content-encoding",
    xmlName: "x-ms-blob-content-encoding",
    type: {
      name: "String"
    }
  }
};

export const blobContentLanguage: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentLanguage"],
  mapper: {
    serializedName: "x-ms-blob-content-language",
    xmlName: "x-ms-blob-content-language",
    type: {
      name: "String"
    }
  }
};

export const blobContentDisposition: OperationParameter = {
  parameterPath: ["options", "blobHttpHeaders", "blobContentDisposition"],
  mapper: {
    serializedName: "x-ms-blob-content-disposition",
    xmlName: "x-ms-blob-content-disposition",
    type: {
      name: "String"
    }
  }
};

export const comp12: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "immutabilityPolicies",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const immutabilityPolicyExpiry: OperationParameter = {
  parameterPath: ["options", "immutabilityPolicyExpiry"],
  mapper: {
    serializedName: "x-ms-immutability-policy-until-date",
    xmlName: "x-ms-immutability-policy-until-date",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const immutabilityPolicyMode: OperationParameter = {
  parameterPath: ["options", "immutabilityPolicyMode"],
  mapper: {
    serializedName: "x-ms-immutability-policy-mode",
    xmlName: "x-ms-immutability-policy-mode",
    type: {
      name: "Enum",
      allowedValues: ["Mutable", "Unlocked", "Locked"]
    }
  }
};

export const comp13: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "legalhold",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const legalHold: OperationParameter = {
  parameterPath: "legalHold",
  mapper: {
    serializedName: "x-ms-legal-hold",
    required: true,
    xmlName: "x-ms-legal-hold",
    type: {
      name: "Boolean"
    }
  }
};

export const encryptionScope: OperationParameter = {
  parameterPath: ["options", "encryptionScope"],
  mapper: {
    serializedName: "x-ms-encryption-scope",
    xmlName: "x-ms-encryption-scope",
    type: {
      name: "String"
    }
  }
};

export const comp14: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "snapshot",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const tier: OperationParameter = {
  parameterPath: ["options", "tier"],
  mapper: {
    serializedName: "x-ms-access-tier",
    xmlName: "x-ms-access-tier",
    type: {
      name: "Enum",
      allowedValues: [
        "P4",
        "P6",
        "P10",
        "P15",
        "P20",
        "P30",
        "P40",
        "P50",
        "P60",
        "P70",
        "P80",
        "Hot",
        "Cool",
        "Archive"
      ]
    }
  }
};

export const rehydratePriority: OperationParameter = {
  parameterPath: ["options", "rehydratePriority"],
  mapper: {
    serializedName: "x-ms-rehydrate-priority",
    xmlName: "x-ms-rehydrate-priority",
    type: {
      name: "Enum",
      allowedValues: ["High", "Standard"]
    }
  }
};

export const sourceIfModifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfModifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-modified-since",
    xmlName: "x-ms-source-if-modified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfUnmodifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfUnmodifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-unmodified-since",
    xmlName: "x-ms-source-if-unmodified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfMatch: OperationParameter = {
  parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfMatch"],
  mapper: {
    serializedName: "x-ms-source-if-match",
    xmlName: "x-ms-source-if-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfNoneMatch: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match",
    xmlName: "x-ms-source-if-none-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfTags: OperationParameter = {
  parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfTags"],
  mapper: {
    serializedName: "x-ms-source-if-tags",
    xmlName: "x-ms-source-if-tags",
    type: {
      name: "String"
    }
  }
};

export const copySource: OperationParameter = {
  parameterPath: "copySource",
  mapper: {
    serializedName: "x-ms-copy-source",
    required: true,
    xmlName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};

export const blobTagsString: OperationParameter = {
  parameterPath: ["options", "blobTagsString"],
  mapper: {
    serializedName: "x-ms-tags",
    xmlName: "x-ms-tags",
    type: {
      name: "String"
    }
  }
};

export const sealBlob: OperationParameter = {
  parameterPath: ["options", "sealBlob"],
  mapper: {
    serializedName: "x-ms-seal-blob",
    xmlName: "x-ms-seal-blob",
    type: {
      name: "Boolean"
    }
  }
};

export const legalHold1: OperationParameter = {
  parameterPath: ["options", "legalHold"],
  mapper: {
    serializedName: "x-ms-legal-hold",
    xmlName: "x-ms-legal-hold",
    type: {
      name: "Boolean"
    }
  }
};

export const xMsRequiresSync: OperationParameter = {
  parameterPath: "xMsRequiresSync",
  mapper: {
    defaultValue: "true",
    isConstant: true,
    serializedName: "x-ms-requires-sync",
    type: {
      name: "String"
    }
  }
};

export const sourceContentMD5: OperationParameter = {
  parameterPath: ["options", "sourceContentMD5"],
  mapper: {
    serializedName: "x-ms-source-content-md5",
    xmlName: "x-ms-source-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};

export const copySourceAuthorization: OperationParameter = {
  parameterPath: ["options", "copySourceAuthorization"],
  mapper: {
    serializedName: "x-ms-copy-source-authorization",
    xmlName: "x-ms-copy-source-authorization",
    type: {
      name: "String"
    }
  }
};

export const copySourceTags: OperationParameter = {
  parameterPath: ["options", "copySourceTags"],
  mapper: {
    serializedName: "x-ms-copy-source-tag-option",
    xmlName: "x-ms-copy-source-tag-option",
    type: {
      name: "Enum",
      allowedValues: ["REPLACE", "COPY"]
    }
  }
};

export const comp15: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "copy",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const copyActionAbortConstant: OperationParameter = {
  parameterPath: "copyActionAbortConstant",
  mapper: {
    defaultValue: "abort",
    isConstant: true,
    serializedName: "x-ms-copy-action",
    type: {
      name: "String"
    }
  }
};

export const copyId: OperationQueryParameter = {
  parameterPath: "copyId",
  mapper: {
    serializedName: "copyid",
    required: true,
    xmlName: "copyid",
    type: {
      name: "String"
    }
  }
};

export const comp16: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "tier",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const tier1: OperationParameter = {
  parameterPath: "tier",
  mapper: {
    serializedName: "x-ms-access-tier",
    required: true,
    xmlName: "x-ms-access-tier",
    type: {
      name: "Enum",
      allowedValues: [
        "P4",
        "P6",
        "P10",
        "P15",
        "P20",
        "P30",
        "P40",
        "P50",
        "P60",
        "P70",
        "P80",
        "Hot",
        "Cool",
        "Archive"
      ]
    }
  }
};

export const queryRequest: OperationParameter = {
  parameterPath: ["options", "queryRequest"],
  mapper: QueryRequestMapper
};

export const comp17: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "query",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const comp18: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "tags",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: BlobTagsMapper
};

export const transactionalContentMD5: OperationParameter = {
  parameterPath: ["options", "transactionalContentMD5"],
  mapper: {
    serializedName: "Content-MD5",
    xmlName: "Content-MD5",
    type: {
      name: "ByteArray"
    }
  }
};

export const transactionalContentCrc64: OperationParameter = {
  parameterPath: ["options", "transactionalContentCrc64"],
  mapper: {
    serializedName: "x-ms-content-crc64",
    xmlName: "x-ms-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};

export const blobType: OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    defaultValue: "PageBlob",
    isConstant: true,
    serializedName: "x-ms-blob-type",
    type: {
      name: "String"
    }
  }
};

export const blobContentLength: OperationParameter = {
  parameterPath: "blobContentLength",
  mapper: {
    serializedName: "x-ms-blob-content-length",
    required: true,
    xmlName: "x-ms-blob-content-length",
    type: {
      name: "Number"
    }
  }
};

export const blobSequenceNumber: OperationParameter = {
  parameterPath: ["options", "blobSequenceNumber"],
  mapper: {
    serializedName: "x-ms-blob-sequence-number",
    xmlName: "x-ms-blob-sequence-number",
    type: {
      name: "Number"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    type: {
      name: "Stream"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const comp19: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "page",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const pageWrite: OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    defaultValue: "update",
    isConstant: true,
    serializedName: "x-ms-page-write",
    type: {
      name: "String"
    }
  }
};

export const ifSequenceNumberLessThanOrEqualTo: OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThanOrEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-le",
    xmlName: "x-ms-if-sequence-number-le",
    type: {
      name: "Number"
    }
  }
};

export const ifSequenceNumberLessThan: OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThan"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-lt",
    xmlName: "x-ms-if-sequence-number-lt",
    type: {
      name: "Number"
    }
  }
};

export const ifSequenceNumberEqualTo: OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-eq",
    xmlName: "x-ms-if-sequence-number-eq",
    type: {
      name: "Number"
    }
  }
};

export const pageWrite1: OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    defaultValue: "clear",
    isConstant: true,
    serializedName: "x-ms-page-write",
    type: {
      name: "String"
    }
  }
};

export const sourceUrl: OperationParameter = {
  parameterPath: "sourceUrl",
  mapper: {
    serializedName: "x-ms-copy-source",
    required: true,
    xmlName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};

export const sourceRange: OperationParameter = {
  parameterPath: "sourceRange",
  mapper: {
    serializedName: "x-ms-source-range",
    required: true,
    xmlName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};

export const sourceContentCrc64: OperationParameter = {
  parameterPath: ["options", "sourceContentCrc64"],
  mapper: {
    serializedName: "x-ms-source-content-crc64",
    xmlName: "x-ms-source-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};

export const range1: OperationParameter = {
  parameterPath: "range",
  mapper: {
    serializedName: "x-ms-range",
    required: true,
    xmlName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};

export const comp20: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "pagelist",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const prevsnapshot: OperationQueryParameter = {
  parameterPath: ["options", "prevsnapshot"],
  mapper: {
    serializedName: "prevsnapshot",
    xmlName: "prevsnapshot",
    type: {
      name: "String"
    }
  }
};

export const prevSnapshotUrl: OperationParameter = {
  parameterPath: ["options", "prevSnapshotUrl"],
  mapper: {
    serializedName: "x-ms-previous-snapshot-url",
    xmlName: "x-ms-previous-snapshot-url",
    type: {
      name: "String"
    }
  }
};

export const sequenceNumberAction: OperationParameter = {
  parameterPath: "sequenceNumberAction",
  mapper: {
    serializedName: "x-ms-sequence-number-action",
    required: true,
    xmlName: "x-ms-sequence-number-action",
    type: {
      name: "Enum",
      allowedValues: ["max", "update", "increment"]
    }
  }
};

export const comp21: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "incrementalcopy",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const blobType1: OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    defaultValue: "AppendBlob",
    isConstant: true,
    serializedName: "x-ms-blob-type",
    type: {
      name: "String"
    }
  }
};

export const comp22: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "appendblock",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const maxSize: OperationParameter = {
  parameterPath: ["options", "appendPositionAccessConditions", "maxSize"],
  mapper: {
    serializedName: "x-ms-blob-condition-maxsize",
    xmlName: "x-ms-blob-condition-maxsize",
    type: {
      name: "Number"
    }
  }
};

export const appendPosition: OperationParameter = {
  parameterPath: [
    "options",
    "appendPositionAccessConditions",
    "appendPosition"
  ],
  mapper: {
    serializedName: "x-ms-blob-condition-appendpos",
    xmlName: "x-ms-blob-condition-appendpos",
    type: {
      name: "Number"
    }
  }
};

export const sourceRange1: OperationParameter = {
  parameterPath: ["options", "sourceRange"],
  mapper: {
    serializedName: "x-ms-source-range",
    xmlName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};

export const comp23: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "seal",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const blobType2: OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    defaultValue: "BlockBlob",
    isConstant: true,
    serializedName: "x-ms-blob-type",
    type: {
      name: "String"
    }
  }
};

export const copySourceBlobProperties: OperationParameter = {
  parameterPath: ["options", "copySourceBlobProperties"],
  mapper: {
    serializedName: "x-ms-copy-source-blob-properties",
    xmlName: "x-ms-copy-source-blob-properties",
    type: {
      name: "Boolean"
    }
  }
};

export const comp24: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "block",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const blockId: OperationQueryParameter = {
  parameterPath: "blockId",
  mapper: {
    serializedName: "blockid",
    required: true,
    xmlName: "blockid",
    type: {
      name: "String"
    }
  }
};

export const blocks: OperationParameter = {
  parameterPath: "blocks",
  mapper: BlockLookupListMapper
};

export const comp25: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "blocklist",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const listType: OperationQueryParameter = {
  parameterPath: "listType",
  mapper: {
    defaultValue: "committed",
    serializedName: "blocklisttype",
    required: true,
    xmlName: "blocklisttype",
    type: {
      name: "Enum",
      allowedValues: ["committed", "uncommitted", "all"]
    }
  }
};
