import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>This is some text</Text>
);

export const Default = Template.bind({});
Default.args = {
  size: 'regular',
  color: 'text',
  as: 'span',
  align: 'left',
};
