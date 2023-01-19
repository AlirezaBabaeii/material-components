import { ElevatedButton, type ElevatedProps } from './elevated.styled';
import { FilledButton, type FilledProps } from './filled.styled';
import { OutlinedButton, type OutlinedProps } from './outlined.styled';
import { TextButton, type TextProps } from './text.styled';
import { TonalButton, type TonalProps } from './tonal.styled';
import { Variant, type PropsWithBase } from './types';

export default function Button({ variant, ...props }: Props): JSX.Element {
	switch (variant) {
		case Variant.Filled:
			return <FilledButton {...props} />;

		case Variant.Outlined:
			return <OutlinedButton {...props} />;

		case Variant.Text:
			return <TextButton {...props} />;

		case Variant.Elevated:
			return <ElevatedButton {...props} />;

		case Variant.Tonal:
			return <TonalButton {...props} />;

		default:
			return <FilledButton {...props} />;
	}
}

type Props = PropsWithBase<
	FilledProps | OutlinedProps | TextProps | ElevatedProps | TonalProps
>;
