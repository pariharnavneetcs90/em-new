import { api } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig"

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST })
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log("product data", data)
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
};

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const { productId } = reqData;
    console.log("product id", productId)


    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
        console.log("data", data)

        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
};
export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data } = await api.post(
            `${API_BASE_URL}/api/admin/products`,
            product
        );
        console.log("created products", data)
        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data,
        });

        console.log("created product ", data);
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAILURE, payload: error.message,
        });
    }
};

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        console.log("inside function", `${API_BASE_URL}/api/admin/products/${productId}`)
        const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);
        console.log("delete product", data)
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: productId,
        });

        console.log("created product ", data);
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAILURE, payload: error.message,
        });
    }
};
