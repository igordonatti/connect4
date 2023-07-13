import { CheckGameStatus } from "./CheckGameStatus";

// bg-green-700 -- Player Piece
// bg-red-800 -- IA Piece

type MinimaxProps = {
  board: string[][];
  depth: number;
  maximizingPlayer: boolean;
}

export const Minimax = ({board, depth, maximizingPlayer}: MinimaxProps) => {
  const validLocations = GetValidLocations(board);
  const isTerminal = IsTerminalNode(board);

  if (depth == 0 || isTerminal){
    if(isTerminal) {
      if(CheckGameStatus(board, false)) return [null, 1000000000000000]; 
      else if (CheckGameStatus(board, true)) return [null, -1000000000000000];
      else return [null, 0];
    } else return [null, scorePosition(board)];
  } 

  if (maximizingPlayer) {
    let value = -Infinity;
    const randomIndex = Math.floor(Math.random()*validLocations.length);
    let column = validLocations[randomIndex];

    for(let col = 0; col < validLocations.length; col++){
      const row = getNextOpenRow(board, validLocations[col]);
      const boardCopy = JSON.parse(JSON.stringify(board));
      if (row){
        boardCopy[row][col] = 'bg-red-800';
      }
      const newScore = Minimax({board: boardCopy, depth: depth-1, maximizingPlayer: false})[1];
      if(newScore){
        if(newScore > value){
          value = newScore;
          column = col;
        }
      }
    }

    console.log([column, value]);
    console.log(depth);
    return [column, value];
  }

  else {
    let value = Infinity;
    const randomIndex = Math.floor(Math.random()*validLocations.length);
    let column = validLocations[randomIndex];

    for(let col = 0; col < validLocations.length; col++){
      const row = getNextOpenRow(board, validLocations[col]);
      const boardCopy = JSON.parse(JSON.stringify(board));
      if (row){
        boardCopy[row][col] = 'bg-red-800';
      }
      const newScore = Minimax({board: boardCopy, depth: depth-1, maximizingPlayer: true})[1];
      if(newScore){
        if(newScore < value){
          value = newScore;
          column = col;
        }
      }
    }

    console.log([column, value]);
    console.log(depth);
    return [column, value];
  }
}

const GetValidLocations = (board: string[][]) => {
  const validLocations = [];
  
  for(let i = board.length - 1; i >= 0; i--){
    for(let column = board[i].length - 1; column >= 0; column--){
      if(board[i][column] == ''){
        validLocations.push(column);
      }
    }
  }

  return validLocations;
}

const IsTerminalNode = (board: string[][]): boolean => {
  return CheckGameStatus(board, true) || CheckGameStatus(board, false) || GetValidLocations(board).length == 0
}

const scorePosition = (board: string[][]) => {
  const ROW_COUNT = board.length;
  const COLUMN_COUNT = board[0].length;
  const WINDOW_LENGTH = 4;
  let score = 0;

  // Score center column
  const centerArray = board.map(row => row[COLUMN_COUNT / 2]);
  const centerCount = centerArray.filter(item => item === 'bg-red-800').length;
  score += centerCount * 3;

  // Score Horizontal
  for(let r = 0; r < ROW_COUNT; r++){
    const rowArray = board[r];
    for(let c = 0; c <= COLUMN_COUNT - WINDOW_LENGTH; c++){
      const window = rowArray.slice(c, c+ WINDOW_LENGTH);
      score += EvalueteWindow(window, 'bg-red-800');
    }
  }

  // Score Vertical
  for (let c = 0; c < COLUMN_COUNT; c++) {
    const colArray = board.map(row => row[c]);
    for (let r = 0; r <= ROW_COUNT - WINDOW_LENGTH; r++) {
      const window = colArray.slice(r, r + WINDOW_LENGTH);
      score += EvalueteWindow(window, 'bg-red-800');
    }
  }

   // Score positive sloped diagonal
   for (let r = 0; r <= ROW_COUNT - WINDOW_LENGTH; r++) {
    for (let c = 0; c <= COLUMN_COUNT - WINDOW_LENGTH; c++) {
      const window = [];
      for (let i = 0; i < WINDOW_LENGTH; i++) {
        window.push(board[r + i][c + i]);
      }
      score += EvalueteWindow(window, 'bg-red-800');
    }
  }

  // Score negative sloped diagonal
  for (let r = 0; r <= ROW_COUNT - WINDOW_LENGTH; r++) {
    for (let c = 0; c <= COLUMN_COUNT - WINDOW_LENGTH; c++) {
      const window = [];
      for (let i = 0; i < WINDOW_LENGTH; i++) {
        window.push(board[r + WINDOW_LENGTH - 1 - i][c + i]);
      }
      score += EvalueteWindow(window, 'bg-red-800');
    }
  }

  return score;
}

const EvalueteWindow = (window: Array<string>, piece: string) => {
  let score = 0;
  let oppPiece = 'bg-green-700';
  if(piece == 'bg-green-700') oppPiece = 'bg-red-800';

  if(window.filter(item => item === piece).length === 4) score += 100;

  else if (
    (window.filter(item => item === piece).length == 3) 
    && 
    (window.filter(item => item === '').length == 1)
  ) score += 5;

  else if(
    (window.filter(item => item === piece).length == 2)
    &&
    (window.filter(item => item === '').length == 2)
  ) score += 2;

  if(
    (window.filter(item => item === oppPiece).length == 3)
    &&
    (window.filter(item => item === '').length == 1)
  ) score -= 4;

  return score;
}

const getNextOpenRow = (board: string [][], col: number) => {
  for(let i = 5; i >= -1; i--){
    if(board[i][col] == ''){
      return i;
    }
  }
}