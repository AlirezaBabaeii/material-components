import styled from 'styled-components';
import { BaseButton } from './base.styled';
import { withToken } from '../../theme';
import { Variant } from './types';

export const OutlinedButton = styled(BaseButton)`
	border: 2px solid ${withToken('primary')};
	color: ${withToken('primary')};
`;

export type OutlinedProps = {
	variant: Variant.Outlined | `${Variant.Outlined}`;
};
