/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import price from "../images/price.svg";
import offer from "../images/offer.svg";
import support from "../images/support.svg";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

const serviceData = [
  {
    id: 1,
    image: price,
    title: "Best Price Guarantee",
    subtitle: "Best Recommendations according to your Interest",
  },
  {
    id: 2,
    image: offer,
    title: "Best Offer",
    subtitle: "Best Recommendations according to your Interest",
  },
  {
    id: 3,
    image: support,
    title: "24*7 Customer Support",
    subtitle: "Best Recommendations according to your Interest",
  },
];

const ServiceCard = (props) => {
  const { image, title, subtitle } = props;
  return (
    <div css={wrapperCss}>
      <img css={imageCss} src={image} alt="img" />
      <div css={titleCss}>{title}</div>
      <div css={subTitleCss}>{subtitle}</div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="ptb">
      <div className="container">
        <div css={containerWrapperCss}>
          {serviceData.map((service) => {
            return (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                subtitle={service.subtitle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

const containerWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${mq("md")} {
    justify-content: space-between;
  }
`;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14px;


${mq("md")}{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  }

`;

const imageCss = css`
  display: block;
  width: ${70 / 16}rem;
  height: ${70 / 16}rem;
  object-fit: contain;
`;

const titleCss = css`
  font-size: 16px;
  font-weight: 600;
  margin: 13px 0 13px;

${mq("md")}{
  ${theme.css.typography.linkText};
  color: ${theme.colors.black};
  margin: 1em 0 0.75em;
}
  
`;

const subTitleCss = css`
  text-align: center;
  ${theme.css.typography.linkText2};
  color: ${theme.colors.black};
  opacity: 0.7;
`;
