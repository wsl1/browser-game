export default (state = {
    balance: 10000,
    cows: 0,
    chickens: 0,
}, 
action) => {
    if(state.balance - action.payload < 0) return state;
    switch(action.type) {
        case 'BUY_COW':
            state = {
                ...state,
                cows: ++state.cows,
                balance: state.balance - action.payload
            }
            break;
        case 'BUY_CHICKEN':
            state = {
                ...state,
                chickens: ++state.chickens,
                balance: state.balance - action.payload
            }
    }
    return state;
}