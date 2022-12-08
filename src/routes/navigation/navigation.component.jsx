import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as NxtLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  selectCurrentUser,
  selectdisplayName,
} from "../../store/user/user.selector";

import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  /* Get userName from firebase */
  const userName = useSelector(selectdisplayName);

  const { displayCart } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <div className="navigation-container">
          <Link className="logo-container" to="/">
            <NxtLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <Link className="nav-link" onClick={signOutUser}>
                sign out
              </Link>
            ) : (
              <Link className="nav-link" to="/auth">
                sign in
              </Link>
            )}
            <CartIcon />
          </div>
          {displayCart && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
