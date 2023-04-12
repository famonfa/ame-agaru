import { useEffect, useState } from "react";
import style from "../Login/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Log = ({ handleRegisterOrLog, setIsLogged }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const open = useSelector((state) => state.modal.isOpen);

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/user/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setIsLogged(true);
        sessionStorage.setItem("accessToken", response.data);
        navigate("/");
      }
    });
  };

  return (
    <div className={style.form}>
      <h1 className={style.title}>Log in</h1>
      <div className={style.inputs}>
        <input
          className={style.inputForm}
          placeholder="Email"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className={style.inputForm}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <p className={style.loginLink}>
        Don´t have an account?{" "}
        <span className={style.registerOrLogin} onClick={handleRegisterOrLog}>
          Register
        </span>
      </p>
      <button className={style.button} onClick={login}>
        Log In
      </button>
    </div>
  );
};

export default Log;
