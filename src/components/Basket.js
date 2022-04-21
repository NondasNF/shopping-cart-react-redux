import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../actions/basketActions";




function Basket({ allProductsOnCart, total }) {
  const dispatch = useDispatch();

  function handleDecrementQuantity(product) {
    const productOnCart = allProductsOnCart.find(item => item.id === product.id);
    if (productOnCart.quantity > 1) {
      dispatch(decrementQuantity(product));
    } else {
      dispatch(removeFromCart(product))
    }
  }

  return (
    <div>
      <h1>Your Basket</h1>
      {allProductsOnCart.length === 0 ? (
        <p>Your basket is empty</p>) : (
        <>
          {allProductsOnCart.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
              <button onClick={() => handleDecrementQuantity(item)}>-</button>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          ))}
          <p>Total: {total}</p>
        </>
      )
      }
    </div>
  );
}
export default connect(state => ({ allProductsOnCart: state.basket.items, total: state.basket.total }))(Basket);
