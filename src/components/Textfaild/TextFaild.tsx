import React from 'react';
import { Input, Label, RightComponent } from './base.styled';
import { TextFilledContainer, InerContainer } from './TextFilled.styled';
import OutlindeTextFilled, { LabelOutlined } from './TextOutlined.styled';

enum Variant {
	Filled = 'filled',
	Outlined = 'outlined',
}

function TextFaild(props: TextFaildType): JSX.Element {
	const { variant } = props;
	switch (variant) {
		case Variant.Outlined:
			return (
				<OutlindeTextFilled>
					{/* <div className="left-icon">icon</div> */}
					<input placeholder=" " />
					<LabelOutlined>label</LabelOutlined>
					<div className="right-icon">icon</div>
				</OutlindeTextFilled>
			);

		default:
			return (
				<TextFilledContainer>
					<InerContainer>
						<Input
							type="text"
							placeholder=" "
						/>
						<Label>label</Label>
					</InerContainer>
					<RightComponent>icon</RightComponent>
				</TextFilledContainer>
			);
	}
}

type TextFaildType = React.PropsWithChildren<{
	variant: `${Variant}` | Variant;
}>;

export default TextFaild;
