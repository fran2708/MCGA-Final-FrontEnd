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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        }
        return await fetch(`${process.env.VITE_REACT_API_URL}/auth/login`, options)
            .then(async (response) => {
                if (response.status !== 200) {
                    return response.json()
                        .then(( {message }) => {
                            throw new Error(message)
                        })
                }
                return response.json()
            })
            .then((response) => {
                dispatch(getLoginSuccess(response.data))
                dispatch(setToken(response.data.token))
                return response.data
            })
            .catch((error) => {
                dispatch(getLoginError(error.toString()))
                throw error
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(logout())
    }
}