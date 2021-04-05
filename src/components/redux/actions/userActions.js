//action is just function that we dispatch. it should have type/name 
//have to provide user when 
export const setCurrentUser = (user) => {
    return {//it just returns object. adding type/name to action
        type: 'SET_CURRENT_USER',
        payload: user,//setting payload equal to user that was passed here
    }
}