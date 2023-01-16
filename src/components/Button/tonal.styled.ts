import styled from 'styled-components';
import { BaseButton } from './base.styled';
import { Variant } from './types';

export const TonalButton = styled(BaseButton)``;

export type TonalProps = {
	variant: Variant.Tonal | `${Variant.Tonal}`;
};
