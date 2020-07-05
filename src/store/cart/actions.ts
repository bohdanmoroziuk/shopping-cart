import * as types from 'store/cart/types'
import { ProductId } from 'types'

export const increase = (id: ProductId): types.IncreaseAction => ({
  type: types.INCREASE,
  payload: {
    id
  }
}) 

export const decrease = (id: ProductId): types.DecreaseAction => ({
  type: types.DECREASE,
  payload: {
    id
  }
})

export const remove = (id: ProductId): types.RemoveAction => ({
  type: types.REMOVE,
  payload: {
    id
  }
})

export const clearCart = (): types.ClearCartAction => ({
  type: types.CLEAR_CART
})
