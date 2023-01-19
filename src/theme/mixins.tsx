import type { Variants as ColorVariants } from './types';

export function withToken(token: ColorVariants): (props: any) => string {
	return (props) => props.theme[`md-sys-color-${token}`];
}

export { withTransition } from './motion';
export { withTypography } from './typography';
