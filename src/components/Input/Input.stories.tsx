import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';
import { useEffect, useRef } from 'react';
import { Icon } from '../../components/Icon';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return <Input {...args} ref={inputRef} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something please',
  onChange: () => {},
  error: false,
  itemLeft: <Icon symbol="basketball" />,
  itemRight: <Icon symbol="chevron-down" />,
  disabled: false,
};
