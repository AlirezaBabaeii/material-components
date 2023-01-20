import { Icon } from '../Icon';
import { IconSymbolType } from '../Icon/types';
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
	const { variant, type, placeholder = ' ', icon } = props;
	switch (variant) {
		case Variant.Outlined:
			return (
				<OutlindeTextFilled>
					{/* <div className="left-icon">icon</div> */}
					<input
						placeholder={placeholder}
						type={type}
					/>
					<LabelOutlined>label</LabelOutlined>
					{icon && (
						<div className="right-icon">
							<Icon icon={icon} />
						</div>
					)}
				</OutlindeTextFilled>
			);

		default:
			return (
				<TextFilledContainer>
					<InerContainer>
						<Input
							type={type}
							placeholder={placeholder}
						/>
						<Label>label</Label>
					</InerContainer>
					{icon && (
						<RightComponent>
							<Icon icon={icon} />
						</RightComponent>
					)}
				</TextFilledContainer>
			);
	}
}

type TextFaildType = React.PropsWithChildren<{
	variant: `${Variant}` | Variant;
	type: `${Type}` | Type;
	placeholder?: string;
	icon?: IconSymbolType;
}>;

export default TextFaild;
