export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const TOGGLE_BASKET = 'TOGGLE_BASKET';
export const CLEAN_CART = 'CLEAN_CART';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
}

export function incrementQuantity(item) {
  return {
    type: INCREMENT_QUANTITY,
    payload: item,
  };
}

export function decrementQuantity(item) {
  return {
    type: DECREMENT_QUANTITY,
    payload: item,
  };
}

export function toggleBasket() {
  return {
    type: TOGGLE_BASKET,
  };
}

export function cleanCart() {
  return {
    type: CLEAN_CART,
  };
}
