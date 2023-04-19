export interface Application {
  id?: number;
  position: string;
  appDate?: string;
  mostRecentContact?: string;
  lastContactInitiatedByMe?: boolean;
  company: string;
  status: string;
  notes?: string;
  companyContacts?: companyContacts;
  recuiter?: Recruiter;
  linkToApplicationURL?: string;
  additionalNotes?: string;
}

export interface CompanyContacts {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  LinkedIn: string;
}

export interface Recruiter {
  name: string;
  email: string;
  phone: string;
  LinkedIn: string;
}


export interface Status {
  total: number;
  notStarted: number;
  inProgress: number;
}