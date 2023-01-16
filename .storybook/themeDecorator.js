import { createGlobalStyle } from 'styled-components';
import { ThemeProvider, useTheme } from '../src/theme';
import React from 'react';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme['md-sys-color-surface']}
}
`;

export default function ThemeDecorator(storyFunction, context) {
	return (
		<ThemeProvider>
			<ThemeRenderer
				storyFunction={storyFunction}
				theme={context.globals.theme}
			/>
		</ThemeProvider>
	);
}

function ThemeRenderer(props) {
	const { setTheme } = useTheme();

	React.useEffect(() => {
		setTheme(props.theme);
	}, [props.theme]);

	return (
		<>
			<GlobalStyle />
			{props.storyFunction()}
		</>
	);
}
