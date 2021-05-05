import { INITIAL_GAME_STATE } from './constants/INITIAL_GAME_STATE';
import type { GameState } from './types';

export const initMatch = (): GameState => ({
  ...INITIAL_GAME_STATE,
});
