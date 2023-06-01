import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';
import { Icon } from '../../components/Icon';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button {...args}>Button</Button>
    <Button {...args}>
      <Icon symbol="basketball" color="currentColor" />
    </Button>
    <Button {...args}>
      <Icon symbol="basketball" color="currentColor" animation="spin" />
      Leading Icon
    </Button>
    <Button {...args}>
      Trailing Icon
      <Icon symbol="chevron-down" color="currentColor" />
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'large',
  loading: false,
  disabled: false,
};
