/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const Progress = () => {
  return (
    <div css={progressCss}>
      <div css={progressContent}>
        <progress id="file" value="50" max="100">
          50%
        </progress>
      </div>
      <div css={progressContent}>
        <progress id="file" value="50" max="100">
          50%
        </progress>
      </div>
      <div css={progressContent}>
        <progress id="file" value="0" max="100">
          0
        </progress>
      </div>
      <div css={progressContent}>
        <progress id="file" value="0" max="100">
          0
        </progress>
      </div>
      <div css={progressContent}>
        <progress id="file" value="0" max="100">
          0
        </progress>
      </div>
    </div>
  );
};

export default Progress;

const progressCss = css`
  display: flex;
  flex-direction: column;
`;

const progressContent = css`
  progress {
    width: 281px;
  }
`;
