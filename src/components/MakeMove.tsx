import { CheckGameStatus } from "./CheckGameStatus";
import { Minimax } from "./Minimax";

export const MakeMove = (
  board: string[][], 
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>, 
  colIndex: number, 
  currentPlayer: boolean, 
  setCurrentPlayer: React.Dispatch<React.SetStateAction<boolean>>,
  playerIA: boolean
  ) => {
  const updatedBoard = [...board];
  
  if(currentPlayer){
    for(let i = board.length - 1; i >= 0; i--){
      if (board[i][colIndex] === ''){
        // Caso exista um local naquela coluna a qual ele pode colocar a peça altera:
        updatedBoard[i][colIndex] = (currentPlayer ? 'bg-green-700' : 'bg-red-800');
        setBoard(updatedBoard);
        if(CheckGameStatus(board, currentPlayer)){
          window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
        }
        break;
      }
      // É preciso colocar um sistema pra avisar de que a jogada foi concluida pelo player.
    }
  }
  
  if(playerIA) {
    const [col] = Minimax({board, depth: 3, alpha: -Infinity, beta: Infinity, maximizingPlayer: true});

    if(col != (null || undefined)){
      for(let i = board.length - 1; i >= 0; i--){
        if (board[i][col] === ''){
          // Caso exista um local naquela coluna a qual ele pode colocar a peça altera:
          updatedBoard[i][col] = (!currentPlayer ? 'bg-green-700' : 'bg-red-800');
          setBoard(updatedBoard);
          if(CheckGameStatus(board, !currentPlayer)){
            window.alert(`O jogador ${!currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
          }
          break;
        }
        // É preciso colocar um sistema pra avisar de que a jogada foi concluida pelo player.
      }
    }
  }
  else {
    setCurrentPlayer(!currentPlayer);
  }
  
}