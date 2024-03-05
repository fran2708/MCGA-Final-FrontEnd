import {
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_LOADING,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_LOADING,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_LOADING
} from './types'

// ADD PRODUCT
export const addProductSuccess = (data) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: data
    }
}

export const addProductError = (error) => {
    return {
        type: ADD_PRODUCT_ERROR,
        payload: error
    }
}

export const addProductLoading = () => {
    return {
        type: ADD_PRODUCT_LOADING
    }
}

// GET PRODUCTS
export const getProductsSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsError = (error) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: error
    }
}

export const getProductsLoading = () => {
    return {
        type: GET_PRODUCTS_LOADING
    }
}

// GET PRODUCT BY ID
export const getProductByIdSuccess = (data) => {
    return {
        type: GET_PRODUCT_BY_ID_SUCCESS,
        payload: data
    }
}

export const getProductByIdError = (error) => {
    return {
        type: GET_PRODUCT_BY_ID_ERROR,
        payload: error
    }
}

export const getProductByIdLoading = () => {
    return {
        type: GET_PRODUCT_BY_ID_LOADING
    }
}

// UPDATE PRODUCT
export const updateProductSuccess = (data) => {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data
    }
}

export const updateProductError = (error) => {
    return {
        type: UPDATE_PRODUCT_ERROR,
        payload: error
    }
}

export const updateProductLoading = () => {
    return {
        type: UPDATE_PRODUCT_LOADING
    }
}

// DELETE PRODUCT
export const deleteProductSuccess = (data) => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: data
    }
}

export const deleteProductError = (error) => {
    return {
        type: DELETE_PRODUCT_ERROR,
        payload: error
    }
}

export const deleteProductLoading = () => {
    return {
        type: DELETE_PRODUCT_LOADING
    }
}