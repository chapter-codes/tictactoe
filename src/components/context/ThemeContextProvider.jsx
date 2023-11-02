import {createContext, useState, useContext} from 'react'

const ThemeContext=createContext();

function ThemeContextProvider({children}){
 	const [theme, setTheme]=useState('dark') 
 	
 	function toggleTheme(){
 		setTheme(prevTheme=>prevTheme=='dark'? 'light' : 'dark')
 	}	
	return(
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

function useTheme(){
	return useContext(ThemeContext)
}

export {ThemeContextProvider, useTheme} ;