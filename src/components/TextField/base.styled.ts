import styled from 'styled-components';

export const RightComponent = styled.div`
	width: 48px;
	height: 48px;
	flex-shrink: 1;
	flex-grow: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Label = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	transition: top 300ms;
`;

export const Input = styled.input`
	height: 100%;
	border: none;
	outline: none;
	background: transparent;
	width: 100%;
	padding: 0;
	margin: 0;
`;
