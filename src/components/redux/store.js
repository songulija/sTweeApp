import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducer.js'
import logger from 'redux-logger'


//combine all reducers to one. adding reducers one by one.
//and we can change games
const allReducers = combineReducers({
    user: userReducer
})

//middleware that store is expecting will be . thunk is to 
const middlewares = [logger, thunk]

// Create a Redux store holding the state of your app. its global state
//that holds smaller states in it
let store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)))
//and we can add middleware so when action is dispatched catch them and do smth..
//we applyMidleware and add middleware array

export default store;