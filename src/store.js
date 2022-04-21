import { createStore } from '@reduxjs/toolkit';
import reducer from './reducers/basketReducer';
const store = createStore(reducer);
export default store;
