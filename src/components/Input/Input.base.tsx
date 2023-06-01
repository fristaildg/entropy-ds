import styled from 'styled-components';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PseudoClassProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  layout,
  position,
  pseudoClass,
  space,
  typography,
} from 'themed-props';
import { InputProps } from './Input';

type StyledProps = BorderProps &
  LayoutProps &
  ColorProps &
  PseudoClassProps &
  SpaceProps &
  TypographyProps;

export const InputBase = styled.input.attrs(
  ({ error, itemLeft, itemRight }: InputProps) => ({
    $paddingX: 3,
    $paddingLeft: itemLeft && 6,
    $paddingRight: itemRight && 6,
    $paddingY: 2,
    $fontSize: 2,
    $border: 'transparentThick',
    $borderColor: error ? 'danger.1' : 'transparent',
    $borderRadius: 'small',
    $backgroundColor: 'background.2',
    $color: 'text',
    $fontFamily: 'inherit',
    $width: '100%',
    $focus: {
      $border: 'thick',
      $borderColor: error ? 'danger.1' : 'primary.1',
    },
  }),
)<StyledProps & Pick<InputProps, 'error'>>`
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary[0]};
  &:disabled {
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  ${border}
  ${pseudoClass}
  ${space}
  ${typography}
  ${color}
  ${layout}
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const InputItem = styled.div.attrs({
  $position: 'absolute',
  $paddingX: 3,
  $paddingY: 2,
  $top: '50%',
  $display: 'flex',
  alignItems: 'center',
})`
  transform: translateY(-50%);
  ${space}
  ${layout}
  ${position}
`;

export const InputItemLeft = styled(InputItem)``;
export const InputItemRight = styled(InputItem)`
  right: 0;
`;
