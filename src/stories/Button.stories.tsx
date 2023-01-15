import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { variant: String },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function Template(args: any) {
  return <Button {...args}>Hello World</Button>;
};

export const Filled = Template.bind({});
Filled.args = { variant: 'filled' };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined' };
