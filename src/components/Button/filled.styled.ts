import styled from 'styled-components';
import { withToken } from '../../theme';
import { withOpacity } from '../../theme/opacity';
import { BaseContainer, BaseLabelLayer, BaseStateLayer } from './base.styled';

export const State = styled(BaseStateLayer)``;

export const Label = styled(BaseLabelLayer)`
	text-align: center;
`;

export const Container = styled(BaseContainer)`
	background-color: ${withToken('primary')};
	color: ${withToken('on-primary')};

	& > [class^='material-symbols'] {
		width: 18px;
		height: 18px;
	}

	&:hover ${State} {
		background-color: ${withToken('on-primary')};
		${withOpacity('hover')};
		/* // TODO : elevation1 */
	}

	&:focus ${State} {
		background-color: ${withToken('on-primary')};
		${withOpacity('focus')};
		/* // TODO : elevation0 */
	}

	&:active ${State} {
		background-color: ${withToken(`on-primary`)};
		${withOpacity('hover')};
		/* // TODO : elevation0 */
	}
`;
