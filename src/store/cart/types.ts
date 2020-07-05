import { Product, ProductId } from 'types'

export interface CartState {
  items: Product[]
}

export const CLEAR_CART = Symbol('app/cart/CLEAR_CART')
export const INCREASE = Symbol('app/cart/INCREASE')
export const DECREASE = Symbol('app/cart/DECREASE')
export const REMOVE = Symbol('app/cart/REMOVE')

export interface ClearCartAction {
  type: typeof CLEAR_CART
}

export interface IncreaseAction {
  type: typeof INCREASE
  payload: {
    id: ProductId
  }
}

export interface DecreaseAction {
  type: typeof DECREASE
  payload: {
    id: ProductId
  }
}

export interface RemoveAction {
  type: typeof REMOVE
  payload: {
    id: ProductId
  }
}

export type CartActionTypes = 
  | ClearCartAction 
  | IncreaseAction 
  | DecreaseAction 
  | RemoveAction
