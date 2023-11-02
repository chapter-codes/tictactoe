import React from 'react'

export default function useLocalStorageState(key, initialState='', {serialize=JSON.stringify, deSerialize=JSON.parse}={}){
	//return local storage state or initialState if undefined
	function getLocalStorageState(){
		const localStorageState=window.localStorage.getItem(key)
		return deSerialize(localStorageState) || initialState 
	}

	const [state, setState]=React.useState(getLocalStorageState)
	const prevKeyRef=React.useRef(key)

	React.useEffect(()=>{
		const prevKey=prevKeyRef.current
		if(prevKey!=key){
			window.localStorage.removeItem(prevKey)
			prevKeyRef.current=key
		}
		window.localStorage.setItem(key, serialize(state))

	},[key ,state])

		return [state, setState]
	}

