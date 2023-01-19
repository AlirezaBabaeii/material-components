import styled, { css } from 'styled-components';
import { withToken } from '../../theme';
import type { Variants as ColorType } from '../../theme/types';
import { BaseButton } from './base.styled';
import { Variant } from './types';

export const FilledButton = styled(BaseButton)`
	${(props) => css`
		background-color: ${withToken(props.color as ColorType)};
		color: ${withToken(`on-${props.color}` as ColorType)};
	`}
`;

export type FilledProps = {
	variant: Variant.Filled | `${Variant.Filled}`;
};
