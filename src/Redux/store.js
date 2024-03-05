import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import productsReducer from './Products/reducer'
import loginReducer from './Login/reducer'

const store = createStore(
    combineReducers({ products: productsReducer, login: loginReducer }),
    applyMiddleware(thunk)
)

export default store