import styled, { css } from 'styled-components';
import { withToken } from '../../theme';
import type { Variants as ColorType } from '../../theme/types';
import { BaseContainer, BaseLabelLayer, BaseStateLayer } from './base.styled';
import { withOpacity } from '../../theme/opacity';

export const State = styled(BaseStateLayer)``;

export const Label = styled(BaseLabelLayer)`
	text-align: center;
`;

export const Container = styled(BaseContainer)`
	${(props) => css`
		background-color: ${withToken(props.color as ColorType)};
		color: ${withToken(`on-${props.color}` as ColorType)};
	`}

	&:disabled {
		background-color: ${withToken('on-surface')};
		color: ${withToken('on-surface')};
		opacity: 0.12;
	}

	&:disabled > * {
		opacity: 0.38;
	}

	&:hover ${State} {
		${(props) => css`
			background-color: ${withToken(`on-${props.color}` as ColorType)};
			${withOpacity('hover')};
			/* // TODO : elevation1 */
		`}
	}

	&:focus ${State} {
		${(props) => css`
			background-color: ${withToken(`on-${props.color}` as ColorType)};
			${withOpacity('focus')};
			/* // TODO : elevation0 */
		`}
	}

	&:active ${State} {
		${(props) => css`
			background-color: ${withToken(`on-${props.color}` as ColorType)};
			${withOpacity('hover')};
			/* // TODO : elevation0 */
		`}
	}
`;
