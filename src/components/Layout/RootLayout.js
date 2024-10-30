import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ShowCart } from "../../store/cart-context";
import Cart from "../Cart/Cart";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  const { cart, showCart, closeCart } = useContext(ShowCart);
  return (
    <>
      {cart && <Cart onClose={closeCart} />}
      <Header onShowCart={showCart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
