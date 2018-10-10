export const buyCows = (quantity) => ({
    type: "BUY_COWS",
    payload: {
        price: 1500,
        quantity
    }
});

export const buyChickens = (quantity) => ({
    type: "BUY_CHICKENS",
    payload: {
        price: 20,
        quantity
    }
});

export const sellCows = (quantity) => ({
    type: "SELL_COWS",
    payload: {
        price: 1500,
        quantity
    }
});

export const sellChickens = (quantity) => ({
    type: "SELL_CHICKENS",
    payload: {
        price: 20,
        quantity
    }
});