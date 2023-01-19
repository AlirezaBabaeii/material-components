import type { StyledComponent } from 'styled-components';
import * as Elevated from './elevated.styled';
import * as Filled from './filled.styled';
import * as Outlined from './outlined.styled';
import * as Text from './text.styled';
import * as Tonal from './tonal.styled';
import { Variant, type VariantType } from './types';

export const ButtonVariant: Record<VariantType, StyledButton> = {
	[Variant.Elevated]: Elevated,
	[Variant.Filled]: Filled,
	[Variant.Outlined]: Outlined,
	[Variant.Text]: Text,
	[Variant.Tonal]: Tonal,
};

export function useVariant(variant: VariantType): StyledButton {
	return ButtonVariant[variant];
}

type StyledButton = Record<
	'Container' | 'State' | 'Label',
	StyledComponent<'button' | 'a', any, any>
>;
