/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";
import { PropTypes } from "prop-types";

const Button = (props) => {
  const { icon, onClick } = props;
  return (
    <button css={buttonCss} onClick={onClick} {...props}>
      {icon && <img src={icon} css={iconCss} alt="" />}
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

export default Button;

const buttonCss = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: ${10 / 16}em;
  font-size: ${14 / 16}rem;
  white-space: nowrap;
  user-select: none;
  ${theme.css.borderRadius.borderRadius8};
  ${theme.css.gradient.themeGradient};
  color: ${theme.colors.black};
  border: none;

  ${mq("md")} {
    padding: ${20 / 16}em;
  }
`;

const iconCss = css`
  width: ${20 / 16}rem;
  height: ${20 / 16}rem;
`;
