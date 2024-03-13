import {
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    GET_LOGIN_PENDING,
    SET_TOKEN,
    LOGOUT
} from './types'

export const getLoginSuccess = (data) => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: data
    }
}

export const getLoginError = (error) => {
    return {
        type: GET_LOGIN_ERROR,
        payload: error
    }
}

export const getLoginPending = () => {
    return {
        type: GET_LOGIN_PENDING
    }
}

const TOKEN_KEY = 'token'
export const setToken = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token)
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY)
    return {
        type: LOGOUT,
        payload: {
            token: '',
            user: {
                email: '',
                role: ''
            }
        }
    }
}
