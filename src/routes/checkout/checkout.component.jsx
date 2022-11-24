import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutTitle from "../../components/checkout-title/checkout-title.component";
import CheckoutTotal from "../../components/checkout-total/checkout-total.component";
import CheckoutCartItem from "../../components/checkout-cart-item/checkout-cart-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <CheckoutTitle />
      {cartItems.map(product => (
        <CheckoutCartItem key={product.id} product={product} />
      ))}
      <CheckoutTotal />
    </div>
  );
};

export default Checkout;
