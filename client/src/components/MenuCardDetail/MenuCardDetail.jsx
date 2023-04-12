import React from "react";
import style from "./MenuCardDetail.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const MenuCardDetail = ({ products, handleCreateCart, user }) => {
  return (
    <>
      {products.map((p) => (
        <div className={style.Card}>
          <Link to={`/products/${p.id}`}>
            <img className={style.CardImg} src={p.image}></img>
          </Link>
          <Link to={`/products/${p.id}`}>
            <p className={style.CardTitle}>{p.title}</p>
          </Link>
          <div className={style.AddtoCart}>
            <p className={style.CardTitle}>${p.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuCardDetail;
