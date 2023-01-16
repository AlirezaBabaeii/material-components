import styled from 'styled-components';
import { BaseButton } from './base.styled';
import { Variant } from './types';

export const ElevatedButton = styled(BaseButton)``;

export type ElevatedProps = {
	variant: Variant.Elevated | `${Variant.Elevated}`;
};
