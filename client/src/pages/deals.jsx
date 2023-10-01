/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ExternalLink from "../components/external-link";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { STATUSES, fetchProducts } from "../store/productSlice";

const Deals = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2 style={{ textAlign: "center" }}>Something went wrong</h2>;
  }

  return (
    <section className="ptb">
      <div className="container">
        <div css={sectionHeaderCss}>
          <div css={titleCss}>Daily Deals</div>
          <ExternalLink anchorLink="#" linkText="View All" />
        </div>
        <div css={cardWrapperCss}>
          {products.map((product) => {
            return <Card {...product} key={product._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Deals;

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
