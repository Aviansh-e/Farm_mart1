import * as actionTypes from '../constant/ProductConstant.js';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return { products: action.payload };
        case actionTypes.GET_PRODUCT_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const getProductDetailsReducer = (state = { loading: true, product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return { loading: true, product: {} };
        default:
            return state;
    }
};
