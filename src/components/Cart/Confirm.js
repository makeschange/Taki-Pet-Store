import React from "react";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
  return (
    <div className={classes.confirm_users__con}>
      <h2>{props.username}</h2>
      <h3>{props.phone}</h3>
      <address>{props.address}</address>
    </div>
  );
};

export default Confirm;
