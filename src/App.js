import React from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Basket from './components/Basket';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop/>
      <Basket/>
    </div>
  );
}

export default App;
