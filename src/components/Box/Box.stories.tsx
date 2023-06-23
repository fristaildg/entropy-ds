import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Text>Box</Text>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  $backgroundColor: 'background.2',
  $width: 14,
  $height: 14,
  $display: 'flex',
  $alignItems: 'center',
  $justifyContent: 'center',
};
