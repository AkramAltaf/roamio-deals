/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "./button";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import ItemCard from "./item-card";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(props.product));
  };

  return (
    <aside>
      <div css={sidebarCss}>
        <div css={headingCss}>Packages</div>
        <ItemCard product={props.product} />
        <div css={buttonCss}>
          <Button>Quick Checkout</Button>
          <Button onClick={(p) => handleAdd(p)}>Add to Cart</Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const sidebarCss = css`
  max-width: 357px;
  width: 100%;
  padding: 1em;
  border-radius: 15px;
  background: #fafafa;
`;

const buttonCss = css`
  button:nth-of-type(1) {
    border: 1px solid #fff5e9;
    display: inline-block;
    background: #fff5e9;
    border-radius: 10px;
    margin-bottom: 1em;
    text-align: center;
    font-weight: 500;
    font-size: ${16 / 16}rem;
    color: #ff3500;
    width: 100%;
  }
  button:nth-of-type(2) {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
    font-size: ${16 / 16}rem;
    color: #fff;
    width: 100%;
  }
`;

const headingCss = css`
  color: #282828;
  font-size: ${16 / 16}rem;
  font-weight: 500;
  margin-bottom: ${15 / 16}em;
`;
