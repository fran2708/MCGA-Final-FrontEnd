import {
    getProductsSuccess,
    getProductsError,
    getProductsLoading,
    addProductSuccess,
    addProductError,
    addProductLoading,
    updateProductSuccess,
    updateProductError,
    updateProductLoading,
    getProductByIdSuccess,
    getProductByIdError,
    getProductByIdLoading,
    deleteProductSuccess,
    deleteProductError,
    deleteProductLoading,
    clearErrorAction
} from './actions'

// GET PRODUCTS LIST
export const getProducts = () => {
    return async (dispatch, getState) => {
        dispatch(getProductsLoading())
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/products`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors'
            })

            const json = await response.json()
            response.status !== 200
                ? dispatch(getProductsError(json.toString()))
                : dispatch(getProductsSuccess(json.data))
        } catch (error) {
            dispatch(getProductsError(error.toString()))
        }
    }
}

// GET PRODUCT BY ID
export const getProductById = (id) => {
    return (dispatch) => {
        dispatch(getProductByIdLoading())
        return fetch(`${import.meta.env.VITE_REACT_API_URL}/products?_id=${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    return response.json().then(({ message }) => {
                        throw new Error(message)
                    })
                }
                return response.json()
            })
            .then((response) => {
                dispatch(getProductByIdSuccess(response.data[0]))
                return response.data[0]
            })
            .catch((error) => {
                dispatch(getProductByIdError(error.toString()))
            })
    }
}

// ADD PRODUCT
export const addProduct = (values) => {
    return async (dispatch, getState) => {
        dispatch(addProductLoading())
        const token = getState().login.token
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                authorization: `Bearer ${token}`
            },
            mode: 'cors',
            body: JSON.stringify(values)
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/products`, options)

            const json = await response.json()

            response.status !== 201
                ? dispatch(addProductError(json.toString()))
                : dispatch(addProductSuccess(json.data))
        } catch (error) {
            dispatch(addProductError(error.toString()))
        }
    }
}

// UPDATE PRODUCT
export const updateProduct = (id, values) => {
    return async (dispatch, getState) => {
        dispatch(updateProductLoading())
        const token = getState().login.token
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                authorization: `Bearer ${token}`
            },
            mode: 'cors',
            body: JSON.stringify(values)
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/products/${id}`, options)

            const json = await response.json()

            response.status !== 200
                ? dispatch(updateProductError(json.toString()))
                : dispatch(updateProductSuccess(json.data))
        } catch (error) {
            dispatch(updateProductError(error.toString()))
        }
    }
}

// DELETE PRODUCT
export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteProductLoading())
        const token = getState().login.token
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                authorization: `Bearer ${token}`
            },
            mode: 'cors'
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/products/${id}`, options)

            const json = await response.json()

            response.status !== 204 && response.status !== 200
                ? dispatch(deleteProductError(json.toString()))
                : dispatch(deleteProductSuccess(json.data))
        } catch (error) {
            dispatch(deleteProductError(error.toString()))
        }
    }
}

export const clearError = () => {
    return (dispatch) => {
        dispatch(clearErrorAction())
    }
}
