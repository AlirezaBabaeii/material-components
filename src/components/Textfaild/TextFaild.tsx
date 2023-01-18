import React from 'react';
import styled from 'styled-components';

const Outlinedtextfield = styled.div`
	position: relative;
	width: 210px;
	height: 56px;
	border-radius: 4px 4px 0px 0px;
	background: transparent;
	border: 2px solid #6200ee;
	padding-block: 8px;
	padding-inline: 16px;
	display: inline-grid;
	& > div {
		justify-self: flex-end;
		align-self: center;
		display: inline-grid;
	}
	& > label {
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		margin-inline-start: 16px;
	}
	& > input {
		border: none;
		outline: none;
		padding: 0;
	}
	/* & > label {
		transform: translateY(-50%);
		background-color: white;
		color: gray;
		padding: 0 0.3rem;
		margin: 0 0.5rem;
		transition: 0.1s ease-out;
		transform-origin: left top;
		pointer-events: none;
	} */
	/* & > input {
		font-size: 1rem;
		outline: none;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 1rem 0.7rem;
		color: gray;
		transition: 0.1s ease-out;
	}
	& > input:focus {
		border-color: #6200ee;
	} */
	/* & > input:focus + label {
		color: #6200ee;
		top: 0;
		transform: translateY(-50%) scale(0.9);
	} */
`;

enum Variant {
	Filled = 'filled',
	Outlined = 'outlined',
	Text = 'text',
	Elevated = 'elevated',
	Tonal = 'tonal',
}

function TextFaild(props: TextFaildType): JSX.Element {
	const { variant } = props;
	switch (variant) {
		case Variant.Outlined:
			return (
				<Outlinedtextfield>
					<div>icon</div>
					<input
						placeholder=" "
						type="text"
					/>
					<label>Label</label>
				</Outlinedtextfield>
			);

		default:
			return <div>Default</div>;
	}
}

type TextFaildType = React.PropsWithChildren<{
	variant: `${Variant}` | Variant;
	// label?: string;
}>;

export default TextFaild;
