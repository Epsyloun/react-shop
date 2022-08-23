import React, { useState,useContext } from "react";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";
import AppContext from "../context/AppContext";

const MyOrder = ({animation, toggleOrders, setToggleOrders}) => {

  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={`MyOrder ${animation}`}>
      <div className="title-container">
        <img onClick={()=>setToggleOrders(!toggleOrders)} src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
      {state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>{sumTotal()}</p>
      </div>
      <button className="primary-button">Checkout</button>
    </aside>
  );
};

export default MyOrder;
