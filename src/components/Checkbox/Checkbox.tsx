import {
  ChangeEvent,
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';
import { TextProps } from '../../components/Text';
import { CheckboxIcon, StyledCheckbox } from './Checkbox.base';
import { InputLabel } from '../InputLabel';

export type CheckboxProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'size' | 'disabled'
> & {
  id: string;
  label?: string;
  size?: TextProps['size'];
  disabled?: boolean;
};

const Checkbox = (
  props: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const { label, onChange, size = 'regular', disabled, ...restProps } = props;
  const [checked, setChecked] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange && onChange(event);
  };

  return (
    <InputLabel
      htmlFor={restProps.id}
      size={size}
      disabled={disabled}
      text={label}
    >
      <CheckboxIcon symbol={checked ? 'check' : 'uncheck'} size="1.5em" />
      <StyledCheckbox
        {...restProps}
        ref={ref}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </InputLabel>
  );
};

export default forwardRef(Checkbox);
