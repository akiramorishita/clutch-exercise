import { apiClient } from '../helpers/apiClient';
import type { OfferPayload } from '../types/offers';

export const postOffer = async (payload: OfferPayload) => {
  return apiClient('/offers', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
};
