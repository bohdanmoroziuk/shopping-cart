import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from 'store/cart/types'
import { CartState, CartActionTypes } from 'store/cart/types'
import products from 'static/products'
import produce from 'immer';
import { Product, ProductId } from 'types';

const initialState: CartState = {
  items: products
}

const findIndexById = <T extends { id: TId }, TId>(items: T[]) => (id: TId): number => 
  items.findIndex(item => item.id === id)

const cartReducer = (state: CartState = initialState, action: CartActionTypes) => {
  return produce(state, draft => {
    const findItemIndexById = findIndexById<Product, ProductId>(draft.items)

    switch(action.type) {
      case CLEAR_CART: {
        draft.items = [];
        break;
      }
      case INCREASE: {
        const index = findItemIndexById(action.payload.id);
        index !== -1 && draft.items[index].amount++;
        break;
      }
      case DECREASE: {
        const index = findItemIndexById(action.payload.id);
        (index !== -1 && draft.items[index].amount > 1) && draft.items[index].amount--;
        break;
      }
      case REMOVE: {
        const index = findItemIndexById(action.payload.id);
        (index !== -1) && draft.items.splice(index, 1);
        break;
      }
    }
  })
}

export default cartReducer
