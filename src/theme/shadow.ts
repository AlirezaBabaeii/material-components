import {
	css,
	type FlattenInterpolation,
	type ThemeProps,
} from 'styled-components';

// FIXME : conflict by `elevation` as `box-shadow` and `z-index`;

export function withShadow(): FlattenInterpolation<ThemeProps<any>> {
	return css`
		box-shadow: 0 0 0 ${(props) => props.theme['md-sys-color-shadow']};
	`;
}

export type NULL = null;
