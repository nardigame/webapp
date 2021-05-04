export type Side = 'white' | 'black';

export type Field = {
  quantity: number;
  side: Side;
} | null;

export type Board = {
  [key: number]: Field;
};

export type Roll = [number, number];

export type Movement = [number, number];

export type Move = {
  side: Side;
  roll: Roll;
  movements: Movement[];
};

export type GameState = {
  history: Move[];
  board: Board;
  turn: Side;
};
