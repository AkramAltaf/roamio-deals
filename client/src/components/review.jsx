/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import starWhite from "../images/star-white.svg";
import Progress from "./progress";

const Review = () => {
  return (
    <div>
      <div css={reviewHeading}>Reviews & Feedback</div>
      <div css={reviewCardWrapper}>
        <div css={review}>
          <div css={ratingStar}>
            <span>4.5</span> <img src={starWhite} alt="" />
          </div>
          <div css={ratingTitle}>Excellent</div>
          <div css={ratingReview}>(1.5K reviews)</div>
        </div>
        <div css={borderCss}></div>
        <div css={feedbackWrapper}>
          <div css={feedback}>
            <div css={feedbackContent}>
              <div>Excellent</div>
            </div>
            <div css={feedbackContent}>
              <div>Very Good</div>
            </div>
            <div css={feedbackContent}>
              <div>Average</div>
            </div>
            <div css={feedbackContent}>
              <div>Poor</div>
            </div>
            <div css={feedbackContent}>
              <div>Terrible</div>
            </div>
          </div>
          <Progress />
          <div css={reviewNumber}>
            <div>1</div>
            <div>1</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

const reviewHeading = css`
  color: #282828;
  font-size: ${24 / 16}rem;
  font-weight: 500;
  margin-bottom: ${15 / 16}em;
`;

const reviewCardWrapper = css`
  max-width: 624px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #cdcfd0;
  background: #fff;
  padding: 15px 20px;
  display: flex;
  gap: 40px;
`;

const review = css`
  text-align: center;
`;

const ratingStar = css`
  border-radius: 10px;
  background: linear-gradient(180deg, #fe9000 0%, #ff3500 100%);
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    font-size: ${30 / 16}rem;
    font-weight: 500;
  }
`;

const ratingTitle = css`
  color: #1a2b48;
  font-size: ${20 / 16}rem;
  font-weight: 400;
  line-height: 36px;
  margin-top: ${16 / 16}em;
  margin-bottom: ${9 / 16}em;
`;

const ratingReview = css`
  color: #ff3500;
  font-size: ${14 / 16}rem;
  font-weight: 400;
  line-height: 21px;
`;

const borderCss = css`
  width: 1px;
  height: 140px;
  background: #cdcfd0;
`;

const feedbackWrapper = css`
  display: flex;
  gap: 1em;
`;

const feedback = css``;

const feedbackContent = css`
  display: flex;
  gap: 1em;
`;

const reviewNumber = css``;
