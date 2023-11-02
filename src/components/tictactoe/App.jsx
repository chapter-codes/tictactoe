import React from 'react'
import Board from './Board'
import History from './History'

import useLocalStorage from '../useLocalStorage.js'


export default function Tictactoe(){
	const initialState={
			totalFilledBoxes:0,
			winnerExists:false,
			winner:'',
			currentPlayer:'X',
			nextPlayer:'O',
			filledBoard: false,
			playerBoxes:{X:new Array(), O: new Array()}
		}
	const reset =React.useRef(false)
	const updateHistory =React.useRef(false)

	const [state, setState]= useLocalStorage('state', initialState)

	const {winnerExists, winner, nextPlayer, currentPlayer, playerBoxes, filledBoard, totalFilledBoxes }=state 

	React.useEffect(()=>{
		totalFilledBoxes >=5? calculateWinner(playerBoxes[nextPlayer], nextPlayer): null
		totalFilledBoxes==9 ? setState({...state, filledBoard:true}): null
		
	},[ totalFilledBoxes ])



function handleBoxClick(event){
	const clickedBox= event.target
	const boxNum=clickedBox.attributes['data-key'].value


	if(clickedBox.textContent==false && !winnerExists){	
		const newCurrentPlayer= currentPlayer=='O'? 'X': 'O'	
		const newNextPlayer=currentPlayer
	
		 const newState={
		  		...state, 
		  		totalFilledBoxes:totalFilledBoxes+1,
				currentPlayer: newCurrentPlayer,
				nextPlayer: newNextPlayer,
				playerBoxes:{
					...playerBoxes,
					[currentPlayer]: [...playerBoxes[currentPlayer], boxNum]	
				}
			}
		updateHistory.current=true;
		setState({...newState})
	}
}


	function calculateWinner(playerBox, player){
		const stringedBoxNumbers=playerBox.sort().join('')
		const winPoints=[
			[1,2,3],
			[1,5,9],
			[1, 4,7],
			[2,5,8],
			[3,5,7],
			[3,6,9],
			[4,5,6],
			[7,8,9]
		]
		const winDetected=winPoints.some(winPoint=>{
			const pointsExistsInPlayerBox=winPoint.every(num=>stringedBoxNumbers.includes(num))
			return pointsExistsInPlayerBox;
		})
		
		winDetected? setState({...state, winnerExists:winDetected, winner:player}): null
	}
	
	function setPlayer(id){
	}
	function restartGame(){
		reset.current=true;
		setState({...initialState})
	}



	return (
		<>
		<h1 className='name'>Tictactoe App</h1>
	
	<div className="container">
		<div className="tictactoe">
			
			{(filledBoard && !winnerExists) && <p>Game over : <strong>A TIE</strong> </p>}
			{winnerExists && <p>we have a winner : <strong>player {winner.toUpperCase()} wins! </strong> </p>}
			{!winnerExists && <p>Current player: <strong>{currentPlayer.toUpperCase()}</strong> </p>}
			<p>Total Filled Boxes: <strong>{totalFilledBoxes}</strong></p>
			
			<div className='Tictactoe'>
				<Board handleBoxClick={handleBoxClick} playerBoxes={playerBoxes}/>
			</div>
			<button style={{border:'1px solid white', borderRadius:"10px", backgroundColor:"orange", color:'white'}} onClick={restartGame}>

					Restart 
			</button>
		</div>
		<History updateHistory={updateHistory} state={state} setState={setState} reset={reset} />
	</div>	
	</>
	)
}

// disabled={winnerExists|| filledBoard? false : true } 