import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, incrementQuantity } from "../actions/basketActions";
import { decrementQuantityInShop } from "../actions/shopActions";
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import "./Shop.css";

const Shop = ({ products, productsOnCart }) => {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    const productOnCartIndex = productsOnCart.findIndex(item => item.id === product.id);
    const productOnShop = products.find(item => item.id === product.id);
    if (productOnShop.quantity > 0) {
      if (productOnCartIndex === -1) {
        dispatch(addToCart(product = { ...product, quantity: 1 }));
        dispatch(decrementQuantityInShop(product));
      } else {
        dispatch(incrementQuantity(product));
        dispatch(decrementQuantityInShop(product));
      }
    }
  }

  return (
    <div className="products">
      {products.map((item) => (
        <Card className="products__item" key={item.id}>
          <CardContent className="item__title">{item.name}</CardContent>
          <div className="item__info">
            <p className="item__info__price">Price: <span>{item.price}$</span></p>
            <p className="item__info__quantity">Quantity: <span>{item.quantity}</span></p>
          </div>
          <Button onClick={() => handleAddToCart(item)}>BUY</Button>
        </Card>
      ))}
    </div>
  )
}
export default connect(state => ({ products: state.shop.items, productsOnCart: state.basket.items }))(Shop);
