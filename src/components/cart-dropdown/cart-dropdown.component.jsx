import Button from "../button.component/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>go to check</Button>
    </div>
  );
};

export default CartDropdown;
