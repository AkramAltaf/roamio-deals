import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {items.length > 0 ? (
        items.map((item) => {
          return (
            <div key={item._id}>
              <img src={`${process.env.PUBLIC_URL + item.cardImg}`} alt="img" />
              <h2>{item.title}</h2>
              <div>{item.price}</div>
              <button
                onClick={(item) => {
                  dispatch(remove(item._id));
                }}
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;
