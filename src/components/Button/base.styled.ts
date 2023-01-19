import styled from 'styled-components';
import { withTypography } from '../../theme';

export const BaseButton = styled.button`
	position: relative;
	display: inline-flex;
	flex-direction: row;
	flex-wrap: wrap;
	border: none;
	box-shadow: none;
	outline: none;
	stroke: none;
	padding: 2rem 6rem;
	margin: 0;
	border-radius: 100px;

	${withTypography('title-large')}
`;

export const NULL = null;
