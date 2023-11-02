import React from 'react'
import useLocalStorage from '../useLocalStorage'


export default function History({state, setState, reset, updateHistory}){

	// console.log(current)
	const initialState={
			totalFilledBoxes:0,
			winnerExists:false,
			winner:'',
			currentPlayer:'X',
			nextPlayer:'O',
			filledBoard: false,
			playerBoxes:{X:new Array(), O: new Array()}
		}

	const {totalFilledBoxes: current}=state
	const [history, setHistory]= useLocalStorage('history', [[]])

	React.useEffect(()=>{
		updateHistory.current? updateHistoryList() : null
		reset.current? resetHistory(): null
	})

	function handleHistoryClick(historyId){		
		historyId==0 ? setState(initialState)
		: setState({
				...history[historyId], 
				playerBoxes:{
					X:[...history[historyId].playerBoxes.X],
					 O:[...history[historyId].playerBoxes.O]
				}	 
					})
		} ;

	function resetHistory(){
		reset.current=false
		setHistory([[]])
	}
	function updateHistoryList(){
		updateHistory.current=false
		setHistory([...history.slice(0, current), {...state}])
	}	
	return(
		<>
		<div className="history">
			<h1 className="text-center">History</h1>
			{
			history.map((item, index)=>
				<button 
					key={item+index}
					id={index}
					onClick={ ()=>handleHistoryClick(index) }
					disabled={current==index ? true:false} >
					{
						index==0? "Go to game Start" + (current==index? '(Current)':'') 
						: "Go to move #" +(index) + (current==index? '(Current)':'')
					} 
				</button> )
			}		
		</div>
		</>

		)
}

