const initialState = {
    playerPosition: 1,
    fieldsNumber: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_POSITION':
            return {
                ...state,
                playerPosition: state.playerPosition + 1
            }

        case 'DECREMENT_POSITION':
            return {
                playerPosition: state.playerPosition - 1
            }
        case 'ADD_POSITION':
            return {
                ...state,
                playerPosition: state.playerPosition + action.value
            }
        case 'LOWER_POSITION':
            return {
                ...state,
                playerPosition: state.playerPosition - action.value
            }
        case 'SET_POSITION':
            return {
                ...state,
                playerPosition: action.value
            }

    }
    return state;
};

export default reducer;