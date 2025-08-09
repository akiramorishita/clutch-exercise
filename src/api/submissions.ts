import { apiClient } from '../helpers/apiClient';
import type { SubmissionsPayload, SubmissionsResponse } from '../types/submissions';

export const postSubmissions: (
  payload: SubmissionsPayload
) => Promise<SubmissionsResponse> = async (payload) => {
  return apiClient('/submissions', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
};
