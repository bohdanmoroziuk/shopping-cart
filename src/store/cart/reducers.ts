import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from 'store/cart/types'
import { CartState, CartActionTypes } from 'store/cart/types'
import products from 'static/products'

const initialState: CartState = {
  items: products
}

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        items: []
      }
    case INCREASE:
      return {
        ...state,
        items: state.items.map(item => (
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ))
      }
    case DECREASE:
      return {
        ...state,
        items: state.items.map(item => (
          item.id === action.payload.id
            ? { ...item, amount: item.amount - 1 }
            : item
        ))
      }
    case REMOVE: 
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default cartReducer
