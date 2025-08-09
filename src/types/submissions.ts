export type SubmissionsPayload = {
  loanPurpose: string;
  amount: number;
  terms: number;
  offerId: string;
};

export type SubmissionsResponse = {
  userId: string;
};
