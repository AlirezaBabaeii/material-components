import {
	css,
	type FlattenInterpolation,
	type ThemeProps,
} from 'styled-components';
import token from './tokens';

export enum Rounded {
	None = 'none',
	ExtraSmall = 'extra-small',
	ExtraSmallTop = 'extra-small-top',
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
	LargeEnd = 'large-end',
	LargeTop = 'large-top',
	ExtraLarge = 'extra-large',
	ExtraLargeTop = 'extra-large-top',
	Full = 'full',
}
export type RoundedType = `${Rounded}` | Rounded;

export const rounded: Record<RoundedType, string> = {
	[Rounded.None]: token[`md-sys-shape-corner-${Rounded.None}`],
	[Rounded.ExtraSmall]: token[`md-sys-shape-corner-${Rounded.ExtraSmall}`],
	[Rounded.ExtraSmallTop]:
		token[`md-sys-shape-corner-${Rounded.ExtraSmallTop}`],
	[Rounded.Small]: token[`md-sys-shape-corner-${Rounded.Small}`],
	[Rounded.Medium]: token[`md-sys-shape-corner-${Rounded.Medium}`],
	[Rounded.Large]: token[`md-sys-shape-corner-${Rounded.Large}`],
	[Rounded.LargeEnd]: token[`md-sys-shape-corner-${Rounded.LargeEnd}`],
	[Rounded.LargeTop]: token[`md-sys-shape-corner-${Rounded.LargeTop}`],
	[Rounded.ExtraLarge]: token[`md-sys-shape-corner-${Rounded.ExtraLarge}`],
	[Rounded.ExtraLargeTop]:
		token[`md-sys-shape-corner-${Rounded.ExtraLargeTop}`],
	[Rounded.Full]: token[`md-sys-shape-corner-${Rounded.Full}`],
};

export function withRounded(
	value: RoundedType,
): FlattenInterpolation<ThemeProps<any>> {
	return css`
		border-radius: ${(props) =>
			props.theme[`md-sys-shape-corner-${value}`]};
	`;
}
