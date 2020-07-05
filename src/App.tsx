import React, { FunctionComponent } from 'react';
import Navbar from 'containers/Navbar';
import CartContainer from 'containers/CartContainer';

const App: FunctionComponent = () => (
  <div className="app">
    <Navbar />
    <CartContainer />
  </div>
);

export default App;