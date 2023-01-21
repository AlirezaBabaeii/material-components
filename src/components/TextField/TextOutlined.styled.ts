import styled from 'styled-components';
import { withRounded, withToken } from '../../theme';

export const LabelOutlined = styled.div`
	position: absolute;
	transform-origin: center center;
	transform: translateY(-50%);
	top: 50%;
	background: white;
	transition: top 300ms;
	margin-inline-start: 16px;
`;
type OutlinedTextFilledPropsType = { error: boolean };
const OutlinedTextFilled = styled.div<OutlinedTextFilledPropsType>`
	position: relative;
	width: 300px;
	height: 57px;
	background-color: white;
	color: ${(props) =>
		withToken(props.error ? 'error' : 'on-surface-variant')};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 8px;
	gap: 4px;
	border-style: solid;
	border-width: ${(props) => (props.error ? '2px' : '1px')};
	border-color: ${(props) => withToken(props.error ? 'error' : 'outline')};
	${withRounded('extra-small')}

	&:focus-within {
		border-width: 2px;
		border-color: ${(props) =>
			withToken(props.error ? 'error' : 'primary')};
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
		margin-inline-start: 16px;
	}
	& input:focus + ${LabelOutlined} {
		transform: translateY(-50%) scale(0.9);
		top: 0%;
		color: ${(props) => withToken(props.error ? 'error' : 'primary')};
	}
	& input:not(:placeholder-shown) + ${LabelOutlined} {
		transform: translateY(-50%) scale(0.9);
		top: 0%;
	}
`;

export default OutlinedTextFilled;
