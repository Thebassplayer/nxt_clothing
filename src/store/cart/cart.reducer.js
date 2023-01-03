import { CART_ACTIONS_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  displayCart: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTIONS_TYPES.DISPLAY_CART:
      return {
        ...state,
        displayCart: payload,
      };
    default:
      return state;
  }
};
