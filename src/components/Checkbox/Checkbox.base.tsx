import { Icon } from '../../components/Icon';
import styled from 'styled-components';

export const CheckboxIcon = styled(Icon)`
  pointer-events: none;
`;

export const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
`;
