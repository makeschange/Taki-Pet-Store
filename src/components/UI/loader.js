import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div class={style.loading}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
