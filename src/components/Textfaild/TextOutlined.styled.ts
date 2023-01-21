import styled from 'styled-components';

export const LabelOutlined = styled.div`
	position: absolute;
	transform-origin: center center;
	transform: translateY(-50%);
	top: 50%;
	background: white;
	transition: top 300ms;
	margin-inline-start: 12px;
`;
type OutlinedTextFilledPropsType = { error: boolean };
const OutlinedTextFilled = styled.div<OutlinedTextFilledPropsType>`
	position: relative;
	width: 300px;
	height: 57px;
	background-color: white;
	border: 1px solid #777680;
	/* // TODO : fixed change color on change props value*/
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 8px;
	padding-inline: 4px;
	gap: 4px;
	border: 1px solid #777680;
	border-radius: 4px;
	&:focus-within {
		border: 2px solid #343dff;
		border-radius: 4px;
	}
	& .left-icon {
		width: max-content;
	}
	& .right-icon {
		width: max-content;
	}
	& input {
		flex-shrink: 1;
		flex-grow: 1;
		height: 100%;
		border: none;
		outline: none;
		margin-inline-start: 12px;
	}
	& input:focus + ${LabelOutlined} {
		transform: translateY(-50%) scale(0.9);
		top: 0%;
		color: #343dff;
	}
	& input:not(:placeholder-shown) + ${LabelOutlined} {
		transform: translateY(-50%) scale(0.9);
		top: 0%;
	}
`;

export default OutlinedTextFilled;
