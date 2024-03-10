import {
    getLoginSuccess,
    getLoginError,
    getLoginPending,
    setToken,
    logout
} from './actions'

export const login = (creds) => {
    return async (dispatch) => {
        dispatch(getLoginPending())
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
            body: JSON.stringify(creds)
        }
        try {
            const response = await fetch(`${process.env.VITE_REACT_API_URL}/login`, options)

            const json = response.json()

            if (response.status !== 200) {
                dispatch(getLoginError(json.toString()))
            } else {
                dispatch(getLoginSuccess(json.data))
                dispatch(setToken(json.data.token))
            }
        } catch (error) {
            dispatch(getLoginError(error.toString()))
        }
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(logout())
    }
}
