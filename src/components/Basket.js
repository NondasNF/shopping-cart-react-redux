import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../actions/basketActions";
import {
  incrementQuantityInShop,
  decrementQuantityInShop,
  restoreQuantityInShop,
} from "../actions/shopActions";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import "./Basket.css"

function Basket({ products, basket, toggleBasket }) {
  const allProductsOnCart = basket.items;
  const total = basket.totalPrice;
  const allProductsOnCartCount = basket.itemsCount;
  const dispatch = useDispatch();

  function handleDecrementQuantity(product) {
    const productOnCart = allProductsOnCart.find(
      (item) => item.id === product.id
    );
    if (productOnCart.quantity > 1) {
      dispatch(decrementQuantity(product));
    } else {
      dispatch(removeFromCart(product));
    }
    dispatch(incrementQuantityInShop(product));
  }

  function handleIncrementQuantity(product) {
    const productOnShop = products.find((item) => item.id === product.id);
    if (productOnShop.quantity > 0) {
      dispatch(incrementQuantity(product));
      dispatch(decrementQuantityInShop(product));
    }
  }

  function handleRemoveFromBasket(product) {
    dispatch(removeFromCart(product));
    dispatch(restoreQuantityInShop(product));
  }

  return (
    <div
      className="basket"
      style={{
        display: toggleBasket ? "block" : "none",
      }}
    >
      <table className="basket__table">
        <thead className="table__header">
          <tr className="table__header">
            <th className="table__header__cell">Item</th>
            <th className="table__header__cell">Price</th>
            <th className="table__header__cell">Quantity</th>
          </tr>
        </thead>

        {allProductsOnCart.length === 0 ? (
          <tbody>
            <tr>
              <td className="table__body__cell">No items</td>
              <td className="table__body__cell">-</td>
              <td className="table__body__cell">-</td>
            </tr>
          </tbody>
        ) : (
          <tbody className="table__body">
            {allProductsOnCart.map((item) => (
              <tr className="table__body__row" key={item.id}>
                <td className="table__body__cell">{item.name}</td>
                <td className="table__body__cell">{item.price}$</td>
                <td className="table__body__cell__quantity">
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrementQuantity(item)}
                  >
                    <span>+</span>
                  </button>
                  <button
                    className="quantity-button quantity-button--decrement"
                    onClick={() => handleDecrementQuantity(item)}
                  >
                    <span>-</span>
                  </button>
                  <button
                    className="quantity-button quantity-button--remove"
                    onClick={() => handleRemoveFromBasket(item)}
                  >
                    <DeleteOutlineOutlinedIcon fontSize="small" />
                  </button>
                </td>
              </tr>
            ))}
            <tr className="table__body__row">
              <td className="table__body__cell">Delivery:</td>
              <td className="table__body__cell">
                {allProductsOnCartCount >= 20 ? "FREE" : "5$"}
              </td>
              <td> </td>
            </tr>
            <tr className="table__body__row">
              <td className="table__body__cell">Total:</td>
              <td className="table__body__cell">{total}$</td>
              <td> </td>
            </tr>
          </tbody>
        )}
      </table>
      <button
        className="basket__button"
        disabled={allProductsOnCart.length === 0 ? true : false}
      >
        FINALIZE PURCHASE
      </button>
    </div>
  );
}
export default connect((state) => ({
  products: state.shop.items,
  basket: state.basket,
  toggleBasket: state.basket.show,
}))(Basket);
