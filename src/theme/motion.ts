import { CSSProperties } from 'styled-components';
import token from './tokens';

const motion: Record<string, CSSProperties> = {
	'emphasized-begin-on-screen': {
		transitionDuration: token['md-sys-motion-duration-long2'],
		transitionTimingFunction: token['md-sys-motion-easing-emphasized'],
	},
	'emphasized-end-on-screen': {
		transitionDuration: token['md-sys-motion-duration-long2'],
		transitionTimingFunction: token['md-sys-motion-easing-emphasized'],
	},
	'emphasized-enter-screen': {
		transitionDuration: token['md-sys-motion-duration-medium4'],
		transitionTimingFunction:
			token['md-sys-motion-easing-emphasized-decelerate'],
	},
	'emphasized-exit-screen': {
		transitionDuration: token['md-sys-motion-duration-short4'],
		transitionTimingFunction:
			token['md-sys-motion-easing-emphasized-accelerate'],
	},

	'standard-begin-on-screen': {
		transitionDuration: token['md-sys-motion-duration-medium2'],
		transitionTimingFunction: token['md-sys-motion-easing-standard'],
	},
	'standard-end-on-screen': {
		transitionDuration: token['md-sys-motion-duration-medium2'],
		transitionTimingFunction: token['md-sys-motion-easing-standard'],
	},
	'standard-enter-screen': {
		transitionDuration: token['md-sys-motion-duration-medium1'],
		transitionTimingFunction:
			token['md-sys-motion-easing-standard-decelerate'],
	},
	'standard-exit-screen': {
		transitionDuration: token['md-sys-motion-duration-short4'],
		transitionTimingFunction:
			token['md-sys-motion-easing-standard-accelerate'],
	},
};

export default motion;
