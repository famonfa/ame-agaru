import React from "react";
import style from "./AlertModal.module.css";
import Cat from "../../assets/catSmall.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modalSlice";

export const AlertModal = ({ text, image }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className={style.box}>
      <button onClick={handleExit} className={style.closeModal}>
        x
      </button>
      <div className={style.modalCard}>
        <div className={style.textModal}>
          <h2 className={style.parra}>{text}</h2>
        </div>
        <div className={style.imgBox}>
          <img className={style.imgModal} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export const AlertModalSmall = ({ text }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className={`${style.boxTwo} ${modal ? style.open : style.closed}`}>
      <button onClick={handleCloseModal} className={style.closeModalTwo}>
        x
      </button>
      <div className={style.modalCardTwo}>
        <div className={style.textModalTwo}>
          <h2>{text}</h2>
        </div>
        <div className={style.imgBox}>
          <img className={style.imgModalTwo} src={Cat} alt="catImg" />
        </div>
      </div>
    </div>
  );
};
