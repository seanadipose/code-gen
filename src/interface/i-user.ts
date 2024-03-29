export interface IUser {
  userTitle?: UserTitle;
  firstName: string;
  initial?: string;
  lastName: string;
  jobTitle: string;
  emailAddress: string;
  phone: string;
  ext?: string;
  fax: string;
  administeringFor: string;
}
export type UserTitle = "mr" | "mrs";
