export const CheckGameStatus = (board: string[][], currentPlayer: boolean):boolean => {
  const player = currentPlayer ? 'bg-green-700' : 'bg-red-800';

  // Horizontal checker 
  for(let j = 0; j < board.length; j++){
    for(let i = 3; i < 7; i++){
      if((board[j][i] === player) && (board[j][i-1] === player) && (board[j][i-2] === player) && (board[j][i-3] === player)){
        window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
        return true;
      }
    }
  }

  // Vertical checker
  for(let i = 0; i < 7; i++){
    for(let j = 3; j < 6; j++){
      if((board[j][i] === player) && (board[j-1][i] === player) && (board[j-2][i] === player) && (board[j-3][i] === player)){
        window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
        return true;
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
        window.alert(`O jogador ${currentPlayer ? 'verde' : 'vermelho'} foi o vencedor`);
        return true;
      }
    }
  }

  return false;
}
