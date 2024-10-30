import React from "react";
import BnrImage from "../../assets/bnr-img.jpg";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.bnr_img}>
      <img src={BnrImage} alt="cat and dog in a playground" />
      <section className={classes.bnr_info}>
        <h1>Gentle paws, endless love!</h1>
        <p>
          Welcome to <strong>Taki Pet Shop</strong>, the online store where
          every product is chosen with care for your furry friend. From cozy
          beds and tasty treats to toys and grooming essentials, we offer
          everything your kind-hearted dog deserves. Let us help you make every
          day a little brighter for the one who brings endless love into your
          life!
        </p>
        <a href="#featured_products" className={classes.btn_bnr}>
          Let's Get Started
        </a>
      </section>
    </div>
  );
};

export default Banner;
