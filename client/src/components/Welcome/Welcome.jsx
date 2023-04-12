import style from "../Home/Home.module.css";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWelcome(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showWelcome && username.username !== undefined && (
        <h4 className={style.username}>{`${username.username}`}</h4>
      )}
    </>
  );
};

export default Welcome;
