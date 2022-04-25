import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, TOGGLE_BASKET, CLEAN_CART } from '../actions/basketActions';

const initialState = {
  items: [],
  totalPrice: 0,
  itemsCount: 0,
  show: false
}

function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
        itemsCount: state.itemsCount + 1
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price * action.payload.quantity,
        itemsCount: state.itemsCount - action.payload.quantity

      }

    case INCREMENT_QUANTITY:
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
        }),
        totalPrice: state.totalPrice + action.payload.price,
        itemsCount: state.itemsCount + 1
      }

    case DECREMENT_QUANTITY:
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
        }),
        totalPrice: state.totalPrice - action.payload.price,
        itemsCount: state.itemsCount - 1

      }

    case TOGGLE_BASKET:
      return {
        ...state,
        show: !state.show
      }

    case CLEAN_CART:
      return {
        ...state,
        items: [],
        totalPrice: 0,
        itemsCount: 0
      }
    default:
      return state
  }
}

export default basketReducer;
