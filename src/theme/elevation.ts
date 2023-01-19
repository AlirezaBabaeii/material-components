import { css, type FlattenSimpleInterpolation } from 'styled-components';
import token from './tokens';

export enum Elevation {
	Level0 = 'level0',
	Level1 = 'level1',
	Level2 = 'level2',
	Level3 = 'level3',
	Level4 = 'level4',
	Level5 = 'level5',
}
export type ElevationType = `${Elevation}` | Elevation;

export const elevation: Record<ElevationType, string> = {
	[Elevation.Level0]: token['md-sys-elevation-level0'],
	[Elevation.Level1]: token['md-sys-elevation-level1'],
	[Elevation.Level2]: token['md-sys-elevation-level2'],
	[Elevation.Level3]: token['md-sys-elevation-level3'],
	[Elevation.Level4]: token['md-sys-elevation-level4'],
	[Elevation.Level5]: token['md-sys-elevation-level5'],
};

export function withElevation(
	level: ElevationType,
): FlattenSimpleInterpolation {
	return css`
		z-index: ${elevation[level]};
	`;
}
