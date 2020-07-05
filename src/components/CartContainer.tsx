import React, { FunctionComponent } from 'react';
import CartItem from 'components/CartItem';
import { Product } from 'types'

export interface CartContainerProps {
  cart: Product[]
  total: number
  isCartEmpty: boolean
  increase: Function
  decrease: Function
  remove: Function
  clearCart: Function
}

const CartContainer: FunctionComponent<CartContainerProps> = ({ cart, total, isCartEmpty, increase, decrease, remove, clearCart }) => {
  const renderCardItem = (item: Product) => (
    <CartItem 
      {...{
        key: item.id,
        item,
        increase: () => increase(item.id),
        decrease: () => decrease(item.id),
        remove: () => remove(item.id),
      }}
    />
  )

  if (isCartEmpty) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(renderCardItem)}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clearCart()}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
