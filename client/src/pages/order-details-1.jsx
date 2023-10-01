/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner from "../images/hero-1.svg";
import minusImage from "../images/minus-circle.svg";
import plusImage from "../images/plus-circle.svg";
import ItemCard from "../components/item-card";
import Button from "../components/button";
import order1 from "../images/order-img-1.svg";
import order2 from "../images/order-img-2.svg";
import order3 from "../images/order-img-3.svg";
import order4 from "../images/order-img-4.svg";
import star from "../images/star-dark.svg";
import location from "../images/location.svg";
import starWhite from "../images/star-white.svg";
import { useDispatch } from "react-redux";
import { add } from "../store/productSlice";
import { useParams } from "react-router";
import dealsData from "../data/dealsData";

const SideBarData = [
  {
    id: 1,
    heading: "Cheers at The View for 1 adult",
    offerPrice: "250 AED",
    price: 220,
    currency: "AED / night",
    minusImg: minusImage,
    count: 0,
    plusImg: plusImage,
    quantity: "quantity",
  },
  {
    id: 1,
    heading: "Cheers at The View for 1 adult",
    offerPrice: "250 AED",
    price: 220,
    currency: "AED / night",
    minusImg: minusImage,
    count: 0,
    plusImg: plusImage,
    quantity: "quantity",
  },
];

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(props.product));
  };

  return (
    <section>
      <div css={sidebarCss}>
        <div css={headingCss}>Packages</div>
        {SideBarData.map((card, index) => {
          return (
            <ItemCard
              key={index}
              heading={card.heading}
              title={card.title}
              offerPrice={card.offerPrice}
              price={card.price}
              currency={card.currency}
              minusImg={card.minusImg}
              count={card.count}
              plusImg={card.plusImg}
              quantity={card.quantity}
            />
          );
        })}
        <div css={buttonCss}>
          <Button>Quick Checkout</Button>
          <Button onClick={(p) => handleAdd(p)}>Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

const OrderDetails1 = () => {
  const { productId } = useParams();
  const product = dealsData.find((p) => p._id === productId);

  return (
    <section css={sectionCss}>
      <div className="container">
        <div css={orderWrapperCss}>
          <div css={swiperContainer}>
            <Swiper
              loop
              navigation={true}
              slidesPerView={1}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <img css={slideImgCss} src={banner} alt="banner" />
              </SwiperSlide>
              <SwiperSlide>
                <img css={slideImgCss} src={banner} alt="banner" />
              </SwiperSlide>
              <SwiperSlide>
                <img css={slideImgCss} src={banner} alt="banner" />
              </SwiperSlide>
            </Swiper>
            <div css={imageWrapper}>
              <img src={order1} alt="" />
              <img src={order2} alt="" />
              <img src={order3} alt="" />
              <img src={order4} alt="" />
            </div>
            <div css={orderContentCss}>
              <div css={orderHeadingCss}>{product.title}</div>
            </div>
            <div css={ratingWrapper}>
              <div>
                <img css={starIcon} src={star} alt="" />
                <img css={starIcon} src={star} alt="" />
                <img css={starIcon} src={star} alt="" />
                <img css={starIcon} src={star} alt="" />
              </div>
              <span css={reviewCss}>(4 reviews)</span>
              <span css={ratingCss}>Excellent</span>
            </div>
            <div css={locationCss}>
              <img src={location} alt="" />
              <div>Dubai</div>
            </div>
            <div css={cancellationCss}>
              <div css={cancellation}>Free cancellation (24 Hours Prior)</div>
              <div css={cancellation}>Instant confirmation</div>
            </div>
            <div css={trendingCss}>
              <div css={trending}>trending</div>
              <div css={trending}>offer ending soon</div>
            </div>
            <div css={hightlight}>Highlights</div>
            <div css={hightlightTitle}>
              Enjoy the birds-eye view of the palm from a 240 meters high
              viewing deck, choose between 2 packages of Cheers at The View or
              High Tea by St Regis at The View At The Palm from AED 220!
            </div>
            <div css={packageWrapper}>
              <div css={listHeadingCss}>Packages:</div>
              <ul css={listTitleCss}>
                <li>Option 1: Cheers at The View for 1 adult for AED 220</li>
                <li>
                  Option 2: High Tea by St Regis at The View at The Palm for 1
                  person for AED 275
                </li>
              </ul>
            </div>
            <div>
              <div css={listHeadingCss}>Deal includes:</div>
              <ul css={listTitleCss}>
                <li>
                  Cheers at The View: 2 Glasses or 2 bottles of house beverages
                  (option 1)
                </li>
                <li>Access to Exhibit Gallery (options 1 and 2)</li>
                <li>Access to the Immersive theatre (options 1 and 2)</li>
                <li>Access to the Viewing Deck (options 1 and 2)</li>
                <li>Access to Level 52 VIP lounge (options 1 and 2)</li>
                <li>
                  High Tea by St Regis: Traditional treat package served at the
                  VIP lounge with water, juice, Tea or Coffee, 5 savory items, 5
                  sweet items, 2 scones served with clotted cream, and signature
                  strawberry and lavender jam (option 2)
                </li>
              </ul>
            </div>
            <div>
              <div css={listHeadingCss}>Taxes:</div>
              <ul css={listTitleCss}>
                <li>
                  Rates are subject to 10% service charge, 6% tourism fee, 4%
                  municipality fee and AED 15 destination fee per night per room
                  are payable to the resort upon check-in
                </li>
              </ul>
            </div>
            <div>
              <div css={conditionHeading}>Conditions:</div>
              <ul css={conditionList}>
                <li>Valid until 30 September, 2023.</li>
                <li>Not valid on public holidays & special events.</li>
                <li>Booking Requirements:</li>
                <ul>
                  <li>
                    Prior booking is required at least 48 hours in advance;
                    Check the room availability with the hotel before purchasing
                    the voucher.
                  </li>
                </ul>
                <li>Required booking details:</li>
                <ul>
                  <li>
                    Name, contact number, preferred date of stay, time of
                    arrival, and copy of Cobone voucher
                  </li>
                </ul>
                <li>Check-in time:</li>
                <ul>
                  <li>03:00 pm</li>
                </ul>
                <li>Check-out time:</li>
                <ul>
                  <li>12:00 noon</li>
                </ul>
                <li>
                  For availability & bookings please WhatsApp Cobone
                  reservations team on +97145562099, daily between 10:30 am to
                  07:30 pm
                </li>
              </ul>
            </div>
            <div css={reviewHeading}>Reviews & Feedback</div>
            <div css={reviewCardWrapper}>
              <div css={review}>
                <div css={ratingStar}>
                  <span>4.5</span> <img src={starWhite} alt="" />
                </div>
                <div css={ratingTitle}>Excellent</div>
                <div css={ratingReview}>(1.5K reviews)</div>
              </div>
              <div css={borderCss}></div>
              <div css={feedbackWrapper}>
                <div css={feedback}>
                  <div css={feedbackContent}>
                    <div>Excellent</div>
                  </div>
                  <div css={feedbackContent}>
                    <div>Very Good</div>
                  </div>
                  <div css={feedbackContent}>
                    <div>Average</div>
                  </div>
                  <div css={feedbackContent}>
                    <div>Poor</div>
                  </div>
                  <div css={feedbackContent}>
                    <div>Terrible</div>
                  </div>
                </div>
                <div css={progressCss}>
                  <div css={progressContent}>
                    <progress id="file" value="50" max="100">
                      50%
                    </progress>
                  </div>
                  <div css={progressContent}>
                    <progress id="file" value="50" max="100">
                      50%
                    </progress>
                  </div>
                  <div css={progressContent}>
                    <progress id="file" value="0" max="100">
                      0
                    </progress>
                  </div>
                  <div css={progressContent}>
                    <progress id="file" value="0" max="100">
                      0
                    </progress>
                  </div>
                  <div css={progressContent}>
                    <progress id="file" value="0" max="100">
                      0
                    </progress>
                  </div>
                </div>
                <div css={reviewNumber}>
                  <div>1</div>
                  <div>1</div>
                  <div>0</div>
                  <div>0</div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar product={product} />
        </div>
      </div>
    </section>
  );
};

export default OrderDetails1;

const sectionCss = css`
  padding: ${60 / 16}em 0;
`;

const orderWrapperCss = css`
  display: flex;
  gap: 1em;

  .swiper-button-prev,
  .swiper-button-next {
    color: ${theme.colors.white};
  }
  .swiper-button-prev::after,
  .swiper-button-next:after {
    font-size: ${16 / 16}rem;
  }
`;

const swiperContainer = css`
  max-width: 70%;
`;

const slideImgCss = css`
  width: 100%;
`;

const imageWrapper = css`
  margin-top: 1.5em;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const orderContentCss = css``;

const orderHeadingCss = css`
  margin-top: 1.5em;
  color: #282828;
  font-size: ${36 / 16}rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const ratingWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: ${15 / 16}em;
`;

const starIcon = css`
  width: 16px;
`;

const reviewCss = css`
  color: #83878a;
  font-size: ${20 / 16}rem;
  font-weight: 400;
`;

const ratingCss = css`
  color: #4a4a4a;
  font-size: ${20 / 16}rem;
  font-weight: 400;
`;

const locationCss = css`
  margin-top: ${15 / 16}em;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 14.675px;
    height: 18px;
  }

  div {
    color: #4a4a4a;
    font-size: ${18 / 16}rem;
    font-weight: 500;
  }
