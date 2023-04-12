import React, { useState } from "react";
import style from "./CardInfo.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import { createOrder } from "../../features/ordersSlice";
import { useDispatch } from "react-redux";
import { removeAllCartItems } from "../../features/getCartSlice";

const CardInfo = ({ setFormSubmitted, cart, username, total }) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(username);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      cart: cart,
      username: username,
      total: total,
    };
    await dispatch(createOrder(orderData));
    await dispatch(removeAllCartItems(username));
    setFormSubmitted(2);
  };

  return (
    <div className={style.box}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h3>Enter your payment information</h3>

        <div className={style.inputField}>
          <label className={style.label}>Full Name</label>
          <input className={style.Input} />
        </div>
        <div className={style.inputField}>
          <label className={style.label}>Card number</label>
          <input className={style.Input} />
        </div>
        <div className={style.inputField}>
          <label className={style.label}>Security Number</label>
          <input className={style.Input} />
        </div>
        <div className={style.inputField}>
          <label className={style.label}>Expiration Date</label>
          <div>
            <DatePicker
              className={style.Input}
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/yyyy"
              showYearDropdown
            />
          </div>
        </div>
        <div className={style.inputField}>
          <label className={style.label}>Passport Number</label>
          <input className={style.Input} />
        </div>
        <button className={style.Button}>Finish payment</button>
      </form>
    </div>
  );
};

export default CardInfo;
