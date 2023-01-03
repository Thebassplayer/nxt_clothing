import { CART_ACTIONS_TYPES } from "./cart.types";
import createAction from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cart items contains productToAdd
  const existingProd = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  // Is found, increment quatity
  if (existingProd) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // Return new array with modified cart cartItems
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ];
};

// Delete item from Cart
const deleteCartItem = (cartItems, cartItemToDelete) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id);
};

// Reduce 1 unit of cartItem from Cart
const removeCartItem = (cartItems, CartItemToRemove) => {
  return CartItemToRemove.quantity > 1
    ? cartItems.map(cartItem =>
        cartItem.id === CartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    : deleteCartItem(cartItems, CartItemToRemove);
};

export const setIsCartOpen = boolean =>
  createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
  const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
  createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
