import React, { useContext, useState } from "react";
import Banner from "../components/Layout/Banner";
import Meals from "../components/Meals/Meals";
import { ShowCart } from "../store/cart-context";

const Home = () => {
const {cart} = useContext(ShowCart)
  return (
    <>
      <Banner />
      <Meals />
    </>
  );
};

export default Home;
