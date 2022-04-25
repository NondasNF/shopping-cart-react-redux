import React from 'react';
import { useDispatch } from "react-redux";
import { toggleBasket } from "../actions/basketActions";
import {ReactComponent as CartIcon } from "../assets/icons/cart.svg";
import { connect } from "react-redux";
import "./Navbar.css";

function Navbar ({showBasket}) {
  const dispatch = useDispatch();
  return(
    <nav className="navbar">
      <div className="navbar__title">
        <h1 className="navbar__title__text">My Shopping</h1>
      </div>
      <div className="navbar__basket">
      <div className="navbar__basket__button" onClick={() => (dispatch(toggleBasket()))}
        style={{
          backgroundColor: showBasket ? '#f26c4f' : '#ffffff',
        }}
        >
        <CartIcon className="navbar__basket__button__icon"/>
      </div>
      </div>
    </nav>
  )
}

export default connect(state => ({ showBasket: state.basket.show}))(Navbar);
