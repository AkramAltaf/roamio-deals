/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const RatingLabel = ({ value }) => {
  return (
    <span css={reviewCss}>
      {value > 4
        ? "Excellent"
        : value >= 3
        ? "Good"
        : value >= 2
        ? "Fair"
        : value >= 1
        ? "Poor"
        : "Awful"}
    </span>
  );
};

export default RatingLabel;

const reviewCss = css`
  color: #4a4a4a;
`;
