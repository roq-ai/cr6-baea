import { JobPostingInterface } from 'interfaces/job-posting';
import { GetQueryInterface } from 'interfaces';

export interface CandidateInterface {
  id?: string;
  name: string;
  email: string;
  job_posting_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  job_posting?: JobPostingInterface;
  _count?: {};
}

export interface CandidateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  job_posting_id?: string;
  status?: string;
}
