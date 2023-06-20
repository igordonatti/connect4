import { useState } from "react";

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
  
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    makeMove(colIndex);
  }

  const makeMove = (colIndex: number) => {
    const updatedBoard = [...board];

    // O colIndex varia de 1 Aa 6 e mostra em qual coluna estamos do tabuleiro
    // Encontrar o primeiro espaço vazio na coluna
    for(let i = board.length - 1; i >= 0; i--){
      if (board[i][colIndex] === ''){
        // Caso exista um local naquela coluna a qual ele pode colocar a peça altera:
        updatedBoard[i][colIndex] = (currentPlayer ? 'bg-green-700' : 'bg-red-800');
        setCurrentPlayer(!currentPlayer);
        checkGameStatus();
        break;
      }
      // É preciso colocar um sistema pra avisar de que a jogada foi concluida pelo player.
    }
    setBoard(updatedBoard);
  }

  const checkGameStatus = () => {
    const player = currentPlayer ? 'bg-green-700' : 'bg-red-800';

    // Horizontal checker 
    for(let j = 0; j < board.length; j++){
      for(let i = 3; i < 7; i++){
        if((board[j][i] === player) && (board[j][i-1] === player) && (board[j][i-2] === player) && (board[j][i-3] === player)){
          window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`)
        }
      }
    }

    // Vertical checker
    for(let i = 0; i < 7; i++){
      for(let j = 3; j < 6; j++){
        if((board[j][i] === player) && (board[j-1][i] === player) && (board[j-2][i] === player) && (board[j-3][i] === player)){
          window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`)
        }
      }
    } 

    // Diagonal checker
    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 3; j++){
        if((board[j][i] === player) && (board[j+1][i+1] === player) && (board[j+2][i+2] === player) && (board[j+3][i+3] === player) 
        || 
        (board[j+3][i] === player) && (board[j+2][i+1] === player) && (board[j+1][i+2] === player) && (board[j][i+3] === player))
        {
          window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`)
        }
      }
    }
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