// import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

// const initialState = {
//     products: { content: [] },
//     product: null,
//     loading: false,
//     error: null
// }
// export const customerProductReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case FIND_PRODUCTS_REQUEST:
//         case FIND_PRODUCT_BY_ID_REQUEST:
//             return { ...state, loading: true, error: null }

//         case FIND_PRODUCTS_SUCCESS:
//             return { ...state, loading: false, error: null, products: action.payload }
//         case FIND_PRODUCT_BY_ID_SUCCESS:
//             return { ...state, loading: false, error: null, product: action.payload }

//         case FIND_PRODUCTS_FAILURE:
//         case FIND_PRODUCT_BY_ID_FAILURE:
//             return { ...state, loading: false, error: action.payload }
//         default:
//             return state;
//     }
// }




// import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

// const initialState = {
//     products: [],
//     product: null,
//     loading: false,
//     error: null
// }

// export const customerProductReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FIND_PRODUCTS_REQUEST:
//         case FIND_PRODUCT_BY_ID_REQUEST:
//             return { ...state, loading: true, error: null }

//         case FIND_PRODUCTS_SUCCESS:
//             return { ...state, loading: false, error: null, products: action.payload.content } // Update products with action.payload.content
//         case FIND_PRODUCT_BY_ID_SUCCESS:
//             return { ...state, loading: false, error: null, product: action.payload }

//         case FIND_PRODUCTS_FAILURE:
//         case FIND_PRODUCT_BY_ID_FAILURE:
//             return { ...state, loading: false, error: action.payload }
//         default:
//             return state;
//     }
// }


import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

const initialState = {
    products: [], // Initialize products as an array
    product: null,
    loading: false,
    error: null
};

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload }; // Update products with action.payload
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload };

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
