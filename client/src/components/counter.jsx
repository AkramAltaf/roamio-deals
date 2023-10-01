/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import minusImage from "../images/minus-circle.svg";
import plusImage from "../images/plus-circle.svg";

const Counter = () => {
  return (
    <div css={countWrapperCss}>
      <img css={minusIcon} src={minusImage} alt="img" />
      <span css={countCss}>0</span>
      <img css={plusIcon} src={plusImage} alt="img" />
      <span css={quantityCss}>quantity</span>
    </div>
  );
};

export default Counter;

const countWrapperCss = css`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const minusIcon = css`
  cursor: pointer;
  display: block;
`;

const countCss = css`
  display: block;
`;

const plusIcon = css`
  cursor: pointer;
  display: block;
`;

const quantityCss = css`
  font-size: ${12 / 16}rem;
  font-weight: 400;
  display: block;
  color: #83878a;
`;
