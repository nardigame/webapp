import { TypeOfGame, GameState } from './types';
import { InitialStates } from './InitialStates';

export const DefaultType: TypeOfGame = 'long';

export const initGame = (type?: TypeOfGame): GameState => ({
  ...InitialStates[type ? type : DefaultType],
});
