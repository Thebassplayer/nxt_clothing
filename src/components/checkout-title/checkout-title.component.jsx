import "./checkout-title.styles.scss";

const CheckoutTitle = () => {
  return (
    <div className="checkout-container__title">
      <span>product</span>
      <span>description</span>
      <span>quantity</span>
      <span>price</span>
      <span>Sub-total</span>
      <span>remove</span>
    </div>
  );
};

export default CheckoutTitle;
