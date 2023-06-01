import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from '.';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'This is a textarea',
  error: false,
  disabled: false,
};
