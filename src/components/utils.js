export const calcTotal = items => items.reduce((acc, game) => acc += game.price, 0)
