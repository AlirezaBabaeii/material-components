import styled from 'styled-components';
import { BaseButton } from './base.styled';
import { Variant } from './types';

export const TextButton = styled(BaseButton)``;

export type TextProps = {
	variant: Variant.Text | `${Variant.Text}`;
};
