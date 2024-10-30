import { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <main id="featured_products" className={classes.main}>
      <div className="wrapper">
        <h2 className={classes.main_hdr}>Featured Products</h2>
        <AvailableMeals />
      </div>
    </main>
  );
};

export default Meals;
