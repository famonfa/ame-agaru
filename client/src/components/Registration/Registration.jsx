import React, { useEffect } from "react";
import style from "../Login/Login.module.css/";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AlertModalSmall } from "../AlertModal/AlertModal";
import { openModal, closeModal } from "../../features/modalSlice";

const Registration = ({ handleRegisterOrLog }) => {
  const navigate = useNavigate();
  const modal = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    phone: "",
    adress: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    phone: "",
    adress: "",
    errorValidator: false,
  });

  useEffect(() => {
    validations();
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.errorValidator) {
      axios
        .post("http://localhost:3001/user/", userData)
        .then((response) => {
          setUserData({
            username: "",
            password: "",
            phone: "",
            adress: "",
          });
          setErrors({
            username: "",
            password: "",
            phone: "",
            adress: "",
            errorValidator: false,
          });
          navigate("/");
          dispatch(openModal());
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "phone" ? Number(value) : value;

    setUserData({
      ...userData,
      [name]: newValue,
    });
  };
  const validations = () => {
    let validationErrors = {
      username: "",
      password: "",
      phone: "",
      adress: "",
      errorValidator: false,
    };

    if (!userData.username.length) {
      validationErrors.username = "Email is required";
      validationErrors.errorValidator = true;
    } else if (!userData.username.includes("@")) {
      validationErrors.username = "Invalid username format";
      validationErrors.errorValidator = true;
    }

    if (userData.password === "") {
      validationErrors.password = "Password is required";
      validationErrors.errorValidator = true;
    } else if (userData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
      validationErrors.errorValidator = true;
    }

    if (userData.phone === "") {
      validationErrors.phone = "Telephone is required";
      validationErrors.errorValidator = true;
    } else if (isNaN(userData.phone)) {
      validationErrors.phone = "Telephone must be a number";
      validationErrors.errorValidator = true;
    }

    if (userData.adress.trim() === "") {
      validationErrors.adress = "Address is required";
      validationErrors.errorValidator = true;
    }

    setErrors({ ...errors, ...validationErrors });
  };

  console.log(userData);

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>Register</h1>
        <div className={style.inputs}>
          <input
            className={style.inputForm}
            placeholder="Email"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && (
            <span className={style.spanError}>{errors.username}</span>
          )}
          <input
            className={style.inputForm}
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <span className={style.spanError}>{errors.password}</span>
          )}
          <input
            className={style.inputForm}
            placeholder="Telephone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && (
            <span className={style.spanError}>{errors.phone}</span>
          )}
          <input
            className={style.inputForm}
            placeholder="Address"
            name="adress"
            value={userData.adress}
            onChange={handleInputChange}
          />
          {errors.adress && (
            <span className={style.spanError}>{errors.adress}</span>
          )}
        </div>
        <p className={style.loginLink}>
          Already have an account?{" "}
          <span className={style.registerOrLogin} onClick={handleRegisterOrLog}>
            Log in
          </span>
        </p>
        <button className={style.button}>Sign Up</button>
      </form>
    </>
  );
};

export default Registration;
