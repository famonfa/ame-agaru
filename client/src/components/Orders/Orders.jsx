import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../features/ordersSlice";
import style from "./Orders.module.css";
import { Link } from "react-router-dom";

const Orders = () => {
  const user = useSelector((state) => state.user.username.id);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  console.log(user);
  console.log(orders);

  useEffect(() => {
    dispatch(getOrders(user));
  }, []);

  return (
    <div className={style.Wrapper}>
      <div className={style.OrderWrapper}>
        <h3></h3>
        <div className={style.mainWrapper}>
          {orders.length ? (
            orders.map((o) => (
              <>
                <div className={style.OrderDiv}>
                  <p>Order ID: {o.id}</p>
                  <p>Total: ${o.amount}</p>
                  <div className={style.imageDiv}>
                    {o.Products.map((pr) => (
                      <Link to={`/products/${pr.id}`}>
                        {" "}
                        <img
                          className={style.orderImg}
                          src={pr.image}
                          alt={pr.title}
                          title={pr.title}
                        />{" "}
                      </Link>
                    ))}
                  </div>

                  <p>{new Date(o.purchaseDate).toLocaleString()}</p>
                </div>
              </>
            ))
          ) : (
            <div className={style.noOrders}>
              <h1>You have not placed any order yet.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
