/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import theme from "../styles/theme";
import banner from "../images/hero-1.svg";
import RoamioServices from "../pages/roamio-services";
import useViewportWidth from "../hooks/use-viewport-width";

const Hero = () => {
  const isLaptopView = useViewportWidth("md");
  return (
    <div className="container" css={swiperContainerCss}>
      <Swiper loop navigation={true} slidesPerView={1} modules={[Navigation]}>
        <SwiperSlide>
          <img css={bannerImgCss} src={banner} alt="banner" />
          <div css={bannerContentContainer}>
            <div css={titleWrapperCss}>
              <div css={HeaderCss} data-swiper-parallax="-200">
                Stay & Play Kids Go Free Offer
              </div>
              <div css={titleCss} data-swiper-parallax="-100">
                1 paying adult can now stay for free in the same room booked
                with the parents.
              </div>
              <a href="#" css={linkCss}>
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img css={bannerImgCss} src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img css={bannerImgCss} src={banner} alt="banner" />
        </SwiperSlide>
      </Swiper>
      {isLaptopView && <RoamioServices />}
    </div>
  );
};

export default Hero;

const swiperContainerCss = css`
  margin-top: 54px;
  margin-bottom: 40px;

  .swiper-button-prev,
  .swiper-button-next {
    color: ${theme.colors.white};
  }

  .swiper-button-prev::after,
  .swiper-button-next:after {
    font-size: ${20 / 16}rem;
  }
`;

const bannerContentContainer = css`
  max-width: ${403 / 16}rem;
  width: 100%;
  position: absolute;
  top: 50%;
  left: ${95 / 16}em;
  transform: translateY(-50%);
`;

const titleWrapperCss = css``;

const HeaderCss = css`
  ${theme.css.typography.bannerHeaderText};
`;

const titleCss = css`
  ${theme.css.typography.currencyText};
  color: ${theme.colors.white};
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5em;
  margin-top: 0.5em;
`;

const linkCss = css`
  display: inline-block;
  background: ${theme.colors.white};
  ${theme.css.borderRadius.borderRadius8};
  color: ${theme.colors.black};
  ${theme.css.typography.linkText2};
  padding: 1em 2em;
`;

const bannerImgCss = css`
  position: relative;
  display: block;
  width: 100%;
`;
