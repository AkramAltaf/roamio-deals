/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import theme from "../styles/theme";

const Badge = (props) => {
  return (
    <span css={badgeCss} className="badge">
      {props.content}
    </span>
  );
};

export default Badge;

const badgeCss = css`
  ${theme.css.gradient.themeGradient};
  ${theme.css.borderRadius.borderRadius4};
  padding: 0 0.5em;
  font-size: ${11 / 16}rem;
  color: ${theme.colors.white};
`;
