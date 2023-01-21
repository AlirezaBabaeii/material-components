import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextFields from '../components/Textfaild/TextFaild';

export default {
	title: 'Example/TextFaild',
	component: TextFields,
	argTypes: { variant: String },
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = function Template(
	args: any,
) {
	return (
		<TextFields
			label="dshd"
			{...args}>
			Hello World
		</TextFields>
	);
};

export const Filled = Template.bind({});
Filled.args = { variant: 'filled' };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined' };
