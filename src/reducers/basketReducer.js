import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAN_CART } from '../actions/basketActions';
import data from '../data';

const initialState = {
  items: [...data.products],
  basket: {
    status: true,
    items: [],
    totalPrice: 0,
    itemsCount: 0
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        basket: {
          ...state.basket,
          status: false,
          items: [...state.basket.items, action.payload],
          totalPrice: state.basket.totalPrice + action.payload.price,
          itemsCount: state.basket.itemsCount + 1
        }
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        basket: { items: state.basket.items.filter(item => item.id !== action.payload.id),
        totalPrice: state.basket.totalPrice - action.payload.price * action.payload.quantity,
        itemsCount: state.basket.itemsCount - action.payload.quantity
        }
      }

    case INCREMENT_QUANTITY:
      return {
        ...state,
        basket: {
          items: state.basket.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        }),
        totalPrice: state.basket.totalPrice + action.payload.price,
        itemsCount: state.basket.itemsCount + 1
      }
    }

    case DECREMENT_QUANTITY:
      return {
        ...state,
        basket: {
        items: state.basket.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        }),
        totalPrice: state.basket.totalPrice - action.payload.price,
        itemsCount: state.basket.itemsCount - 1 
      }
    }

    case CLEAN_CART:
      return {
        ...state,
        basket: {
          status: 'empty',
          items: [],
          totalPrice: 0,
          itemsCount: 0
        }
      }
    default:
      return state
  }
}

export default reducer;
