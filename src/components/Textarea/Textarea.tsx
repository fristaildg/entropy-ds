import styled from 'styled-components';
import {
  DetailedHTMLProps,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';
import { InputBase, InputWrapper } from '../Input/Input.base';

export type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  error?: boolean;
};

const StyledTextarea = styled(InputBase)``;

const Textarea = (
  props: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  return (
    <InputWrapper>
      <StyledTextarea {...props} as="textarea" ref={ref} />
    </InputWrapper>
  );
};

export default forwardRef(Textarea);
