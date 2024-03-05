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
    deleteProductLoading
} from './actions'

// GET PRODUCTS LIST
export const getProducts = () => {
    return (dispatch) => {
        dispatch(getProductsLoading())
        return fetch(`${process.env.VITE_REACT_API_URL}/products`, {
            method: 'GET'
        })
        .then((response) => {
            if (response.status !== 200) {
                return response.json().then(({ message }) => {
                    throw new Error(message)
                })
            }
            return response.json()
        })
        .then((response) => {
            dispatch(getProductsSuccess(response.data))
        })
        .catch((error) => {
            dispatch(getProductsError(error.toString()))
        })
    }
}

// GET PRODUCT BY ID
export const getProductById = (id) => {
    return (dispatch) => {
        dispatch(getProductByIdLoading())
        return fetch(`${process.env.VITE_REACT_API_URL}/products?_id=${id}`)
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
    return (dispatch, getState) => {
        dispatch(addProductLoading())
        const token = getState().login.token
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(values)
        }
        return fetch(`${process.env.VITE_REACT_API_URL}/products`, options)
        .then((response) => {
            if (response.status !== 201) {
                return response.json().then(({ message }) => {
                    throw new Error(message)
                })
            }
            return response.json()
        })
        .then((response) => {
            dispatch(addProductSuccess(response.data))
            return response.data
        })
        .catch((error) => {
            dispatch(addProductError(error.toString()))
        })
    }
}

// UPDATE PRODUCT
export const updateProduct = (id, values) => {
    return (dispatch, getState) => {
        dispatch(updateProductLoading())
        const token = getState().login.token
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(values)
        }
        return fetch(`${process.env.VITE_REACT_API_URL}/products/${id}`, options)
        .then((response) => {
            if (response.status !== 200) {
                return response.json().then(({ message }) => {
                    throw new Error(message)
                })
            }
            return response.json()
        })
        .then((response) => {
            dispatch(updateProductSuccess(response.data))
            return response.data
        })
        .catch((error) => {
            dispatch(updateProductError(error.toString()))
        })
    }
}

// DELETE PRODUCT
export const deleteProduct = (id) => {
    return (dispatch, getState) => {
        dispatch(deleteProductLoading())
        const token = getState().login.token
        return fetch(`${process.env.VITE_REACT_API_URL}/products/${id}`, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            } 
        })
        .then((response) => {
            if (response.status !== 204) {
                return response.json().then(({ message }) => {
                    throw new Error(message)
                })
            }
        })
        .then((response) => {
            dispatch(deleteProductSuccess(response.data))
            return response.data
        })
        .catch((error) => {
            dispatch(deleteProductError(error.toString()))
        })
    }
}