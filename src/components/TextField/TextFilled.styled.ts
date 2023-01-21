import styled from 'styled-components';
import { Input, Label } from './base.styled';

type InnerContainerPropsType = { twosIcon: boolean };
export const InnerContainer = styled.div<InnerContainerPropsType>`
	height: 100%;
	position: relative;
	margin-inline-start: ${(props) => (props.twosIcon ? '0px' : '16px')};
	flex-shrink: 1;
	flex-grow: 1;
`;

export const TextFilledContainer = styled.div`
	width: 300px;
	height: 57px;
	background: #e4e1ec;
	border: 1px solid #777680;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 8px;
	gap: 4px;
	border: none;
	border-radius: 4px 4px 0px 0px;
	border-bottom: 1px solid #1b1b1f;
	& ${Input}:focus + ${Label} {
		transform: translateY(-50%);
		top: 0%;
		font-size: 12px;
		color: #343dff;
	}
	&:focus-within {
		border-bottom: 2px solid #343dff;
	}
	& ${Input}:not(:placeholder-shown) + ${Label} {
		transform: translateY(-50%);
		top: 0%;
		font-size: 12px;
		/* // TODO : using token font-size */
		color: #343dff;
	}
`;
