import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputLabel } from '.';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => (
  <>
    <InputLabel {...args} htmlFor="checkbox" text="Checkbox label">
      <Checkbox id="checkbox" />
    </InputLabel>
    <InputLabel {...args} htmlFor="radio" text="Radio label">
      <Radio id="radio" />
    </InputLabel>
  </>
);

export const Default = Template.bind({});
