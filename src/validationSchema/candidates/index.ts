import * as yup from 'yup';

export const candidateValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  status: yup.string().required(),
  job_posting_id: yup.string().nullable(),
});
