import React from 'react';
import Products from './components/Products';
import Basket from './components/Basket';
import './App.css';

function App() {
  return (
    <div className="App">
      <Products/>
      <Basket/>
    </div>
  );
}

export default App;
