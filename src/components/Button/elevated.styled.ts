import styled from 'styled-components';
import { withToken } from '../../theme';
import { BaseContainer, BaseLabelLayer, BaseStateLayer } from './base.styled';
import { withOpacity } from '../../theme/opacity';

export const State = styled(BaseStateLayer)``;

export const Label = styled(BaseLabelLayer)`
	color: ${withToken('primary')};
`;

export const Container = styled(BaseContainer)`
	background-color: ${withToken('surface')};
	color: ${withToken('primary')};
	box-shadow: 0 1px 2px 0 ${withToken('shadow')},
		0 1px 3px 1px ${withToken('shadow')};

	& > [class^='material-symbols-'] {
		color: primary;
	}

	&:hover > ${State} {
		background-color: ${withToken('primary')};
		${withOpacity('hover')};
		/* // TODO : elevation-level2 */
	}

	&:focus > ${State} {
		background-color: ${withToken('primary')};
		${withOpacity('focus')};
		/* // TODO : elevation-level1 */
	}

	&:active > ${State} {
		background-color: ${withToken('primary')};
		${withOpacity('pressed')};
		/* // TODO : elevation-level1 */
	}
`;
