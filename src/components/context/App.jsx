import {useState, useContext} from 'react'
import {	useTheme } from './ThemeContextProvider'

 export default function ConsumerContext(){
	const {theme, toggleTheme}= useTheme()
	const bgColor= theme=='dark'? 'black' : 'white'
	const txtColor= theme=='light'? 'black' : 'white' 

	return(
		<div className={`bg-${bgColor}-500 w-xl`}  style={{backgroundColor:bgColor, color: txtColor}} >
			<p className={`text-${txtColor} text-center`}>WE ARE IN THE {theme} mode</p>
			<button 
				onClick={toggleTheme} 
				style={{
					border:`2px solid ${txtColor}`,
					padding :'.5rem 1rem',
					margin:'.5rem'
				}}>
				change mode
			</button>
		</div>
		)
}

