const initialState = {
    playerPosition: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_POSITION':
            return {                
                playerPosition: state.playerPosition+1
            }

        case 'DECREMENT_POSITION':
            return {
                playerPosition: state.playerPosition-1
            }

    }
    return state;
};

export default reducer;