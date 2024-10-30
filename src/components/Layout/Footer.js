import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <div className={classes.ftr}>
      <p>
        &copy;Copyright &bull; 2023-{now} &bull;
        <span>
          {" "}
          Designed by <strong>Arnulfo Caceres</strong>
        </span>
      </p>
      <p className={classes.special_thanks}>
        Special thanks to{" "}
        <a href="https://unsplash.com/" target="_blank">
          Unsplash
        </a>{" "}
        for the free images.
      </p>
    </div>
  );
};

export default Footer;
