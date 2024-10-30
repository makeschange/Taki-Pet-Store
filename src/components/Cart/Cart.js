import { useContext, useEffect, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₱ ${cartCtx.totalAmount.toLocaleString()}`;

  console.log("tatalAmount:", totalAmount);

  const hasItems = cartCtx.items.length > 0;
  const [checkoutform, showCheckoutform] = useState(false);

  useEffect(() => {
    if (!hasItems) {
      showCheckoutform(false);
    }
  }, [hasItems]);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addByOne(item);
  };

  const checkoutHandler = () => {
    showCheckoutform((preValue) => !preValue);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          featured={item.featured}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <h2
        className={`${classes.cart_hdr_title} ${
          !hasItems ? classes.cart_hdr_no_item : ""
        }`}
      >
        {hasItems ? "Your selected items:" : "No item selected!"}
      </h2>
      {cartItems}
      <div className={classes.total}>
        {hasItems && (
          <>
            <span>Total Amount: </span>
            <span>{totalAmount}</span>
          </>
        )}
      </div>
      {!checkoutform && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={checkoutHandler}>
              Order
            </button>
          )}
        </div>
      )}
      {checkoutform && (
        <Checkout closeModal={props.onClose} closeCheckout={checkoutHandler} />
      )}
    </Modal>
  );
};

export default Cart;
