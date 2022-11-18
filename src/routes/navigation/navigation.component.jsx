import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NxtLogo } from "../../assets/crown.svg";

import NavLink from "../../components/nav-link/nav-link.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const navButtons = [
    {
      id: 1,
      name: "shop",
      path: "/shop",
      className: "nav-link",
    },
    {
      id: 2,
      name: "contact",
      path: "/contact",
      className: "nav-link",
    },
    {
      id: 3,
      name: "sign in",
      path: "/sign_in",
      className: "nav-link",
    },
  ];

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <NxtLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {navButtons.map(button => {
            console.log("navButtons mapped");
            return <NavLink key={button.id} data={button} />;
          })}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
