export enum Icon {
	Plus = 'plus',
	Face = 'face',
	// TODO : update by adapting from `material-symbols/index.d.ts` value
}
export type IconType = `${Icon}` | Icon;

export enum IconKind {
	Outline = 'outlined',
	Rounded = 'rounded',
	Sharp = 'sharp',
}
export type IconKindType = `${IconKind}` | IconKind;
