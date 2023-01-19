import styled, { css } from 'styled-components';
import { withToken } from '../../theme';
import type { Variants as ColorType } from '../../theme/types';
import { BaseContainer, BaseLabelLayer, BaseStateLayer } from './base.styled';

export const Container = styled(BaseContainer)`
	${(props) => css`
		background-color: ${withToken(props.color as ColorType)};
		color: ${withToken(`on-${props.color}` as ColorType)};
	`}
`;

export const State = styled(BaseStateLayer)``;

export const Label = styled(BaseLabelLayer)``;
