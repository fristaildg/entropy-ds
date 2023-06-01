import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '.';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const [checked, setChecked] = useState('2');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  return (
    <>
      <div>
        <Radio
          {...args}
          id="1"
          label="Goku"
          value="1"
          checked={checked === '1'}
          onChange={handleChange}
        />
        <Radio
          {...args}
          id="2"
          label="Vegeta"
          value="2"
          checked={checked === '2'}
          onChange={handleChange}
        />
        <Radio
          {...args}
          id="3"
          label="Freezer"
          value="3"
          checked={checked === '3'}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'fighters',
  disabled: false,
};
