import React, { FunctionComponent } from "react";
import { Product } from "types";
import ArrowUpIcon from 'icons/ArrowUp'
import ArrowDownIcon from 'icons/ArrowDown'
export interface CartItemProps {
  item: Product,
  increase: Function
  decrease: Function
  remove: Function
}

const CartItem: FunctionComponent<CartItemProps> = ({ item, increase, decrease, remove }) => {
  const { img, title, price, amount } = item

  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          <ArrowUpIcon />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease()}>
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  )
}

export default CartItem;
