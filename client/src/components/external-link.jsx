
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";


const ExternalLink = (props) => {
  const { anchorLink, linkText } = props;
  return (
    <a href={anchorLink} css={linkCss} >{linkText}</a>
  )
}

export default ExternalLink;

const linkCss = css`
  color: ${theme.colors.themeColor};
  ${theme.css.typography.linkText};
`;

const variantCss = css`
  color: ${theme.colors.themeColor};
  ${theme.css.typography.linkText};
`;