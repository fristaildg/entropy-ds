import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { DivAttributes } from '../../types';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  space,
  typography,
} from 'themed-props';

export type TextProps = DivAttributes & {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  size?: 'small' | 'regular' | 'large';
  color?: ColorProps['$color'];
  align?: TypographyProps['$textAlign'];
  className?: string;
};

type StyledProps = ColorProps & TypographyProps & SpaceProps;

const StyledText = styled.span<StyledProps>`
  ${color}
  ${typography}
  ${space}
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
      $padding={0}
      $margin={0}
      $color={color}
      $fontSize={sizes[size]}
      $textAlign={align}
    />
  );
};

export default forwardRef(Text);
