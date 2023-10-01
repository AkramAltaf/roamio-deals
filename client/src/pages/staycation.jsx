/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ExternalLink from "../components/external-link";
import theme from "../../src/styles/theme";
import Card from "../components/card";
import heartIcon from "../images/heart-icon.svg";
import location from "../images/location.svg";
import starIcon from "../images/star.svg";
import { mq } from "../styles/breakpoints";

const Staycation = () => {
  const cardData = [
    {
      cardImage: "/images/mariana.svg",
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
    {
      cardImage: "/images/paramount.svg",
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
    {
      cardImage: "/images/S19.svg",
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
    {
      cardImage: "/images/premier.svg",
      cardHeartIcon: heartIcon,
      title: "Mariana Hotel Deira",
      locationIcon: location,
      location: "Al Ain",
      rating: "4.2",
      ratingIcon: starIcon,
      reviewCount: "(4)",
      review: "Excellent",
      price: "1,800",
      currency: "AED",
      offer: 23,
    },
  ];

  return (
    <section className="ptb">
      <div className="container">
        <div css={sectionHeaderCss}>
          <div css={staycationCss}>Staycation</div>
          <ExternalLink anchorLink="#" linkText="View All" />
        </div>
        <div css={cardWrapperCss}>
          {cardData.map((card, index) => {
            return (
              <Card
                key={index}
                cardImg={card.cardImage}
                cardHeartIcon={card.cardHeartIcon}
                title={card.title}
                locationIcon={card.locationIcon}
                location={card.location}
                rating={card.rating}
                ratingIcon={card.ratingIcon}
                reviewCount={card.reviewCount}
                review={card.review}
                price={card.price}
                currency={card.currency}
                offer={card.offer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Staycation;

const sectionHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75em;
`;

const staycationCss = css`
  font-size: 20px;
  font-weight: 600;

  ${mq("md")} {
    ${theme.css.typography.sectionHeaderText};
  }
`;

const cardWrapperCss = css`
  display: flex;
  gap: 1.5em;
  overflow: auto;
  scroll-snap-type: x mandatory;
  ${theme.css.hiddenScrollbarCss};
`;
