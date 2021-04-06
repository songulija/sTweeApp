//reducer is function that takes care off all dispatched actions related to userReducer`
//depending on action type/name returns new state. state is currentUser (empty object)
export const userReducer = (state = { currentUser: {} }, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,//return whatever was already in state, set currentUser to dispatched action data(payload)
                currentUser: action.payload
            }
        default:
            return state;
    }
}


export const profilePicture = (state = { profilePhoto: '' }, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PICTURE':
            return {
                ...state,//return whatever was already in state, set currentUser to dispatched action data(payload)
                profilePhoto: action.payload
            }
        default:
            return state;
    }
}