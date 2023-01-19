import styled from 'styled-components';

export const RightComponent = styled.div`
	width: max-content;
	flex-shrink: 1;
	flex-grow: 0;
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
`;
