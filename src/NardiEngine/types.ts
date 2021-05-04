export type Side = 'white' | 'black';

export type Field = {
  quantity: number;
  side: Side;
} | null;

export type Board = Field[];

export type Roll = [number, number];

export type Movement = {
  from: number;
  to: number;
};

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
