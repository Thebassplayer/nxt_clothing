import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { displayCart, setDisplayCart, cartCount } = useContext(CartContext);

  const toggleDisplayCart = () => setDisplayCart(!displayCart);

  return (
    <div className="cart-icon-container" onClick={toggleDisplayCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
