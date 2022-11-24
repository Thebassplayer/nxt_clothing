import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-total.styles.scss";

const CheckoutTotal = () => {
  const { cartTotal } = useContext(CartContext);

  return <div className="checkout-total">TOTAL: ${cartTotal}</div>;
};

export default CheckoutTotal;
