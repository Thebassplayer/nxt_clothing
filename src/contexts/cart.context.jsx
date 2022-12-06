import { createContext, useReducer } from "react";
import createAction from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
  displayCart: false,
  setDisplayCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  removeCartItem: () => {},
});

const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  DISPLAY_CART: "DISPLAY_CART",
};

const INITIAL_STATE = {
  displayCart: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.DISPLAY_CART:
      return {
        ...state,
        displayCart: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ displayCart, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = newCartItems => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems
      .map(cartItem => cartItem.price * cartItem.quantity)
      .reduce((total, cartItemSubTotal) => total + cartItemSubTotal, 0);

    dispatch(
      createAction(CART_ACTIONS.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = productToAdd => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = cartItemToRemove => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const deleteItemFromCart = cartItemToDelete => {
    const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const setDisplayCart = boolean => {
    dispatch(createAction(CART_ACTIONS.DISPLAY_CART, boolean));
  };

  const value = {
    displayCart,
    setDisplayCart,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    deleteItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
