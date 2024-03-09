import {
    GET_LOGIN_PENDING,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    SET_TOKEN,
    LOGOUT
  } from './types'
  
  const initialState = {
    isFetching: false,
    error: '',
    user: {
        email: '',
        role: ''
    },
    token: ''
  }
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_SUCCESS: 
            return {
            ...state,
            isFetching: false,
            list: state.list.map((item) => {
                if (item._id === action.payload._id) {
                return action.payload
                }
                return item
            })
            }
        case GET_LOGIN_ERROR: 
            return {
            ...state,
            isFetching: false,
            error: action.payload
            }
        case GET_LOGIN_PENDING: 
            return {
            ...state,
            isFetching: true,
            error: initialState.error
            }    
        case SET_TOKEN: 
            return {
            ...state,
            token: action.payload
            }
        case LOGOUT:
            return {
            ...state,
            token: action.payload.token,
            user: action.payload.user
            }
        default: return state
    }
  }
  
  export default loginReducer