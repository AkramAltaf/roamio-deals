/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import staycationDesktop from "../images/roamio-staycations.svg";
import activitiesDesktop from "../images/roamio-activities.svg";
import dealsDesktop from "../images/roamio-deals.svg";
import visaDesktop from "../images/roamio-visa.svg";
import staycationMobile from "../images/m-staycations-icon.svg";
import activitiesMobile from "../images/m-activities-icon.svg";
import dealsMobile from "../images/m-deals-icon.svg";
import visaMobile from "../images/m-visa-icon.svg";
import useViewportWidth from "../hooks/use-viewport-width";
import { mq } from "../styles/breakpoints";

const servicesData = [
  {
    id: 1,
    icon: staycationDesktop,
    mobileIcon: staycationMobile,
    title: "Staycations",
  },
  {
    id: 2,
    icon: activitiesDesktop,
    mobileIcon: activitiesMobile,
    title: "Activities",
  },
  {
    id: 3,
    icon: dealsDesktop,
    mobileIcon: dealsMobile,
    title: "Deals",
  },
  {
    id: 4,
    icon: visaDesktop,
    mobileIcon: visaMobile,
    title: "Visa",
  },
];

const RoamioServices = () => {
  const Services = (props) => {
    const { icon, mobileIcon, title } = props;
    const isLaptopView = useViewportWidth("md");
    return (
      <div css={roamioService(isLaptopView)}>
        {isLaptopView ? (
          <img src={icon} alt="" />
        ) : (
          <img src={mobileIcon} alt="" />
        )}
        <div css={titleCss}>{title}</div>
      </div>
    );
  };

  return (
    <section className="container" css={sectionCss}>
      <div css={containerCss}>
        <div css={roamioServicesContainer}>
          {servicesData.map((service) => {
            return (
              <Services
                key={service.id}
                icon={service.icon}
                title={service.title}
                mobileIcon={service.mobileIcon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoamioServices;

const sectionCss = css`
  padding-bottom: 10px;
`;

const containerCss = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const roamioServicesContainer = css`
  display: flex;
  justify-content: space-around;
  max-width: ${800 / 16}rem;
  padding: 1.5em 0;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  ${theme.css.boxShadow.boxShadowNone};
  ${theme.css.borderRadius.borderRadius16};
  position: relative;
  z-index: 9;

  ${mq("md")} {
    ${theme.css.boxShadow.boxShadowService};
    margin: -56px auto 0;
  }
`;

const roamioService = (isMobileView) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${theme.css.borderRadius.borderRadius15};
  border-right: ${isMobileView
    ? `1px solid ${theme.colors.themeColorLight}`
    : "none"};
  max-width: ${79 / 16}rem;
  height: ${79 / 16}rem;
  width: 100%;
  ${theme.css.gradient.themeGradient};

  img {
    width: ${30 / 16}rem;
    height: ${30 / 16}rem;
  }

  :last-of-type {
    border-right: none;
  }

  ${mq("md")} {
    ${theme.css.gradient.whiteGradient};
    ${theme.css.borderRadius.none};
    max-width: ${200 / 16}rem;
    height: unset;
  }
`;

const titleCss = css`
  ${theme.css.typography.mobileServicesText};
  color: ${theme.colors.white};
  margin-top: 6px;

  ${mq("md")} {
    font-size: 1em;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${theme.colors.themeColor};
    margin-top: 0.5em;
  }
`;
