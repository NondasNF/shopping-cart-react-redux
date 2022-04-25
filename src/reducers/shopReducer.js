import { INCREMENT_QUANTITY_IN_SHOP, DECREMENT_QUANTITY_IN_SHOP, RESTORE_QUANTITY_IN_SHOP } from "../actions/shopActions";
import data from '../data';

const initialState = {
  items: data.products
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_QUANTITY_IN_SHOP:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
      }
    case DECREMENT_QUANTITY_IN_SHOP:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
      }
    case RESTORE_QUANTITY_IN_SHOP:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity
            }
          }
          return item
        })
      }
      default:
        return state;
    }
}

export default shopReducer;
