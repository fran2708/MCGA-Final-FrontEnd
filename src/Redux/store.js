import { createStore, applyMiddleware } from 'redux'
import productsReducer from './Products/reducer'
import thunk from 'redux-thunk'

const rootReducer = createStore(productsReducer, applyMiddleware(thunk))

const store = rootReducer

export default store