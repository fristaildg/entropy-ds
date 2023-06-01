import styled, { Keyframes, css } from 'styled-components';
import { ForwardedRef, forwardRef } from 'react';
import { spin } from '../../utils/animations';
import { ColorProps, LayoutProps, color, layout } from 'themed-props';

type Icons =
  | 'spinner'
  | 'chevron-down'
  | 'basketball'
  | 'check'
  | 'uncheck'
  | 'check-radio'
  | 'uncheck-radio';

export type IconProps = {
  symbol: Icons;
  size?: string | number;
  className?: string;
  animation?: string;
  color?: string;
};

type StyledProps = LayoutProps & ColorProps;

const animations: Record<string, Keyframes> = {
  spin,
};

const StyledIcon = styled.svg<StyledProps & Pick<IconProps, 'animation'>>`
  fill: currentColor;

  ${layout}
  ${color}

  ${({ animation }) =>
    animation &&
    css`
      animation: 1s ${animations[animation]} infinite linear;
    `}
`;

const Icon = (
  { size = '1em', color = 'text', className, symbol, animation }: IconProps,
  ref: ForwardedRef<SVGSVGElement>,
) => {
  return (
    <>
      <StyledIcon
        ref={ref}
        viewBox="0 0 24 24"
        $width={size}
        $height={size}
        $color={color}
        animation={animation}
        className={className}
      >
        <use href={`#${symbol}`}></use>
      </StyledIcon>
    </>
  );
};

export default forwardRef(Icon);
