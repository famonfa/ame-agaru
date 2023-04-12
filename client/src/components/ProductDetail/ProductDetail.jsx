import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetail.module.css";
import axios from "axios";
import {
  getCart,
  updateCartItem,
  deleteCartItem,
} from "../../features/getCartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import { createCart } from "../../features/cartSlice";
import { AlertModalSmall } from "../AlertModal/AlertModal";
import { openModal, closeModal } from "../../features/modalSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const cart = useSelector(
    (state) => state.getCart.userProductsInCart.products
  );
  const modal = useSelector((state) => state.modal.isOpen);
  const username = useSelector((state) => state.user.username.id);
  const products = useSelector((state) => state.products.products);
  let [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  console.log(modal);
  const getProduct = () => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => setProduct(res.data));
  };

  useEffect(() => {
    dispatch(getCart(username)).then(() => {
      if (prod) {
        setCounter((counter = prod.quantity));
      }
    });
  }, []);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      getProduct();
    });
  }, []);

  const handleIncrementCounter = (val) => {
    if (username) {
      if (val === "+") {
        setCounter((prevState) => prevState + 1);
      } else {
        if (counter != 0) {
          setCounter((prevState) => prevState - 1);
        }
      }
    }
  };

  const handleCreateCart = async (productId) => {
    if (!prod) {
      const cartData = {
        quantity: counter,
        UserId: username,
        ProductId: Number(id),
      };
      await dispatch(createCart(cartData));
    } else {
      const cartData = {
        quantity: counter,
        userId: username,
        productId: Number(id),
      };
      await dispatch(updateCartItem(cartData));
    }
    await dispatch(getCart(username));
    await dispatch(openModal());
    await setTimeout(() => {
      dispatch(closeModal());
    }, 5000);
  };

  const getQuantity = () => {
    if (cart !== undefined) {
      let idSearched = cart.find((prod) => prod.ProductId == id);
      return idSearched;
    }
  };

  const getProd = () => {
    if (cart !== undefined) {
      let idSearched = products.find((prod) => prod.id == id);
      return idSearched;
    }
  };

  const prod = getQuantity();
  const prodNotCart = getProd();

  return (
    <div className={style.Wrapper}>
      {!!modal && (
        <AlertModalSmall text={`You added ${product.title} to cart`} />
      )}

      <div className={style.CardsWrapper}>
        <div className={style.Card}>
          <img className={style.imgDetail} src={product.image} alt="" />
          <div className={style.info}>
            <h3 className={style.title}>{product.title}</h3>
            <p className={style.p}>{product.description}</p>
            <div className={style.addTocart}>
              <div>
                <button
                  onClick={() => handleIncrementCounter("-")}
                  className={style.button}
                >
                  -
                </button>
                <span className={username ? style.span : style.spanTwo}>
                  {counter}
                </span>
                <button
                  onClick={() => handleIncrementCounter("+")}
                  className={style.button}
                >
                  +
                </button>
              </div>
              <h3 className={username ? style.price : style.priceTwo}>
                ${product.price * counter}
              </h3>
              <button className={style.add}>
                {username ? (
                  <ShoppingCartIcon
                    onClick={handleCreateCart}
                    className={style.addI}
                  />
                ) : (
                  <ShoppingCartIcon
                    title="You must log in to add to cart"
                    className={style.addTwo}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
