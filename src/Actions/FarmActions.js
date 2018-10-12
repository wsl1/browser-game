import Prices from '../data/Prices.json';

export const buyCows = (quantity) => ({
    type: "BUY_COWS",
    payload: {
        price: Prices.cow.buyPrice,
        quantity
    }
});

export const buyChickens = (quantity) => ({
    type: "BUY_CHICKENS",
    payload: {
        price: Prices.chicken.buyPrice,
        quantity
    }
});

export const sellCows = (quantity) => ({
    type: "SELL_COWS",
    payload: {
        price: Prices.cow.sellPrice,
        quantity
    }
});

export const sellChickens = (quantity) => ({
    type: "SELL_CHICKENS",
    payload: {
        price: Prices.chicken.sellPrice,
        quantity
    }
});