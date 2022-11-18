import { Link } from "react-router-dom";
import { Fragment } from "react";

const NavLink = ({ data }) => {
  const { name, path, className } = data;
  return (
    <Fragment>
      <Link className={className} to={path}>
        {name}
      </Link>
    </Fragment>
  );
};

export default NavLink;
