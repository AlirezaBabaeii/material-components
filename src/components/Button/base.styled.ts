import styled from 'styled-components';
import { withToken, withTransition, withTypography } from '../../theme';

type BaseStateProps = {};
export const BaseStateLayer = styled.span<BaseStateProps>`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 1;

	transition: 0.4s ease all;
	${withTransition('standard-begin-on-screen', 'opacity')}
`;

type BaseLabelProps = {};
export const BaseLabelLayer = styled.span<BaseLabelProps>`
	${withTypography('label-large')};
	display: inline-block;
	text-align: center;
	order: 2;
	z-index: 2;
`;

type BaseContainerProps = { hasIcon: boolean };
export const BaseContainer = styled.button<BaseContainerProps>`
	position: relative;
	display: inline-flex;
	flex-direction: row;
	flex-wrap: wrap;
	border: none;
	box-shadow: none;
	outline: none;
	stroke: none;
	margin: 0;
	text-decoration: none;
	place-items: center;
	place-content: center;
	border-radius: 100px;
	padding-inline-end: 24px;
	padding-inline-start: ${(props) => (props.hasIcon ? '16px' : '24px')};
	padding-block: 10px;
	column-gap: 8px;
	height: 40px;
	transition: 0.4s ease all;
	overflow: hidden;
	cursor: pointer;
	${withTypography('label-large')};

	&:disabled {
		background-color: ${withToken('on-surface')};
		color: ${withToken('on-surface')};
		opacity: 0.12;
	}

	&:disabled > * {
		opacity: 0.38;
	}
`;
