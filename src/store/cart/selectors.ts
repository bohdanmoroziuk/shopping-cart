import { RootState } from 'store'
import { Product } from 'types'

const amountReducer = (amount: number, item: Product): number => 
  amount + item.amount 

const calculateItemTotal = (item: Product): number =>
  item.price * item.amount

const totalReducer = (total: number, itemTotal: number): number =>
  total + itemTotal

export const getItems = (state: RootState): Product[] => 
  state.cart.items

export const getAmount = (state: RootState): number => 
  getItems(state)
    .reduce(amountReducer, 0)

export const getTotal = (state: RootState): number =>
  getItems(state)
    .map(calculateItemTotal)
    .reduce(totalReducer, 0)