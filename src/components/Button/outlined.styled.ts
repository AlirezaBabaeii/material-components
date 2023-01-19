import styled from 'styled-components';
import { withToken } from '../../theme';
import { withOpacity } from '../../theme/opacity';
import { BaseContainer, BaseLabelLayer, BaseStateLayer } from './base.styled';

export const State = styled(BaseStateLayer)``;

export const Label = styled(BaseLabelLayer)``;

export const Container = styled(BaseContainer)`
	border: 1px solid ${withToken('outline')};
	background-color: ${withToken('surface')};
	color: ${withToken('primary')};

	&:hover ${State} {
		background-color: ${withToken('primary')};
		${withOpacity('hover')};
		/* // TODO : elevation1 */
	}

	&:focus ${State} {
		background-color: ${withToken('primary')};
		${withOpacity('focus')};
		/* // TODO : elevation0 */
	}

	&:active ${State} {
		background-color: ${withToken('primary')};
		${withOpacity('hover')};
		/* // TODO : elevation0 */
	}
`;
