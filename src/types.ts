import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivAttributes<T = HTMLDivElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

export type Sizes = 'regular' | 'small' | 'large';
