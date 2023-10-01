/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import star from "../images/star-dark.svg";
import location from "../images/location.svg";
import { useParams } from "react-router";
import HotelDetails from "../components/hotel-details";
import Review from "../components/review";
import HotelServices from "../components/hotel-services";
import Sidebar from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProductDetails } from "../store/productSlice";
import { useEffect } from "react";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data: products, status } = useSelector((state) => state.product);
  const product = products && products.find((p) => p._id === productId);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (status === STATUSES.LOADING) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2 style={{ textAlign: "center" }}>Something went wrong</h2>;
  }

  return (
    <section css={sectionCss}>
      <div className="container">
        <div css={orderWrapperCss}>
          <div css={swiperContainer}>
            <img
              css={slideImgCss}
              src={`${process.env.PUBLIC_URL + product.cardImg}`}
              alt={product.title}
            />
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
              <div>{product.location}</div>
            </div>
            <HotelServices />
            <HotelDetails />
            <Review />
          </div>
          <Sidebar product={product} />
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;

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
