const reducer = (state = 10, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;
        
        case 'RANDOM':
            return state + action.payload;
        
        default:
            return state;
    }
};

export default reducer;