import axios from "axios";
import * as actionTypes from "../constant/ProductConstant.js";

const url = 'https://farm-mart1-2.onrender.com';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`);
        // console.log(data);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
    } catch (err) {
        console.log(err);
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, error: err.message });
    }
};
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${url}/product`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (err) {
        console.log(err);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: err.message });
    }

}
