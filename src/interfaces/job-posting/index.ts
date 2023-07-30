import { CandidateInterface } from 'interfaces/candidate';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  organization_id?: string;
  recruiter_id?: string;
  created_at?: any;
  updated_at?: any;
  candidate?: CandidateInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    candidate?: number;
  };
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
  recruiter_id?: string;
}
