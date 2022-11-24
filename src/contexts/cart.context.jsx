import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = cartItemToRemove => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const deleteItemFromCart = cartItemToDelete => {
    setCartItems(deleteCartItem(cartItems, cartItemToDelete));
  };

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems
      .map(cartItem => cartItem.price * cartItem.quantity)
      .reduce((total, cartItemSubTotal) => total + cartItemSubTotal, 0);

    setCartTotal(newTotal);
  }, [cartItems]);

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
