export const INITIAL_GAME_STATE: GameState = {
  history: [
    ...Array(11).fill(null),
    { quantity: 15, side: 'black' },
    ...Array(11).fill(null),
    { quantity: 15, side: 'white' },
  ],
  board: [],
  turn: 'white',
};
