import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../styles/globals.css';
import 'material-symbols/index.css';
import { Button } from '../components/Button';

export default {
	title: 'Example/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function Template(args: any) {
	return <Button {...args} />;
};

export const Elevated = Template.bind({});
Elevated.args = {
	label: 'Elevated button',
	variant: 'elevated',
};

export const ElevatedByIcon = Template.bind({});
ElevatedByIcon.args = {
	label: 'Elevated button',
	variant: 'elevated',
	icon: 'add',
};

export const Filled = Template.bind({});
Filled.args = {
	label: 'Filled button',
	variant: 'filled',
};

export const FilledByIcon = Template.bind({});
FilledByIcon.args = {
	label: 'Filled button',
	variant: 'filled',
	icon: 'add',
};

export const Outlined = Template.bind({});
Outlined.args = {
	label: 'Outlined',
	variant: 'outlined',
};

export const OutlinedByIcon = Template.bind({});
OutlinedByIcon.args = {
	label: 'Outlined',
	variant: 'outlined',
	icon: 'add',
};

export const Tonal = Template.bind({});
Tonal.args = {
	label: 'Tonal button',
	variant: 'tonal',
};

export const TonalByIcon = Template.bind({});
TonalByIcon.args = {
	label: 'Tonal button',
	variant: 'tonal',
	icon: 'add',
};

export const Text = Template.bind({});
Text.args = {
	label: 'Text button',
	variant: 'text',
};

export const TextByIcon = Template.bind({});
TextByIcon.args = {
	label: 'Text button',
	variant: 'text',
	icon: 'add',
};
