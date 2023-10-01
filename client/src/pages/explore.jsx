/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icon from "../images/star.svg";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

import Button from "../components/button";

const Explore = () => {
  return (
    <section className="ptb">
      <div className="container">
        <div css={exploreCss}>Explore the peak of Dubai</div>
        <div css={buttonsContainer}>
          <Button icon={icon}>Top Trending in Dubai</Button>
          <Button icon={icon}>Top Discount</Button>
          <Button icon={icon}>Top Rated</Button>
          <Button icon={icon}>Top Selling</Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;

const exploreCss = css`
  margin-bottom: ${24 / 16}rem;
  font-size: 20px;
  font-weight: 600;

  ${mq("md")} {
    margin-bottom: ${24 / 16}rem;
    ${theme.css.typography.sectionHeaderText};
  }
`;

const buttonsContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  button {
    color: ${theme.colors.white};
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  ${mq("md")} {
    gap: 1.5em;
  }
`;
