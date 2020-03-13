import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

const App: React.FC = () => {
	const [theme, setTheme] = useState(light);

	const toggleTheme = () => {
		setTheme(theme.title_theme === 'light' ? dark : light);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<GlobalStyle />
				<Header toggleTheme={toggleTheme} />
				<Routes />
			</div>
		</ThemeProvider>
	)
}

export default App
