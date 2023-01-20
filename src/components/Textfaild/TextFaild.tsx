import { Input, Label, RightComponent } from './base.styled';
import { TextFilledContainer, InerContainer } from './TextFilled.styled';
import OutlindeTextFilled, { LabelOutlined } from './TextOutlined.styled';

enum Variant {
	Filled = 'filled',
	Outlined = 'outlined',
}
enum Type {
	Text = 'text',
	password = 'password',
	number = 'number',
	email = 'email',
}

function TextFaild(props: TextFaildType): JSX.Element {
	const { variant, type } = props;
	switch (variant) {
		case Variant.Outlined:
			return (
				<OutlindeTextFilled>
					{/* <div className="left-icon">icon</div> */}
					<input
						placeholder=" "
						type={type}
					/>
					<LabelOutlined>label</LabelOutlined>
					<div className="right-icon">icon</div>
				</OutlindeTextFilled>
			);

		default:
			return (
				<TextFilledContainer>
					<InerContainer>
						<Input
							type={type}
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
	type: `${Type}` | Type;
}>;

export default TextFaild;
