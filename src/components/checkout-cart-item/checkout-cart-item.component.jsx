import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutQuantityButton from "../checkout-quantity-button/checkout-quantity-buttom.component";

import "./checkout-cart-item.styles.scss";

const CheckoutCartItem = ({ product }) => {
  const { deleteItemFromCart } = useContext(CartContext);

  const deleteProductFromCart = () => deleteItemFromCart(product);

  const { name, price, imageUrl, id, quantity } = product;

  return (
    <div key={id} className="item-container">
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <CheckoutQuantityButton product={product} />
      <span>${price}</span>
      <span>${price * quantity}</span>

      <button
        className="item-container__delete-button"
        onClick={deleteProductFromCart}
      >
        x
      </button>
    </div>
  );
};

export default CheckoutCartItem;
