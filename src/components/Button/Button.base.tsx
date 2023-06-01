import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import styled from 'styled-components';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  border,
  color,
  flexbox,
  layout,
  pseudoClass,
  space,
  typography,
} from 'themed-props';
import { ButtonProps } from './Button';

type StyledProps = ColorProps &
  SpaceProps &
  TypographyProps &
  BorderProps &
  LayoutProps;

export const LoadingIcon = styled(Icon)``;

export const InnerText = styled(Text).attrs({
  $display: 'flex',
  $alignItems: 'center',
  $gap: 2,
})`
  ${flexbox}
  ${layout}
  ${space}
`;

export const ButtonBase = styled.button.attrs({
  $border: 'none',
  $borderRadius: 'small',
  $fontFamily: 'inherit',
})<StyledProps & Pick<ButtonProps, 'loading'>>`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  pointer-events: ${({ loading }) => loading && 'none'};

  ${space}
  ${typography}
  ${color}
  ${border}
  ${pseudoClass}
  ${layout}

  ${InnerText} {
    opacity: ${({ loading }) => loading && 0};
  }

  ${LoadingIcon} {
    position: absolute;
    translate: -50% -50%;
    top: 50%;
    left: 50%;
  }
`;

const disabled = {
  $disabled: {
    $backgroundColor: 'white.3',
  },
};

export const variants = {
  primary: {
    $backgroundColor: 'primary.1',
    $color: 'white.1',
    $hover: {
      $backgroundColor: 'primary.2',
    },
    $active: {
      $backgroundColor: 'primary.3',
    },
    ...disabled,
  },
  success: {
    $backgroundColor: 'success.1',
    $color: 'white.1',
    $hover: {
      $backgroundColor: 'success.2',
    },
    $active: {
      $backgroundColor: 'success.3',
    },
    ...disabled,
  },
  warning: {
    $backgroundColor: 'warning.1',
    $color: 'white.1',
    $hover: {
      $backgroundColor: 'warning.2',
    },
    $active: {
      $backgroundColor: 'warning.3',
    },
    ...disabled,
  },
  danger: {
    $backgroundColor: 'danger.1',
    $color: 'white.1',
    $hover: {
      $backgroundColor: 'danger.2',
    },
    $active: {
      $backgroundColor: 'danger.3',
    },
    ...disabled,
  },
  ghost: {
    $backgroundColor: 'transparent',
    $color: 'text',
    $hover: {
      $backgroundColor: 'background.2',
    },
    $active: {
      $backgroundColor: 'background.3',
    },
    $disabled: {
      $color: 'background.3',
    },
  },
};

export const sizes = {
  large: {
    $paddingX: 4,
    $paddingY: 3,
    $fontSize: 3,
    $height: 9,
  },
  regular: {
    $paddingX: 3,
    $paddingY: 2,
    $fontSize: 2,
    $height: 7,
  },
  small: {
    $padding: 2,
    $fontSize: 1,
    $height: 6,
  },
};
