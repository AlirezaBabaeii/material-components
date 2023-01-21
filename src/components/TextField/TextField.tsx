import { Icon } from '../Icon';
import { IconSymbolType } from '../Icon/types';
import { Input, Label, RightComponent } from './base.styled';
import { TextFilledContainer, InnerContainer } from './TextFilled.styled';
import OutlinedTextFilled, { LabelOutlined } from './TextOutlined.styled';

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

function TextFields(props: TextFieldsType): JSX.Element {
	const { variant, type, placeholder = ' ', icon, error = false } = props;
	const a = true;
	switch (variant) {
		case Variant.Outlined:
			return (
				<OutlinedTextFilled error={error}>
					{icon && (
						<RightComponent>
							<Icon icon={icon} />
						</RightComponent>
					)}
					<InnerContainer twosIcon={a}>
						<input
							placeholder={placeholder}
							type={type}
						/>
						<LabelOutlined>label</LabelOutlined>
					</InnerContainer>
					{icon && (
						<RightComponent>
							<Icon icon={icon} />
						</RightComponent>
					)}
				</OutlinedTextFilled>
			);

		default:
			return (
				<TextFilledContainer>
					{icon && (
						<RightComponent>
							<Icon icon={icon} />
						</RightComponent>
					)}
					<InnerContainer twosIcon={a}>
						<Input
							type={type}
							placeholder={placeholder}
						/>
						<Label>label</Label>
					</InnerContainer>
					{icon && (
						<RightComponent>
							<Icon icon={icon} />
						</RightComponent>
					)}
				</TextFilledContainer>
			);
	}
}

type TextFieldsType = React.PropsWithChildren<{
	variant: `${Variant}` | Variant;
	type: `${Type}` | Type;
	placeholder?: string;
	icon?: IconSymbolType;
	error?: boolean;
}>;

export default TextFields;
