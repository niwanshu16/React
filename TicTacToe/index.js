import react from 'react';
import reactDom from 'react-dom/client';
import { useState } from 'react';

//const heading = react.createElement("h1",{id:"heading"},"Namaste React");
// Parcel is converting this JSX to proper JS code before reaching to JS ENgine, by using Babel
// babel is responsible for transpiling this JSX to ReactElement(JS Object) 
// and then react understand this ReactElement which then converts to HTML Element.
function Button() {
    const [value,setValue] = useState(0);

    function handleClick() {
        //console.log(value);
        setValue(value+1);
    }
    return <button onClick={handleClick}>Clicked { value } times</button>
};

function Square({value, onSquareClick}) {
    return <button className="square" onClick = {onSquareClick}>{value}</button>
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}


function Board({square, xIsNext, onPlay}) {
    
    const winner = calculateWinner(square);
    
        
    function handleClick(i) {
        
        const nextSquares =  square.slice();
        if(nextSquares[i] || winner) return;
        nextSquares[i] = xIsNext?'X':'O';
        onPlay(nextSquares);
    }

    
    let status = "";
    if(winner)
        status = "Winner: " + winner;
    else    
        status = "Next Turn: " + (xIsNext?'X':'O');

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
            </div> 
            <div className="board-row">
                <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
            </div> 
            <div className="board-row">
                <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={square[8]} onSquareClick={() => handleClick(8)}/>
            </div> 
        </>
    );
}

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquare = history[currentMove];
    const xIsNext = currentMove%2 === 0;
    
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0,currentMove+1), nextSquares];
        
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
    }

    function jumpTo(move) {
        setCurrentMove(move);
    }

    const moves = history.map((squares,move) => {
        let description;
        if(move > 0)
            description = 'Go to move # ' + move;
        else    
            description = 'Go to game start';

        return (
            <>
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            </>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board square={currentSquare} xIsNext={xIsNext} onPlay = {handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

const JsxHeading = () => (
    <>  
        <div id="container">
            <Game />
        </div>
    </>
);

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<JsxHeading />);