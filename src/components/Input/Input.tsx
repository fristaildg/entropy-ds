'use client';

import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import {
  InputBase,
  InputItemLeft,
  InputItemRight,
  InputWrapper,
  StyledProps,
} from './Input.base';

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  StyledProps & {
    error?: boolean;
    itemLeft?: ReactNode;
    itemRight?: ReactNode;
  };

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { itemLeft, itemRight } = props;

  return (
    <InputWrapper>
      {itemLeft && <InputItemLeft>{itemLeft}</InputItemLeft>}
      {itemRight && <InputItemRight>{itemRight}</InputItemRight>}
      <InputBase {...props} ref={ref} />
    </InputWrapper>
  );
};

export default forwardRef(Input);
