export type ApplicantType = 'GUEST' | 'PROPERTY_OWNER';
export type ApplicantStatus = 'NEW' | 'DENIED' | 'APPROVED';

export interface PropertyDirectory {
  registeredDate: Date;
  applicantName: string;
  applicantType: ApplicantType;
  email: string;
  mobileNumber: string;
  status: ApplicantStatus;
}
