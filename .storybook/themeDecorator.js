import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../src/theme';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme['md-sys-color-surface']}
}
`;

export default function ThemeDecorator(storyFunction) {
	return (
		<ThemeProvider>
			<GlobalStyle />
			{storyFunction()}
		</ThemeProvider>
	);
}
