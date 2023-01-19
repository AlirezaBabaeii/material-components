import styled from 'styled-components';
import { withTransition, withTypography } from '../../theme';

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

type BaseContainerProps = {
	color?: string;
	hasIcon: boolean;
};
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
	${withTypography('title-large')};
`;

type BaseLabelProps = {
	color?: string;
	typography?: string;
};
export const BaseLabelLayer = styled.div<BaseLabelProps>`
	display: inline-block;
	order: 2;
	z-index: 2;
`;
BaseLabelLayer.defaultProps = { color: 'primary', typography: 'label' };
