import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivAttributes<T = HTMLDivElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

export type Sizes = 'regular' | 'small' | 'large';

export type Theme = {
  name: string;
  colors: Record<string, unknown>;
  [key: string]: unknown;
};
