import { FlattenSimpleInterpolation, css } from 'styled-components';
import token from './tokens';

export enum State {
	Hover = 'hover',
	Focus = 'focus',
	Pressed = 'pressed',
	Dragged = 'dragged',
}
export type StateType = `${State}` | State;

export const opacity: Record<State, string> = {
	[State.Hover]: token['md-sys-state-hover-state-layer-opacity'],
	[State.Focus]: token['md-sys-state-focus-state-layer-opacity'],
	[State.Pressed]: token['md-sys-state-pressed-state-layer-opacity'],
	[State.Dragged]: token['md-sys-state-dragged-state-layer-opacity'],
};

export function withOpacity(state: StateType): FlattenSimpleInterpolation {
	// TODO : opacity: ${(props) => props.theme[`md-sys-state-${state}-state-layer-opacity`]};
	return css`
		opacity: ${opacity[state]};
	`;
}
