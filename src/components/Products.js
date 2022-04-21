import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, incrementQuantity } from "../actions/basketActions";
import { connect } from "react-redux";

const  Products = ({products, productsOnCart}) => {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    const productOnCartIndex = productsOnCart.findIndex(item => item.id === product.id);
    if (productOnCartIndex === -1) {
      dispatch(addToCart(product = {...product, quantity: 1}));
    } else {
      dispatch(incrementQuantity(product));
    }
  }

  return (
    <div>
      <h1>Products</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleAddToCart(item)}>add</button>
        </div>
      ))}
    </div>
  )
}
export default connect(state => ({products: state.items, productsOnCart: state.basket.items}))(Products);
