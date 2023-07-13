import { useState } from "react";
import { MakeMove } from "./MakeMove";

export default function BoardGame(){
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [board, setBoard] = useState([
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
  ])
  
  const handleCellClick = (_: number, colIndex: number) => {
    MakeMove(board, setBoard, colIndex, currentPlayer, setCurrentPlayer, true);
  }

  return (
    <div className="bg-grays-300 rounded mb-6 grid grid-cols-7 items-center">
    {board[0].map((_, colIndex) => (
      <div key={colIndex} className="grid grid-rows-7">
        {board.map((_, rowIndex) => (
          <div key={rowIndex} className={`m-4 w-cell h-cell rounded-full cursor-pointer ${board[rowIndex][colIndex] === '' ? 'bg-grays-100' : board[rowIndex][colIndex]}`} onClick={() => handleCellClick(rowIndex, colIndex)}></div>
        ))}
    </div>
  ))}
</div>
  )
}