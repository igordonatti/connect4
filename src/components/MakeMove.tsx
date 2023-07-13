import { CheckGameStatus } from "./CheckGameStatus";
import { Minimax } from "./Minimax";

export const MakeMove = (board: string[][], 
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>, 
  colIndex: number, 
  currentPlayer: boolean, setCurrentPlayer: React.Dispatch<React.SetStateAction<boolean>>) => {
  const updatedBoard = [...board];
  
  if(currentPlayer){
    for(let i = board.length - 1; i >= 0; i--){
      if (board[i][colIndex] === ''){
        // Caso exista um local naquela coluna a qual ele pode colocar a peça altera:
        updatedBoard[i][colIndex] = (currentPlayer ? 'bg-green-700' : 'bg-red-800');
        if(CheckGameStatus(board, currentPlayer)){
          window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
        }
        setCurrentPlayer(!currentPlayer);
        break;
      }
      // É preciso colocar um sistema pra avisar de que a jogada foi concluida pelo player.
    }
  }

  else {
    const miniMax = Minimax({board, depth: 2, maximizingPlayer: true});

    console.log(miniMax);

    if(miniMax[0]){
      for(let i = board.length - 1; i >= 0; i--){
        if (board[i][miniMax[0]] === ''){
          // Caso exista um local naquela coluna a qual ele pode colocar a peça altera:
          updatedBoard[i][colIndex] = (currentPlayer ? 'bg-green-700' : 'bg-red-800');
          if(CheckGameStatus(board, currentPlayer)){
            window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
          }
          setCurrentPlayer(!currentPlayer);
          break;
        }
        // É preciso colocar um sistema pra avisar de que a jogada foi concluida pelo player.
      }
    }
  }
  
  setBoard(updatedBoard);
}
