import React from "react";
import { products } from "../data/products";

const Cart = () => {
  return (
    <div className="container">
      {products.length > 0 ? (
        products.map((item) => {
          return (
            <div key={item._id}>
              <img src={`${process.env.PUBLIC_URL + item.cardImg}`} alt="img" />
              <h2>{item.title}</h2>
              <div>{item.price}</div>
              <button>Remove</button>
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
