import { useState } from "react";

export default function BoardGame(){
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [board, setBoard] = useState([
    [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
    [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
    [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
    [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
    [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
    [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
  ])
  
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const updatedBoard = [...board];
    updatedBoard[rowIndex][colIndex][0] = (currentPlayer ? 'bg-green-700' : 'bg-red-800');
    setCurrentPlayer(!currentPlayer);
    setBoard(updatedBoard);
  }

  const checkGameStatus = () => {return}

  return (
    <div className="bg-grays-300 rounded mb-6 grid grid-cols-7 items-center">
  {board[0].map((_, colIndex) => (
    <div key={colIndex} className="grid grid-rows-7">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={`m-4 w-cell h-cell rounded-full cursor-pointer ${board[rowIndex][colIndex][0] === '' ? 'bg-grays-100' : board[rowIndex][colIndex][0]}`} onClick={() => handleCellClick(rowIndex, colIndex)}></div>
      ))}
    </div>
  ))}
</div>
  )
}