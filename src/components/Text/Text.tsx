import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { DivAttributes } from '../../types';
import { ColorProps, TypographyProps, color, typography } from 'themed-props';

export type TextProps = DivAttributes & {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  size?: 'small' | 'regular' | 'large';
  color?: ColorProps['$color'];
  align?: TypographyProps['$textAlign'];
  className?: string;
};

type StyledProps = ColorProps & TypographyProps;

const StyledText = styled.span<StyledProps>`
  ${color}
  ${typography}
`;

const Text = (
  {
    as = 'span',
    color = 'text',
    align = 'left',
    size = 'regular',
    className,
    ...restProps
  }: TextProps,
  ref: ForwardedRef<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >,
) => {
  const sizes = {
    large: 3,
    regular: 2,
    small: 1,
  };

  return (
    <StyledText
      {...restProps}
      className={className}
      ref={ref}
      as={as}
      $color={color}
      $fontSize={sizes[size]}
      $textAlign={align}
    />
  );
};

export default forwardRef(Text);
