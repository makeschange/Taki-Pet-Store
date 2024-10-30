import React, { useContext, useState } from "react";
import classes from "./Checkout.module.css";
import { ConfirmContext } from "../../store/cart-context";
import { useNavigate } from "react-router-dom";

const Checkout = (props) => {
  const navigate = useNavigate();
  const { confirmHandler } = useContext(ConfirmContext);

  const [confirmdata, setConfirmdata] = useState({
    fullname: "",
    phone: "",
    address: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setConfirmdata((preValue) => ({ ...preValue, [name]: value }));
  };

  const confirmSubmitHandler = (e) => {
    e.preventDefault();
    props.closeModal();
    confirmHandler(confirmdata);
    props.closeCheckout();
    navigate("/order");
  };

  return (
    <div className={classes.checkout_con}>
      <h2 className={classes.checkout_title}>Please confirm you order!</h2>
      <form
        className={classes.checkout_form__con}
        onSubmit={confirmSubmitHandler}
      >
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            onChange={changeHandler}
            value={confirmdata.fullname}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={changeHandler}
            value={confirmdata.phone}
            required
          />
        </div>
        <div style={{ width: "100%" }}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={changeHandler}
            value={confirmdata.address}
            required
          />
        </div>
        <div className={classes.check_input}>
          <input type="checkbox" required />
          <label>
            By shopping with us, you agree to our policies. All sales are final,
            and we prioritize your satisfaction. Please read our full terms for
            details.
          </label>
        </div>
        <div className={classes.checkout_btns}>
          <button type="button" onClick={() => props.closeCheckout()}>
            Cancell
          </button>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
