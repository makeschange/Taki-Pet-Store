import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      featured: props.featured,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <img src={props.featured} alt={props.name} />
        <div className={classes.featured_info}>
          <div>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
          </div>
          <p>₱ {props.price.toLocaleString()}</p>
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
