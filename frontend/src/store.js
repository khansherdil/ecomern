import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  //productlist is de state da wordt gevuld met de payload vanuit de reducer file
  //in redux devtools zie jedat state nu veranderd is: empty array
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

//de initial state van cart is wat er in de LS is; bij cartActions sloegen we dit op in LS dus nu halen we het terug om in de state te zetten
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//IF THERE IS A SHIPPING ADDRESS SAVED IN LS USE THAT, IF NOT JUST LOAD AN EMPTY OBJ
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
