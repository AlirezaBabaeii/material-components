import type { PropsWithChildren } from 'react';
import type { Variants as ColorType } from '../../theme/types';

export enum Variant {
	Filled = 'filled',
	Outlined = 'outlined',
	Text = 'text',
	Elevated = 'elevated',
	Tonal = 'tonal',
}
export type VariantType = `${Variant}` | Variant;

export type PropsWithBase<Props = {}> = PropsWithChildren<
	{
		rightIcon?: ButtonIcon;
		leftIcon?: ButtonIcon;
		color?: ColorType;
	} & Props
>;

type ButtonIcon =
	| SVGAElement
	| JSX.Element
	| ((props: any) => JSX.Element) /* // TODO : | `${IconType}` | IconType  */;
