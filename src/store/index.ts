import { createStore, combineReducers } from 'redux';
import cartReducer from 'store/cart';

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;