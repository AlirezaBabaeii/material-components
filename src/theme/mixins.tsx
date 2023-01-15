import typography, { type Variants as TypographyVariants } from './typography';

export function withTypography(variant: TypographyVariants): string {
  const {
    fontFamily,
    fontStyle,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
  } = typography[variant];

  return `
    font-family: ${fontFamily};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
  `;
}

