import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <>
    <Icon {...args} symbol="basketball" />
    <Icon {...args} symbol="chevron-down" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 9,
};
