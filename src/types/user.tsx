export type UserStatus = "Active" | "Inactive" | "Pending" | "Blacklisted";

export interface User {
  id: string;
  fullName: string;
  username: string;
  email: string;
  organization: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
  dateJoined: string;
  status: UserStatus;
  tier: 1 | 2 | 3;

  accountBalance: string;
  accountNumber: string;
  bankName: string;

  personalInfo: {
    maritalStatus: string;
    children: string;
    residenceType: string;
  };

  educationEmployment: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantors: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
}
