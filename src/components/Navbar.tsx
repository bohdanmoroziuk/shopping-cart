import React, { FunctionComponent } from "react";
import CaretIcon from 'icons/Cart'

export interface NavbarProps {
  amount: number
}

const Navbar: FunctionComponent<NavbarProps> = ({ amount }) => (
  <nav>
    <div className="nav-center">
      <h3>Shopping Cart</h3>
      <div className="nav-container">
        <CaretIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;