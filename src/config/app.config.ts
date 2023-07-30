interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Candidate'],
  tenantRoles: ['Recruiter', 'Interviewer', 'HR Manager', 'Business Owner'],
  tenantName: 'Organization',
  applicationName: 'CR6',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
