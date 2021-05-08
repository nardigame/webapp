import { rollDice, rollTupleDice } from '../RollGenerator';

describe('rollDice', () => {
  test('generates number from 1 to 6', () => {
    expect([1, 2, 3, 4, 5, 6]).toContain(rollDice());
  });
});

describe('rollTupleDice', () => {
  test('generates tuple with numbers from 1 to 6', () => {
    rollTupleDice().forEach((dice) => {
      expect([1, 2, 3, 4, 5, 6]).toContain(dice);
    });
  });
});
