import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
} from 'react';
import {
  ButtonBase,
  LoadingIcon,
  sizes,
  variants,
  InnerText,
} from './Button.base';
import { Sizes } from '../../types';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: Sizes;
  loading?: boolean;
};

const Button = (
  {
    variant = 'primary',
    size = 'regular',
    loading,
    children,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <ButtonBase
      {...props}
      {...sizes[size]}
      {...variants[variant]}
      loading={loading}
      ref={ref}
    >
      {loading && (
        <LoadingIcon symbol="spinner" animation="spin" color="currentColor" />
      )}
      <InnerText color="inherit" size={size}>
        {children}
      </InnerText>
    </ButtonBase>
  );
};

export default forwardRef(Button);
