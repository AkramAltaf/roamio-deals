/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const HotelServices = () => {
  return (
    <div>
      <div css={cancellationCss}>
        <div css={cancellation}>Free cancellation (24 Hours Prior)</div>
        <div css={cancellation}>Instant confirmation</div>
      </div>
      <div css={trendingCss}>
        <div css={trending}>trending</div>
        <div css={trending}>offer ending soon</div>
      </div>
    </div>
  );
};

export default HotelServices;

const cancellationCss = css`
  margin-top: ${15 / 16}em;
  display: flex;
  gap: 12px;
`;

const cancellation = css`
  border-radius: 4px;
  background: #edf2f8;
  color: #4a4a4a;
  font-size: ${14 / 16}rem;
  font-weight: 500;
  padding: 10px;
`;

const trendingCss = css`
  margin-top: ${15 / 16}em;
  display: flex;
  gap: 12px;
`;

const trending = css`
  border-radius: 4px;
  background: #fff3e3;
  color: #ff3500;
  font-size: ${14 / 16}rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 10px;
`;
