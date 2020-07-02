import React, { FunctionComponent } from 'react';
import Navbar from 'components/Navbar';
import CartContainer from 'components/CartContainer';

import products from 'static/products';

const App: FunctionComponent = () => (
  <div className="app">
    <Navbar />
    <CartContainer cart={products} />
  </div>
);

export default App;