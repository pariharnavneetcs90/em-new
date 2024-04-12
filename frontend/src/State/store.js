import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
// import thunk from "redux-thunk";

const rootReducers = combineReducers({
    auth: authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

// import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './slices/apiSlice';
// import cartSliceReducer from './slices/cartSlice';
// import authReducer from './slices/authSlice';

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     cart: cartSliceReducer,
//     auth: authReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

// export default store;
