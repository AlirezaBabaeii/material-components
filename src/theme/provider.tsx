import React from 'react';
import { ThemeProvider as SThemeProvider } from 'styled-components';
import { dark } from './theme.dark';
import { light } from './theme.light';
import { typography } from './typography';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

type ThemeTokens = {
  sys: Record<`${Theme}`, object>;
  typography: Record<string, any>;
};

const ThemeTokens: Readonly<ThemeTokens> = {
  sys: { light, dark },
  typography: typography,
};

export function ThemeProvider(props: React.PropsWithChildren) {
  const [theme, setTheme] = React.useState<`${Theme}` | Theme>('light');

  return (
    <SThemeProvider
      theme={{ typescale: ThemeTokens.typography, sys: ThemeTokens.sys[theme] }}
    >
      {props.children}
    </SThemeProvider>
  );
}
