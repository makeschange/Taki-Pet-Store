import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import TakiLogo from "../../assets/taki-logo-white.svg";
import classes from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <div className={`wrapper ${classes.header_con}`}>
        <figure
          className={`${classes.logo} ${
            location.pathname !== "/" && classes.order_logo
          }`}
        >
          <Link to="/">
            <img src={TakiLogo} alt="company logo taki" />
          </Link>
        </figure>
        {location.pathname === "/" && (
          <HeaderCartButton onClick={props.onShowCart} />
        )}
      </div>
    </header>
  );
};

export default Header;
