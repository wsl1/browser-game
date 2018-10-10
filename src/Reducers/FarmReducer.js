export default (
    state = {
        balance: 10000,
        animals: {
            cows: 0,
            chickens: 0,
        }
    }, action) => {
        const { price, quantity } = {...action.payload};
        const { balance } = {...state};
        const animals = {
            ...state.animals,                    
        };
        let updatedBalance;

        switch(action.type) {
            case 'BUY_COWS':
                if(state.balance - (quantity * price) < 0) return state;      
                animals.cows = animals.cows + quantity;
                updatedBalance = balance - (price * quantity);
                state = {
                    ...state,
                    animals,
                    updatedBalance
                };
                break;
            case 'BUY_CHICKENS':
                if(state.balance - (quantity * price) < 0) return state;
                animals.chickens = animals.chickens + quantity;
                updatedBalance = balance - (price * quantity);
                state = {
                    ...state,
                    animals,
                    updatedBalance
                };
                break;
            case 'SELL_COWS':
                if(state.animals.cows - quantity < 0) return state;
                animals.cows = animals.chickens - quantity;
                updatedBalance = balance + (price * quantity);
                state = {
                    ...state,
                    animals,
                    updatedBalance
                };
                break;
        }
        return state;
}