import React, { useEffect } from "react";
import CardInfo from "../CardInfo/CardInfo";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./OrderData.module.css";
import axios from "axios";

const OrderData = ({ setFormSubmitted, formSubmitted }) => {
  const user = useSelector((state) => state.user.username);

  const [userData, setUserData] = useState({
    username: user.username,
    phone: user.phone,
    address: user.address,
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    const newValue = name === "phone" ? Number(value) : value;
    setUserData({
      ...userData,
      [name]: newValue,
    });
  };

  useEffect(() => {
    validations();
  }, [userData]);

  const [errors, setErrors] = useState({
    username: "",
    phone: "",
    address: "",
    errorValidator: false,
  });

  const validations = () => {
    let validationErrors = {
      username: "",
      phone: "",
      address: "",
      errorValidator: false,
    };

    if (!userData.username.trim().length) {
      validationErrors.username = "Email is required";
      validationErrors.errorValidator = true;
    } else if (!userData.username.includes("@")) {
      validationErrors.username = "Invalid username format";
      validationErrors.errorValidator = true;
    }

    if (userData.phone === "" || userData.phone === 0) {
      validationErrors.phone = "Telephone is required";
      validationErrors.errorValidator = true;
    } else if (isNaN(userData.phone)) {
      validationErrors.phone = "Telephone must be a number";
      validationErrors.errorValidator = true;
    }

    if (userData.address.trim() === "") {
      validationErrors.address = "Address is required";
      validationErrors.errorValidator = true;
    }

    setErrors({ ...errors, ...validationErrors });
  };

  const [isCorrect, setIsCorrect] = useState({
    username: true,
    phone: true,
    address: true,
    buttonIsCorrect: true,
  });

  const handleUpdate = useMemo(
    () => (prop) => {
      setIsCorrect({ ...isCorrect, [prop]: false, buttonIsCorrect: false });
      setFormSubmitted(false);
    },
    [isCorrect, setIsCorrect]
  );
  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.errorValidator) {
      axios
        .put(`http://localhost:3001/user/${user.id}`, userData)
        .then((response) => {
          setFormSubmitted(1);
        })

        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={style.box}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h3>Is this information correct?</h3>
        <div className={style.info}>
          {isCorrect.username ? (
            <p>{user.username}</p>
          ) : (
            <>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputData}
                className={style.Input}
                placeholder="mail"
              />
            </>
          )}
          <span
            onClick={() => handleUpdate("username")}
            className={style.Button}
          >
            x
          </span>
        </div>
        {errors.username && (
          <span className={style.spanError}>{errors.username}</span>
        )}

        <div className={style.info}>
          {isCorrect.phone ? (
            <p>{user.phone}</p>
          ) : (
            <>
              <input
                type="text"
                value={userData.phone}
                name="phone"
                onChange={handleInputData}
                className={style.Input}
                placeholder="phone"
              />
            </>
          )}
          <span onClick={() => handleUpdate("phone")} className={style.Button}>
            x
          </span>
        </div>
        {errors.phone && (
          <span className={style.spanError}>{errors.phone}</span>
        )}

        <div className={style.info}>
          {isCorrect.address ? (
            <p>{user.address}</p>
          ) : (
            <>
              <input
                type="text"
                value={userData.adress}
                name="adress"
                onChange={handleInputData}
                className={style.Input}
                placeholder="address"
              />
            </>
          )}
          <span
            onClick={() => handleUpdate("address")}
            className={style.Button}
          >
            x
          </span>
        </div>
        {errors.address && (
          <span className={style.spanError}>{errors.address}</span>
        )}

        {isCorrect.buttonIsCorrect ? (
          <button className={style.button}>Continue</button>
        ) : (
          <button className={style.button}>Update and continue</button>
        )}
      </form>
    </div>
  );
};

export default OrderData;
