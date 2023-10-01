/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ExternalLink from "../components/external-link";
import theme from "../styles/theme";
import Card from "../components/card";
import ski from "../images/ski-dubai.svg";
import avani from "../images/avani-palm.svg";
import madame from "../images/madame-tussauds.svg";
import location from "../images/location.svg";
import heartIcon from "../images/heart-icon.svg";
import starIcon from "../images/star.svg";
import { mq } from "../styles/breakpoints";

const Activities = () => {
  const cardData = [
    {
      cardImage: "/images/ski-dubai.svg",
      cardHeartIcon: heartIcon,
      title: "Ski Dubai Snow Classic Pass",
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
      cardImage: "/images/avani-palm.svg",
      cardHeartIcon: heartIcon,
      title: "Avani Palm View Dubai Hotel & Suites",
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
      cardImage: "/images/madame-tussauds.svg",
      cardHeartIcon: heartIcon,
      title: "Madame Tussauds Dubai-Entry Ticket",
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
          <div css={titleCss}>Activities</div>
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

export default Activities;

const sectionHeaderCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75em;
`;

const titleCss = css`
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
