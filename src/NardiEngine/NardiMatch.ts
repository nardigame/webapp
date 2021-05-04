import { INITIAL_GAME_STATE } from './INITIAL_GAME_STATE';
import { GameState } from './types';

export const initMatch = (): GameState => ({
  ...INITIAL_GAME_STATE,
});
