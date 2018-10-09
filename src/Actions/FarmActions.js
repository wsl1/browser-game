export const buyCows = (quantity) => ({
    type: "BUY_COWS",
    payload: quantity * 1500
});

export const buyChickens = (quantity) => ({
    type: "BUY_CHICKENS",
    payload: quantity * 20
});

export const sellCows = (quantity) => ({
    type: "SELL_COWS",
    payload: quantity * 1500
});

export const sellChickens = (quantity) => ({
    type: "SELL_CHICKENS",
    payload: quantity * 20
});