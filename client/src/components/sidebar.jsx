/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./button";
import Counter from "./counter";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const Sidebar = () => {
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);

  const handleAdd = () => {
    console.log("Add");
  };

  return (
    <aside>
      <div css={sidebarCss}>
        <div css={headingCss}>Packages</div>
        {/* <ItemCard product={props.product} /> */}
        <div css={ItemCardCss}>
          <div css={ItemCardTitle}>{product.name}</div>
          <div css={titleCss}>
            <span css={offerCss}>298</span>
            <span css={priceCss}>{product.price}</span>
            <span css={currencyCss}>{product.currency}</span>
          </div>
          <Counter />
        </div>
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

const ItemCardCss = css`
  padding-bottom: ${16 / 16}em;
  margin-bottom: ${15 / 16}em;
  padding-right: ${20 / 16}em;
  padding-left: ${20 / 16}em;
  padding-top: ${16 / 16}em;
  border: 1px solid #cdcfd0;
  border-radius: 12px;
  background: #fff;
`;

const ItemCardTitle = css`
  margin-bottom: ${16 / 16}em;
  font-size: ${16 / 16}rem;
  font-weight: 500;
  color: #282828;
`;

const titleCss = css`
  margin-bottom: ${16 / 16}em;
`;

const offerCss = css`
  text-decoration: line-through;
  font-size: ${12 / 16}rem;
  margin-right: 8px;
  font-weight: 400;
  color: #4a4a4a;
`;

const priceCss = css`
  font-size: ${18 / 16}rem;
  margin-right: 4px;
  font-weight: 500;
  color: #ff3500;
`;

const currencyCss = css`
  font-size: ${12 / 16}rem;
  font-weight: 400;
  color: #4a4a4a;
`;
