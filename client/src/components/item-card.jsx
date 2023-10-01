/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Counter from "./counter";

const ItemCard = (props) => {

  return (
      <div css={ItemCardCss}>
        <div css={ItemCardTitle}>{props.product.title}</div>
        <div css={titleCss}>
          <span css={offerCss}>298</span>
          <span css={priceCss}>{props.product.price}</span>
          <span css={currencyCss}>{props.product.currency}</span>
        </div>
        <Counter />
      </div>
  );
};

export default ItemCard;

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
