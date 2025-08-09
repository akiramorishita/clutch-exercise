export type OfferPayload = {
  loanPurpose: string;
  amount: number;
  terms: number;
};

export type OfferResponse = {
  id: string;
  monthlyPayments: number;
  apr: number;
};
