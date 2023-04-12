import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  updateCartItem,
  deleteCartItem,
} from "../../features/getCartSlice";
import style from "./Cart.module.css";
import OrderData from "../OrderData/OrderData";
import CardInfo from "../CardInfo/CardInfo";
import { AlertModal } from "../AlertModal/AlertModal";
import fujimaroImage from "../../assets/fujimaro.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = ({ width }) => {
  const username = useSelector((state) => state.user.username.id);
  const [checkoutIsActive, setCheckoutIsActive] = useState(false);
  const cart = useSelector(
    (state) => state.getCart.userProductsInCart.products
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(cart);

  const reducer = () => {
    let acc = 0;
    if (cart !== undefined) {
      const reduce = cart.forEach((p) => {
        if (p.quantity === 1) {
          acc += p.Product.price;
        } else {
          let mathedPrice = p.quantity * p.Product.price;
          acc += mathedPrice;
        }
      });
    }

    return acc;
  };
  const total = reducer();

  const handleIncrement = (productId, quantity) => {
    const cartData = {
      quantity: quantity + 1,
      userId: username,
      productId: productId,
    };
    dispatch(updateCartItem(cartData));
    dispatch(getCart(username));
  };

  const handleDecrement = (productId, quantity) => {
    const cartData = {
      quantity: quantity - 1,
      userId: username,
      productId: productId,
    };
    dispatch(updateCartItem(cartData));
    dispatch(getCart(username));
  };

  const handleDelete = (ProductId) => {
    let cartData = {
      ProductId: ProductId,
      UserId: username,
    };
    dispatch(deleteCartItem(cartData)).then(() => {
      dispatch(getCart(username));
    });
  };

  const handleCheckout = () => {
    setCheckoutIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getCart(username));
  }, []);

  return (
    <div className={style.Wrapper}>
      {checkoutIsActive && (
        <div className={style.OrderDiv}>
          {!formSubmitted && (
            <OrderData
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
          )}
          {formSubmitted === 1 && (
            <CardInfo
              cart={cart}
              username={username}
              total={total}
              setFormSubmitted={setFormSubmitted}
            />
          )}
          {formSubmitted === 2 && (
            <AlertModal
              text={
                " Your food is on its way and should be arriving shortly. Thank you for ordering from our website!"
              }
              image={fujimaroImage}
            />
          )}
        </div>
      )}

      <div
        className={
          !checkoutIsActive ? style.CartWrapper : style.cartWrapperInactive
        }
      >
        <div className={style.CartPadding}>
          {!cart ? (
            <h2>Your cart is empty</h2>
          ) : (
            <>
              <h3>Cart</h3>
              <div className={style.CartWrap}>
                {cart &&
                  cart.map((c) => (
                    <div className={style.CartItem}>
                      {width > 695 ? (
                        <>
                          <Link to={`/products/${c.ProductId}`}>
                            <div>
                              {" "}
                              <img
                                src={c.Product.image}
                                className={style.Img}
                              ></img>
                            </div>
                          </Link>
                          <div>
                            {" "}
                            <p className={style.productName}>
                              {c.Product.title}
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                handleIncrement(c.ProductId, c.quantity)
                              }
                              className={style.Button}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <span>{c.quantity}</span>
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                handleDecrement(c.ProductId, c.quantity)
                              }
                              className={style.Button}
                            >
                              -
                            </button>
                          </div>

                          <div>
                            {" "}
                            <p className={style.Price}>
                              $
                              {c.quantity !== 1
                                ? c.Product.price * c.quantity
                                : c.Product.price}
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={() => handleDelete(c.ProductId)}
                              className={style.Button}
                            >
                              x
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={style.ButtonX}>
                            <button
                              className={style.ButtonXX}
                              onClick={() => handleDelete(c.ProductId)}
                            >
                              x
                            </button>
                          </div>
                          <div className={style.ImgTitle}>
                            <Link to={`/products/${c.ProductId}`}>
                              <div>
                                {" "}
                                <img
                                  src={c.Product.image}
                                  className={style.Img}
                                ></img>
                              </div>
                            </Link>
                            <div>
                              <div>
                                {" "}
                                <p className={style.productName}>
                                  {c.Product.title}
                                </p>
                              </div>
                              <div className={style.counterPrice}>
                                <div className={style.counter}>
                                  <div>
                                    <button
                                      onClick={() =>
                                        handleIncrement(c.ProductId, c.quantity)
                                      }
                                      className={style.Button}
                                    >
                                      +
                                    </button>
                                  </div>
                                  <div>
                                    <span>{c.quantity}</span>
                                  </div>
                                  <div>
                                    <button
                                      onClick={() =>
                                        handleDecrement(c.ProductId, c.quantity)
                                      }
                                      className={style.Button}
                                    >
                                      -
                                    </button>
                                  </div>
                                </div>
                                <div>
                                  {" "}
                                  <p className={style.Price}>
                                    $
                                    {c.quantity !== 1
                                      ? c.Product.price * c.quantity
                                      : c.Product.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </>
          )}
          <div className={style.total}>
            <h3>TOTAL: ${total}</h3>
            {cart ? (
              <button onClick={handleCheckout} className={style.ButtonTotal}>
                Proceed to checkout
              </button>
            ) : (
              <button
                onClick={() => navigate("/menu")}
                className={style.ButtonTotal}
              >
                Menu
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
