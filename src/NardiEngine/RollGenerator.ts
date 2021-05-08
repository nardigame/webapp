export const rollDice = (): number => 1 + Math.floor(Math.random() * 6);

export const rollTupleDice = (): [number, number] => [rollDice(), rollDice()];
