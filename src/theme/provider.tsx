import React from 'react';
import { ThemeProvider as SThemeProvider } from 'styled-components';
import dark from './theme.dark';
import light from './theme.light';
import type { ColorTokens } from './types';
import typography, { type TypographyTokens } from './typography';

enum ThemeName {
	Light = 'light',
	Dark = 'dark',
}

const themeTokens: ThemeTokens = { typography, light, dark };
type ThemeTokens = {
	typography: TypographyTokens;
	light: ColorTokens;
	dark: ColorTokens;
};

const ThemeSwitcherContext = React.createContext<{
	theme: `${ThemeName}` | ThemeName;
	setTheme: SetTheme;
} | null>(null);
type SetTheme = (theme: `${ThemeName}` | ThemeName) => void;

function ThemeProvider({ children }: React.PropsWithChildren): JSX.Element {
	const [theme, setTheme] = React.useState<`${ThemeName}` | ThemeName>(
		'light',
	);

	return (
		<ThemeSwitcherContext.Provider
			value={React.useMemo(
				() => ({ theme, setTheme }),
				[theme, setTheme],
			)}>
			<SThemeProvider
				theme={{
					typography: themeTokens.typography,
					...themeTokens[theme],
				}}>
				{children}
			</SThemeProvider>
		</ThemeSwitcherContext.Provider>
	);
}

function useTheme() {
	return React.useContext(ThemeSwitcherContext)!;
}

export { ThemeName as Theme, ThemeProvider, useTheme };
