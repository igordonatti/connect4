import { CheckGameStatus } from "./CheckGameStatus";

// bg-green-700 -- Player Piece
// bg-red-800 -- IA Piece

export const Minimax = (board: string[][], depth: number) => {
  const validLocations: Array<number> = GetValidLocations(board);
  const isTerminal: boolean = IsTerminalNode(board);
  if (depth == 0 || isTerminal){
    if(isTerminal) {
      if(CheckGameStatus(board, false)) return
    }
  }

  return (
    <div>Minimax</div>
  )
}

const GetValidLocations = (board: string[][]): Array<number> => {
  const validLocations: Array<number> = [];
  
  for(let i = board.length - 1; i >= 0; i--){
    for(let column = board[i].length - 1; column >= 0; column--){
      if(board[i][column] == ''){
        if (!validLocations.includes(column)) {
          validLocations.push(column);
        }
      }
    }
  }

  return validLocations;
}

const IsTerminalNode = (board: string[][]): boolean => {
  return CheckGameStatus(board, true) || CheckGameStatus(board, false) || GetValidLocations(board).length == 0
}

const scorePosition = (board: string[][],) => {
  let score = 0;

  // Score center column
  for(let i = 0; i < board.length; i++){
    score += board[i][board.length/2] == 'bg-red-800' ? 1 : 0;
    score = score * 3;
  }

  // Score Horizontal
}

const EvalueteWindow = (window: Array<string>, piece: string) => {
  const score = 0;
  let oppPiece = 'bg-green-700';
  if(piece == 'bg-green-700 ') oppPiece = 'bg-red-800'
}