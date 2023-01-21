import styled from 'styled-components';
import { withRounded, withToken } from '../../theme';

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
	color: ${(props) =>
		props.error ? withToken('error') : withToken('on-surface-variant')};
	/* // TODO : fixed change color on change props value*/
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 8px;
	padding-inline: 4px;
	gap: 4px;
	border: ${(props) => (props.error ? '2px' : '1px')} solid
		${(props) => (props.error ? withToken('error') : withToken('outline'))};
	${withRounded('extra-small')}

	&:focus-within {
		border: 2px solid
			${(props) =>
				props.error ? withToken('error') : withToken('primary')};
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
		color: ${(props) =>
			props.error ? withToken('error') : withToken('primary')};
	}
	& input:not(:placeholder-shown) + ${LabelOutlined} {
		transform: translateY(-50%) scale(0.9);
		top: 0%;
	}
`;

export default OutlinedTextFilled;
