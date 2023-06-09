import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import FilterReducer from "./filterSlice";
import CheckoutReducer from "./checkoutSlice";
import { loadState, saveState } from "./localStorage";

const rootReducer = combineReducers({
  cart: CartReducer,
  filters: FilterReducer,
  checkout: CheckoutReducer,
});

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
