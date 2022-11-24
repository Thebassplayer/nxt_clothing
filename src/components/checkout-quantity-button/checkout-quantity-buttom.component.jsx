import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ArrowLeft } from "../../assets/fontawesom/chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "../../assets/fontawesom/chevron-right-solid.svg";

import "./checkout-quantity-buttom.styles.scss";

const CheckoutQuantityButton = ({ product }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  const removeProductFromCart = () => removeItemFromCart(product);

  return (
    <div className="quantity-btn-container">
      <ArrowLeft
        className="quantity-btn-container__button"
        onClick={removeProductFromCart}
      />
      <p>{product.quantity}</p>
      <ArrowRight
        className="quantity-btn-container__button"
        onClick={addProductToCart}
      />
    </div>
  );
};

export default CheckoutQuantityButton;
