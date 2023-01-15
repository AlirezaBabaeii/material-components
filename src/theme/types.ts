export type BaseVariants = 'primary' | 'secondary' | 'tertiary' | 'error';
export type ExtraVariants =
  | 'background'
  | 'on-background'
  | 'surface'
  | 'on-surface'
  | 'surface-variant'
  | 'on-surface-variant'
  | `inverse-surface`
  | `inverse-on-surface`
  | 'inverse-primary'
  | 'surface-tint'
  | 'outline'
  | 'outline-variant'
  | 'scrim'
  | 'shadow';

type Keys =
  | `${BaseVariants}`
  | `on-${BaseVariants}`
  | `${BaseVariants}-container`
  | `on-${BaseVariants}-container`
  | ExtraVariants;

export type ColorTokens = Record<`md-sys-color-${Keys}`, string>;
export type { Keys as Variants };
