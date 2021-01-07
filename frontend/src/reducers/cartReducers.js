import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      //   if item exists in payload, otehrwise return false
      //x.product is de id, als het gelijk is aan item in de cart, dan wordt het niet toegevoegd
      const existItem = state.cartItems.find((x) => x.product === item.product);

      //   map thru current cartItems, if item exiists; if current item id = existItem, then return item
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //   als item niet bestaat, return gwn wat er in de state is dmv spread operator
        // add item aan cartItems
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        //return initial state and add shipping adddress
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
