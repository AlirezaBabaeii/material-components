import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextFaild from '../components/Textfaild/TextFaild';

export default {
	title: 'Example/TextFaild',
	component: TextFaild,
	argTypes: { variant: String },
} as ComponentMeta<typeof TextFaild>;

const Template: ComponentStory<typeof TextFaild> = function Template(
	args: any,
) {
	return (
		<TextFaild
			label="dshd"
			{...args}>
			Hello World
		</TextFaild>
	);
};

export const Filled = Template.bind({});
Filled.args = { variant: 'filled' };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined' };