`;

const cancellationCss = css`
  margin-top: ${15 / 16}em;
  display: flex;
  gap: 12px;
`;

const cancellation = css`
  border-radius: 4px;
  background: #edf2f8;
  color: #4a4a4a;
  font-size: ${14 / 16}rem;
  font-weight: 500;
  padding: 10px;
`;

const trendingCss = css`
  margin-top: ${15 / 16}em;
  display: flex;
  gap: 12px;
`;

const trending = css`
  border-radius: 4px;
  background: #fff3e3;
  color: #ff3500;
  font-size: ${14 / 16}rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 10px;
`;

const hightlight = css`
  margin-top: ${20 / 16}em;
  margin-bottom: ${15 / 16}em;
  color: #282828;
  font-size: ${24 / 16}rem;
  font-weight: 500;
`;

const hightlightTitle = css`
  color: #4a4a4a;
  font-size: ${14 / 16}rem;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: ${15 / 16}em;
`;

const packageWrapper = css``;

const listTitleCss = css`
  li {
    color: #4a4a4a;
    font-size: ${14 / 16}em;
    font-weight: 400;
  }
`;

const listHeadingCss = css`
  color: #282828;
  font-size: ${16 / 16}rem;
  font-weight: 500;
`;

const conditionHeading = css`
  color: #282828;
  font-size: ${14 / 16}rem;
  font-weight: 500;
