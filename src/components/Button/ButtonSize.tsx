export const ButtonSize = {
  LARGE: 'LARGE',
  SMALL: 'SMALL'
} as const;

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];
