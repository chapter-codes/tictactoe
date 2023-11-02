import React from 'react'


function Board({handleBoxClick, playerBoxes}){
	const squares=getSquares()
	console.log('squares', squares, playerBoxes)


function getSquares(){
	const squares=Array(9).fill('')
	let exes=[...playerBoxes.X]
	let zeros=[...playerBoxes.O]
	// console.log(exes, zeros)

	exes.forEach(key=>squares[key-1]='X')
	zeros=zeros.forEach(key=>squares[key-1]='O')

	return squares
}
	
return (<>

	<div className="board">
		<div className="row">
			{
				squares.slice(0,3).map((square,index) => <div className="item" onClick={handleBoxClick} data-key={index+1} key={index+1}>{square}</div> 
				)
			}

		</div>	
		<div className="row">
			{
				squares.slice(3,6).map((square,index) => <div className="item" onClick={handleBoxClick} data-key={index+4} key={index+4}>{square}</div>
				)
			}

		</div>	
		<div className="row">
			{
				squares.slice(6).map((square,index) => <div className="item" onClick={handleBoxClick} data-key={index+7} key={index+7}>{square}</div>
				)
			}
		</div>	
	</div>		

	</>)
	}


		{/*<div className="board">
				<div className="row">
					<div className="item" onClick={handleBoxClick} data-key='1'></div>
					<div className="item" onClick={handleBoxClick} data-key='2'></div>
					<div className="item" onClick={handleBoxClick} data-key='3'></div>
				</div>
				<div className="row">
					<div className="item" onClick={handleBoxClick} data-key='4'></div>
					<div className="item" onClick={handleBoxClick} data-key='5'></div>
					<div className="item" onClick={handleBoxClick} data-key='6'></div>
				</div>
				<div className="row">
					<div className="item" onClick={handleBoxClick} data-key='7'></div>
					<div className="item" onClick={handleBoxClick} data-key='8'></div>
					<div className="item" onClick={handleBoxClick} data-key='9'></div>
				</div>
			</div>*/}

	

	export default Board