`;

const conditionList = css`
  li {
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }
`;

const reviewHeading = css`
  color: #282828;
  font-size: ${24 / 16}rem;
  font-weight: 500;
  margin-bottom: ${15 / 16}em;
`;

const reviewCardWrapper = css`
  max-width: 624px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #cdcfd0;
  background: #fff;
  padding: 15px 20px;
  display: flex;
  gap: 40px;
`;

const review = css`
  text-align: center;
`;

const ratingStar = css`
  border-radius: 10px;
  background: linear-gradient(180deg, #fe9000 0%, #ff3500 100%);
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    font-size: ${30 / 16}rem;
    font-weight: 500;
  }
`;

const ratingTitle = css`
  color: #1a2b48;
  font-size: ${20 / 16}rem;
  font-weight: 400;
  line-height: 36px;
  margin-top: ${16 / 16}em;
  margin-bottom: ${9 / 16}em;
`;

const ratingReview = css`
  color: #ff3500;
  font-size: ${14 / 16}rem;
  font-weight: 400;
  line-height: 21px;
`;

const borderCss = css`
  width: 1px;
  height: 140px;
  background: #cdcfd0;
`;

const feedbackWrapper = css`
  display: flex;
  gap: 1em;
`;

const feedback = css``;

const feedbackContent = css`
  display: flex;
  gap: 1em;
`;

const progressCss = css`
  display: flex;
  flex-direction: column;
`;

const progressContent = css`
  progress {
    width: 281px;
  }
`;

const reviewNumber = css``;

const sidebarCss = css`
  max-width: 357px;
  width: 100%;
  padding: 1em;
  border-radius: 15px;
  background: #fafafa;
`;

const buttonCss = css`
  button:nth-of-type(1) {
    border: 1px solid #fff5e9;
    display: inline-block;
    background: #fff5e9;
    border-radius: 10px;
    margin-bottom: 1em;
    text-align: center;
    font-weight: 500;
    font-size: ${16 / 16}rem;
    color: #ff3500;
    width: 100%;
  }
  button:nth-of-type(2) {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    font-weight: 500;
    font-size: ${16 / 16}rem;
    color: #fff;
    width: 100%;
  }
`;

const headingCss = css`
  color: #282828;
  font-size: ${16 / 16}rem;
  font-weight: 500;
  margin-bottom: ${15 / 16}em;
`;
