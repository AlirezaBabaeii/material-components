import styled from 'styled-components';
import { withToken } from '../../theme';
import { BaseContainer, BaseLabelLayer, BaseStateLayer } from './base.styled';

export const State = styled(BaseStateLayer)``;

export const Label = styled(BaseLabelLayer)``;

export const Container = styled(BaseContainer)`
	background-color: transparent;
	color: ${withToken('primary')};
	padding-inline-end: ${(props) => (props.hasIcon ? '16px' : '12px')};
	padding-inline-start: 12px;
	min-width: 48px;
	border-radius: 20px;

	&:disabled {
		opacity: 1;
	}
`;
