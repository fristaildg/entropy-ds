import styled from 'styled-components';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import {
  space,
  color,
  position,
  shadow,
  layout,
  flexbox,
  background,
  border,
  SpaceProps,
  ColorProps,
  PositionProps,
  ShadowProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
} from 'themed-props';

export type BoxProps = { children: ReactNode } & SpaceProps &
  ColorProps &
  PositionProps &
  ShadowProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps;

const StyledBox = styled.div`
  ${space}
  ${color}
  ${position}
  ${shadow}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
`;

const Box = (
  { children, ...props }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <StyledBox {...props} ref={ref}>
      {children}
    </StyledBox>
  );
};

export default forwardRef(Box);
