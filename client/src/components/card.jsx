/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import heartIcon from "../images/heart-icon.svg";
import locationIcon from "../images/location.svg";
import starIcon from "../images/star.svg";

const Card = (props) => {
  const {
    _id,
    cardImg,
    title,
    location,
    rating,
    reviewCount,
    review,
    price,
    currency,
    offer,
  } = props;

  return (
    <div css={cardCss}>
      <Link to={`/deals/${_id}`}>
        <div css={cardImageWrapCss}>
          <img
            src={`${process.env.PUBLIC_URL + cardImg}`}
            alt="img"
            css={cardImageCss}
          />
          <img src={heartIcon} alt="img" css={heartIconCss} />
        </div>
        <div css={descriptionCss}>
          <div css={titleCss}>{title}</div>
          <div css={locationCss}>
            <img src={locationIcon} alt="img" /> <span>{location}</span>
          </div>
          <div css={ratingCss}>
            <div css={starCss}>
              <span css={starRatingCss}>{rating}</span>
              <img css={ratingIconCss} src={starIcon} alt="img" />
            </div>
            <span css={reviewCountCss}>{reviewCount}</span>
            <span css={reviewCss}>{review}</span>
          </div>
          <div css={priceContainerCss}>
            <span css={priceCss}>{price}</span>
            <span css={currencyCss}>{currency}</span>
            <span css={offerCss}>{offer}% OFF</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

const cardCss = css`
  border-radius: 15px;
  border: 1px solid rgba(131, 135, 138, 0.5);
  scroll-snap-align: start;
  cursor: pointer;
`;

const cardImageWrapCss = css`
  position: relative;
`;

const cardImageCss = css`
  display: block;
  max-width: 100%;
`;

const heartIconCss = css`
  position: absolute;
  top: 5px;
  right: 2px;
`;

const descriptionCss = css`
  padding: 1em;
`;

const titleCss = css`
  ${theme.css.typography.cardTitle};
  color: ${theme.colors.primaryText};
  margin-bottom: ${10 / 16}em;
`;

const locationCss = css`
  color: #4a4a4a;
  font-size: 0.75rem;
  font-weight: 400;
`;

const ratingCss = css`
  display: flex;
  align-items: center;
  gap: ${5 / 16}em;
  margin: ${10 / 16}em 0 1.5em;
`;

const starCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${2 / 16}em;
  width: ${36 / 16}rem;
  height: ${18 / 16}rem;
  ${theme.css.gradient.themeGradient};
  ${theme.css.borderRadius.borderRadius3};
`;

const starRatingCss = css`
  ${theme.css.typography.ratingText};
  color: ${theme.colors.white};
`;

const ratingIconCss = css``;

const reviewCountCss = css`
  color: #83878a;
`;

const reviewCss = css`
  color: #4a4a4a;
`;

const priceContainerCss = css`
  display: flex;
  align-items: center;
`;

const priceCss = css`
  ${theme.css.typography.priceText};
  color: ${theme.colors.black};
  margin-right: 0.2em;
`;

const currencyCss = css`
  ${theme.css.typography.currencyText};
  color: ${theme.colors.black800};
  margin-right: ${20 / 16}em;
`;
const offerCss = css`
  display: block;
  width: ${41 / 16}rem;
  padding: ${6 / 16}em;
  ${theme.css.gradient.themeGradient};
  ${theme.css.typography.offerText};
  ${theme.css.borderRadius.borderRadius4};
  color: ${theme.colors.orange};
`;
