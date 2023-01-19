import {
	css,
	type CSSProperties,
	type FlattenSimpleInterpolation,
} from 'styled-components';
import token from './tokens';

export enum Transition {
	EmphasizedBeginOnScreen = 'emphasized-begin-on-screen',
	EmphasizedEndOnScreen = 'emphasized-end-on-screen',
	EmphasizedEnterScreen = 'emphasized-enter-screen',
	EmphasizedExitScreen = 'emphasized-exit-screen',
	StandardBeginOnScreen = 'standard-begin-on-screen',
	StandardEndOnScreen = 'standard-end-on-screen',
	StandardEnterScreen = 'standard-enter-screen',
	StandardExitScreen = 'standard-exit-screen',
}
export type TransitionType = `${Transition}` | Transition;

const motion: Record<TransitionType, CSSProperties> = {
	[Transition.EmphasizedBeginOnScreen]: {
		transitionDuration: token['md-sys-motion-duration-long2'],
		transitionTimingFunction: token['md-sys-motion-easing-emphasized'],
	},
	[Transition.EmphasizedEndOnScreen]: {
		transitionDuration: token['md-sys-motion-duration-long2'],
		transitionTimingFunction: token['md-sys-motion-easing-emphasized'],
	},
	[Transition.EmphasizedEnterScreen]: {
		transitionDuration: token['md-sys-motion-duration-medium4'],
		transitionTimingFunction:
			token['md-sys-motion-easing-emphasized-decelerate'],
	},
	[Transition.EmphasizedExitScreen]: {
		transitionDuration: token['md-sys-motion-duration-short4'],
		transitionTimingFunction:
			token['md-sys-motion-easing-emphasized-accelerate'],
	},

	[Transition.StandardBeginOnScreen]: {
		transitionDuration: token['md-sys-motion-duration-medium2'],
		transitionTimingFunction: token['md-sys-motion-easing-standard'],
	},
	[Transition.StandardEndOnScreen]: {
		transitionDuration: token['md-sys-motion-duration-medium2'],
		transitionTimingFunction: token['md-sys-motion-easing-standard'],
	},
	[Transition.StandardEnterScreen]: {
		transitionDuration: token['md-sys-motion-duration-medium1'],
		transitionTimingFunction:
			token['md-sys-motion-easing-standard-decelerate'],
	},
	[Transition.StandardExitScreen]: {
		transitionDuration: token['md-sys-motion-duration-short4'],
		transitionTimingFunction:
			token['md-sys-motion-easing-standard-accelerate'],
	},
};

export default motion;

type Levels = 1 | 2 | 3 | 4;

type DurationLong = `long${Levels}`;
type DurationMedium = `medium${Levels}`;
type DurationShort = `short${Levels}`;
export enum Duration {
	Long1 = 'long1',
	Long2 = 'long2',
	Long3 = 'long3',
	Long4 = 'long4',

	Medium1 = 'medium1',
	Medium2 = 'medium2',
	Medium3 = 'medium3',
	Medium4 = 'medium4',

	Short1 = 'short1',
	Short2 = 'short2',
	Short3 = 'short3',
	Short4 = 'short4',
}
export type DurationType =
	| DurationShort
	| DurationMedium
	| DurationLong
	| `${Duration}`
	| Duration;

export function withTransition(
	transition: TransitionType,
	element?: keyof CSSProperties,
): FlattenSimpleInterpolation {
	const { transitionDuration, transitionTimingFunction } = motion[transition];
	return css`
		transition-property: ${element ?? 'all'};
		transition-duration: ${transitionDuration};
		transition-timing-function: ${transitionTimingFunction};
	`;
}
