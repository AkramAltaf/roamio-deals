/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFlip,
  Pagination,
  Navigation,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import customer1 from "../images/customer-1.svg";
import starIcon from "../images/star.svg";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

const customerData = [
  {
    id: 1,
    name: "Amaan Black",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus blanditiis earum magnam aspernatur perferendis. Enim,
    voluptates? Ipsam corrupti doloribus officiis, ad quibusdam
    delectus a? Fugiat harum optio provident nobis incidunt?`,
    image: customer1,
    profession: "UI designer",
  },
  {
    id: 2,
    name: "Amaan Black",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus blanditiis earum magnam aspernatur perferendis. Enim,
    voluptates? Ipsam corrupti doloribus officiis, ad quibusdam
    delectus a? Fugiat harum optio provident nobis incidunt?`,
    image: customer1,
    profession: "UI designer",
  },
  {
    id: 3,
    name: "Amaan Black",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus blanditiis earum magnam aspernatur perferendis. Enim,
    voluptates? Ipsam corrupti doloribus officiis, ad quibusdam
    delectus a? Fugiat harum optio provident nobis incidunt?`,
    image: customer1,
    profession: "UI designer",
  },
  {
    id: 4,
    name: "Amaan Black",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus blanditiis earum magnam aspernatur perferendis. Enim,
    voluptates? Ipsam corrupti doloribus officiis, ad quibusdam
    delectus a? Fugiat harum optio provident nobis incidunt?`,
    image: customer1,
    profession: "UI designer",
  },
];

const Customer = (props) => {
  const { name, description, image, profession } = props;
  return (
    <div css={sliderWrapper}>
      <div css={descriptionCss}>{description}</div>
      <div css={dividerLineCss}></div>
      <div css={profileContainerCss}>
        <img src={image} alt="" />
        <div>
          <div css={nameCss}>{name}</div>
          <div css={professionCss}>{profession}</div>
        </div>
      </div>
    </div>
  );
};
const CustomerSlider = () => {
  return (
    <section className="ptb" css={sectionCss}>
      <div className="container">
        <div css={customerWrapperCss}>
          <div css={customerContentContainer}>
            <div css={titleCss}>Listen to Our Happy Customers</div>
            <div css={subtitleCss}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna
              purus, convallis ac augue vulputate, dictum consequat velit. Sed
              fermentum feugiat diam, vel suscipit enim. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </div>
            <div css={reviewWrapperCss}>
              <div css={reviewContainerCss}>
                <div css={reviewCss}>13M+</div>
                <div css={reviewTextCss}>Happy Customers</div>
              </div>
              <div css={reviewContainerCss}>
                <div css={reviewCss}>
                  <span>5.0</span> <img src={starIcon} alt="" />
                </div>
                <div css={reviewTextCss}>Overall Rating</div>
              </div>
            </div>
          </div>
          <div css={customerSliderContainer}>
            <Swiper
              loop
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                renderBullet: (_, className) =>
                  `<button class="${className}"></button>`,
              }}
              effect={"cards"}
              grabCursor={true}
              navigation={true}
              modules={[
                EffectFlip,
                Pagination,
                Navigation,
                EffectCards,
                Autoplay,
              ]}
            >
              {customerData.map((customer) => (
                <SwiperSlide key={customer.id}>
                  <Customer
                    image={customer.image}
                    profession={customer.profession}
                    name={customer.name}
                    description={customer.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSlider;

const sectionCss = css`
  ${theme.css.gradient.themeGradient};
`;

const customerWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;

  ${mq("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const customerContentContainer = css`
  max-width: ${514 / 16}rem;
`;

const titleCss = css`
  color: #fff;
  font-size: ${20 / 16}rem;
  font-weight: 600;
  letter-spacing: 0.16px;
  margin-bottom: 1em;

${mq("md")}{
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.16px;
  margin-bottom: 1em;
}

`;

const subtitleCss = css`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.08px;
  margin-bottom: 1.5em;
`;

const reviewWrapperCss = css`
   
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  
  ${mq("md")} {
  display: flex;
  gap: ${80 / 16}em;
  }

`;

const reviewContainerCss = css`
  text-align: center;
`;

const reviewCss = css`
  color: #fff;
  font-size: ${21 / 16}rem;
  font-weight: 600;
  letter-spacing: 1.6px;

${mq("md")}{
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.16px;
}

`;

const reviewTextCss = css`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;
`;

const sliderWrapper = css`
  background: #fff;
  padding: ${20 / 16}em;
  ${theme.css.borderRadius.default};

  ${mq("md")}{
    background: #fff;
    padding: ${40 / 16}em;
    ${theme.css.borderRadius.default};

  }
`;

const descriptionCss = css`
  color: ${theme.colors.primaryText};
  font-size: ${12 / 16}rem;
  letter-spacing: 0.07px;

  ${mq("md")}{
  color: ${theme.colors.primaryText};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.07px;
  }
`;

const dividerLineCss = css`
  margin: ${14 / 16}em 0;
  height: 1px;
  background: ${theme.colors.black};

  ${mq("md")}{
  height: 1px;
  margin: ${20 / 16}em 0;
  background: ${theme.colors.black};
  }
`;

const profileContainerCss = css`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const nameCss = css`
  color: ${theme.colors.primaryText};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.07px;
`;

const professionCss = css`
  color: #4a4a4a;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.06px;
`;

const customerSliderContainer = css`
  max-width: ${300 / 16}rem;
  width: 100%;

  ${mq("md")}{
    max-width: ${493 / 16}rem;
}

  .swiper {
    max-width: ${441 / 16}rem;
    width: 100%;
    padding-bottom: 2em;
    z-index: auto;
  }

  .swiper-pagination {
    display: flex;
    gap: 0 0.5em;
    justify-content: center;

    .swiper-pagination-bullet {
      border: none;
      background: ${theme.colors.white};
      padding: 0;
      width: 1em;
      height: ${4 / 16}em;
      margin: 0;
      ${theme.css.borderRadius.default};
    }

    .swiper-pagination-bullet-active {
      background: ${theme.colors.white};
      width: 2em;
    }
  }

  .swiper-button-prev {
     display: none;

    ${mq("md")}{
      display: block;
      left: ${-90 / 16}em;
      color: ${theme.colors.white};
    }
  }

  .swiper-button-next {
    display: none;

    ${mq("md")}{
    display: block;
    right: ${-90 / 16}em;
    color: ${theme.colors.white};
    }
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: ${20 / 16}rem;
  }
`;
