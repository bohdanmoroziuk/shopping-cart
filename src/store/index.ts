import { createStore, combineReducers } from 'redux'
import cartReducer from 'store/cart'

const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export type StoreDispatch = typeof store.dispatch

export default store
