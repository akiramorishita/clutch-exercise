import { apiClient } from '../helpers/apiClient';
import type { OfferPayload, OfferResponse } from '../types/offers';

export const postOffer: (payload: OfferPayload) => Promise<OfferResponse> = async (payload) => {
  return apiClient('/offers', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
};
