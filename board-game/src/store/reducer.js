const initialState = {
    playerPosition: 1,
    fieldsNumber: 20,
    rollsNumber: 0,
    rollsAverage: 0,
    allRolls: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSITION':
            return {
                ...state,
                playerPosition: action.value
            }
        case 'ADD_ROLL':
            return {
                ...state,
                rollsNumber: state.rollsNumber + 1,
                allRolls: state.allRolls + action.value,
                rollsAverage: (state.allRolls + action.value) / (state.rollsNumber + 1)
            }
        case 'RESTART':
            return {
                ...state,
                rollsNumber: 0,
                allRolls: 0,
                rollsAverage: 0,
                playerPosition: 1
            }
    }
    return state;
};

export default reducer;