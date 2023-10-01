/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import category1 from "../images/category-1.svg";
import category2 from "../images/category-2.svg";
import category3 from "../images/category-3.svg";
import category4 from "../images/category-4.svg";
import category5 from "../images/category-5.svg";
import category6 from "../images/category-6.svg";
import category7 from "../images/category-7.svg";
import category8 from "../images/category-view-all.svg";
import chevronIcon from "../images/chevron-right-white.svg";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

const categoriesData = [
  {
    id: 1,
    image: category1,
    text: "Staycation",
    anchorLink: "#",
  },
  {
    id: 2,
    image: category2,
    text: "Water Adventure",
    anchorLink: "#",
  },
  {
    id: 3,
    image: category3,
    text: "Desert Safari",
    anchorLink: "#",
  },
  {
    id: 4,
    image: category4,
    text: "Sports",
    anchorLink: "#",
  },
  {
    id: 5,
    image: category5,
    text: "Parks",
    anchorLink: "#",
  },
  {
    id: 6,
    image: category6,
    text: "Attraction",
    anchorLink: "#",
  },
  {
    id: 7,
    image: category7,
    text: "Combo Packs",
    anchorLink: "#",
  },
];

const Category = (props) => {
  const { anchorLink, image, text } = props;
  return (
    <a href={anchorLink} css={categoryContainer}>
      <img src={image} css={imageCss} alt="img" />
      <div css={textCss}>{text}</div>
    </a>
  );
};

const CategoryPage = () => {
  return (
    <section className="ptb">
      <div className="container">
        <div css={sectionHeaderCss}>
          <div css={titleCss}>Categories</div>
        </div>
        <div css={categoriesContainer}>
          {categoriesData.map((category, index) => {
            return (
              <Category
                key={index}
                anchorLink={category.anchorLink}
                image={category.image}
                text={category.text}
              />
            );
          })}
          <a href="#cat" css={viewAllLinkCss}>
            <img src={category8} css={viewAllImageCss} alt="img" />
            <div css={viewAllTextCss}>
              View All <img src={chevronIcon} alt="" />{" "}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

const categoryContainer = css`
  position: relative;

  img {
    display: block;
  }
`;

const categoriesContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
`;

const imageCss = css``;

const textCss = css`
  position: absolute;
  bottom: 1em;
  left: 1em;
  ${theme.css.typography.categoryText};
  color: ${theme.colors.white};
`;

const sectionHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75em;
`;

const titleCss = css`

  font-size: 20px;
  font-weight: 600;
    
${mq("md")}{
  ${theme.css.typography.sectionHeaderText};
}
   
`;

const viewAllLinkCss = css`
  ${theme.css.gradient.themeGradient};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${282 / 16}rem;
  height: ${282 / 16}rem;
  ${theme.css.borderRadius.borderRadius12};
`;

const viewAllImageCss = css`
  width: ${120 / 16}rem;
  height: ${120 / 16}rem;
`;

const viewAllTextCss = css`
  position: absolute;
  bottom: 1em;
  left: 1em;
  ${theme.css.typography.categoryText};
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
