import styled from 'styled-components';
import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { TextProps } from '../Text';
import { InputLabel } from '../InputLabel';
import { Icon } from '../Icon';

export type RadioProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'size'
> & {
  id: string;
  label?: string;
  size?: TextProps['size'];
  disabled?: boolean;
};

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  appearance: none;
`;

export const RadioIcon = styled(Icon)`
  pointer-events: none;
  border-radius: 50%;
`;

const Radio = (props: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, size, checked, ...restProps } = props;

  return (
    <InputLabel
      text={label}
      htmlFor={restProps.id}
      size={size}
      disabled={restProps.disabled}
    >
      <RadioIcon
        symbol={checked ? 'check-radio' : 'uncheck-radio'}
        size="1.5em"
      />
      <StyledRadio {...restProps} ref={ref} />
    </InputLabel>
  );
};

export default forwardRef(Radio);
