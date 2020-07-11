import React from "react"

export const isDark = {
	true:{
		color: '#fafafa',
		background: '#232323'
	},
	false:{
		color: '#232323',
		background: '#fafafa'
	}
	
};

const ThemeContext = React.createContext(isDark.true);

export default ThemeContext;