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
    DELETE_PRODUCT_LOADING,
    CLEAR_ERROR
} from './types'

const INITIAL_STATE_VALUE = {
    products: [],
    idLoading: false,
    error: false,
    message: ''
}

const productsReducer = (state = INITIAL_STATE_VALUE, action) => {
    switch (action.type) {
        // ADD PRODUCT
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                products: [...state.products, action.payload],
                message: 'Product added successfully'
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: action.payload
            }
        case ADD_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
                message: 'Adding product...'
            }
        // GET PRODUCTS
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                error: false,
                message: 'Products loaded successfully'
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: action.payload
            }
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: false,
                message: 'Loading products...'
            }
        // UPDATE PRODUCT
        case UPDATE_PRODUCT_SUCCESS:{
            // find the index of the edited product in the products array
            const editedProductIndex = state.products.findIndex(
                (product) => product._id === action.payload._id
            )

            // create new array with the updated product data
            const updatedProducts = state.products.map((product, index) =>
                index === editedProductIndex ? action.payload : product
            )

            return {
                ...state,
                isLoading: false,
                error: false,
                products: updatedProducts,
                message: 'Updated product successfully'
            }
        }
        case UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: action.payload
            }
        case UPDATE_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
                error: false,
                message: 'Updating product...'
            }
        // DELETE PRODUCT
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                products: [...state.products.filter((product) => product._id !== action.payload)],
                message: 'Product deleted successfully'
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: action.payload
            }
        case DELETE_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
                message: 'Deleting product...'
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: false
            }
        default: return state
    }
}

export default productsReducer
