import styled, { css } from 'styled-components';
import {
  DetailedHTMLProps,
  ForwardedRef,
  LabelHTMLAttributes,
  forwardRef,
} from 'react';
import { Text, TextProps } from '../Text';
import { color, typography } from 'themed-props';

export type InputLabelProps = Omit<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
  'size'
> & {
  text?: string;
  size?: TextProps['size'];
  disabled?: boolean;
};

export const StyledInputLabel = styled(Text).attrs(
  ({ size }: InputLabelProps) => ({
    // background color for checkbox icon on hover
    $backgroundColor: 'background.2',
    $fontSize: size,
  }),
)<Pick<InputLabelProps, 'size' | 'disabled'>>`
  display: flex;
  align-items: center;
  ${typography}

  ${({ disabled }) => css`
    cursor: ${!disabled && 'pointer'};
    opacity: ${disabled && 0.5};

    &:hover {
      > svg {
        ${!disabled && color}
      }
    }
  `}
`;

const InputLabel = (
  props: InputLabelProps,
  ref: ForwardedRef<HTMLLabelElement>,
) => {
  const { children, text, size, ...restProps } = props;

  return (
    <StyledInputLabel {...restProps} as="label" size={size} ref={ref}>
      {children}
      {text && <Text size={size}>{text}</Text>}
    </StyledInputLabel>
  );
};

export default forwardRef(InputLabel);
