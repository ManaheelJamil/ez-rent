"use client";
import { combineReducers, configureStore, EnhancedStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authReducer";
import productReducer from "./Product/productReducer";
import categoryReducer from "./Category/categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product : productReducer,
  category: categoryReducer
  // add other reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

// Define a type for the Redux store itself
export type AppStore = typeof store;

// Define a type for the Redux state (useful with useSelector)
export type RootState = ReturnType<typeof rootReducer>;

// Define a type for the dispatch function (useful with useDispatch)
export type AppDispatch = typeof store.dispatch;