// import { createStore } from 'redux';
import { legacy_createStore as createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
