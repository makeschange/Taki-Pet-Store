import React, { useContext, useEffect } from "react";
import CartContext, { ConfirmContext } from "../store/cart-context";
import classes from "./Order.module.css";
import { calculateDeliveryDate } from "../util/calculate-days";
import { Link, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const { confirmdata } = useContext(ConfirmContext);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toLocaleString();
  const hasItems = cartCtx.items.length > 0;
  const { fullname, address, phone } = confirmdata;

  const amountWithoutCommas = Number(totalAmount.replace(/,/g, ""));

  const resetItemHandler = () => {
    cartCtx.resetItem();
    navigate("/");
  };

  useEffect(() => {
    if (cartCtx.items.length === 0 || !fullname || !address || !phone) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.order_con}>
        <div className="wrapper">
          <div className={classes.order_info_con}>
            <div className={classes.order_info_hdr}>
              <h1>Thank You, {fullname}</h1>
              <p>Your order has been placed successfully.</p>
            </div>

            <div className={classes.order_summ}>
              <h2 className={classes.order_title}>Order Summary</h2>
              <p className={classes.mb}>
                <strong>Order Number</strong>:{" "}
                {Math.floor(Math.random() * 100000)}
              </p>
              <p className={classes.item_list_title}>
                <strong>Purchased Items:</strong>
              </p>
              <ul className={classes.item_list}>
                {cartCtx.items.length > 0 &&
                  cartCtx.items.map((item) => {
                    return (
                      <li className={classes.item}>
                        <div className={classes.cart_info}>
                          <img
                            className={classes.cart_featured}
                            src={item.featured}
                            alt={item.name}
                          />
                          <div className={classes.item_info}>
                            <h2>
                              {item.name}{" "}
                              <span className={classes.amount}>
                                x {item.amount}
                              </span>
                            </h2>
                            <div className={classes.summary}>
                              <span className={classes.price}>
                                ₱ {item.price}
                              </span>
                            </div>
                          </div>
                          <p className={classes.item_total}>
                            Item Subtotal:{" "}
                            <span>
                              ₱ {(item.amount * item.price).toLocaleString()}
                            </span>
                          </p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
              <p className={classes.mb}>
                <strong>Total Amount</strong>: <span> ₱ {totalAmount}</span>
              </p>
              <p>
                <strong>Shipping Pay</strong>: <span>₱ 100</span>
              </p>
              <p className={classes.total_amount}>
                <strong>Amount To Pay</strong>:{" "}
                <mark
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#A66E38",
                  }}
                >
                  ₱ {(amountWithoutCommas + 100).toLocaleString()}
                </mark>
              </p>
              <h3 className={classes.order_title}>Shipping Information</h3>
              <p>
                <strong>Address</strong>: {address}
              </p>
              <p className={classes.mb}>
                <strong>Phone</strong>: {phone}
              </p>

              <p style={{ marginBottom: "1em" }}>
                <strong>Expected Delivery Date</strong>:{" "}
                {calculateDeliveryDate(7)}
              </p>

              <p className={classes.item_ftr}>
                If you have any questions, contact us at{" "}
                <a href="mailto:makeschange96@gmail.com">
                  takisupport@gmail.com
                </a>
                .
              </p>
            </div>
            <buton
              type="button"
              onClick={resetItemHandler}
              className={classes.back_home_page}
            >
              <span className={classes.back_home}>&#10158;</span> Home
            </buton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderPage;
