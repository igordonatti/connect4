import { CheckGameStatus } from "./CheckGameStatus";

export const MakeMove = (board: string[][], 
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>, 
  colIndex: number, 
  currentPlayer: boolean, setCurrentPlayer: React.Dispatch<React.SetStateAction<boolean>>) => {
  const updatedBoard = [...board];
  
  for(let i = board.length - 1; i >= 0; i--){
    if (board[i][colIndex] === ''){
      // Caso exista um local naquela coluna a qual ele pode colocar a peça altera:
      updatedBoard[i][colIndex] = (currentPlayer ? 'bg-green-700' : 'bg-red-800');
      CheckGameStatus(board, currentPlayer);
      setCurrentPlayer(!currentPlayer)
      break;
    }
    // É preciso colocar um sistema pra avisar de que a jogada foi concluida pelo player.
  }
  setBoard(updatedBoard);
}
