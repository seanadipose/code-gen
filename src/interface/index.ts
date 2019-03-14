import { IMspAuthorize } from "./i-msp-authorize";
import { IMspOrganization } from "./i-msp-organization";
import { IMspGroupNumbers } from "./i-msp-group-numbers";
import { IMspSigningAuthority } from "./i-msp-signing-authority";
import { IMspUsers } from "./i-msp-users";
import { IUser } from "./i-user";
import { IMspForm } from "./i-msp-form";

export * from "./i-msp-authorize";
export * from "./i-msp-organization";
export * from "./i-msp-group-numbers";
export * from "./i-msp-signing-authority";
export * from "./i-msp-users";
export * from "./i-user";
export * from "./i-msp-form";

export module Msp {}
export type MSPValidForms =
  | IMspAuthorize
  | IMspForm
  | IMspOrganization
  // | IMspRegisterState
  | IMspGroupNumbers
  | IMspSigningAuthority
  | IMspUsers
  | IUser;

// tslint:disable-next-line: max-line-length
