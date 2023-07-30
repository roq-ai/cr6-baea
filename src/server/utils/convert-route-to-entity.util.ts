const mapping: Record<string, string> = {
  candidates: 'candidate',
  'job-postings': 'job_posting',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
