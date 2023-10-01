import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import theme from "../styles/theme";
import wishListImage from "../images/wishlist-icon.svg";
import cart from "../images/cart.svg";
import roamioLogo from "../images/logo.svg";
import mobileHeaderImg from "../images/m-header-background.svg";
import mobileCart from "../images/mobile-cart.svg";
import serachBlack from "../images/search-black.svg";
import useViewportWidth from "../hooks/use-viewport-width";
import RoamioServices from "../pages/roamio-services";
import MobileHome from "../pages/mobile-home";
import Modal from "../components/modal";
import Login from "./login";
import Button from "../components/button";
import SignUp from "./signup";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "../components/badge";

const HeaderDesktop = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const items = useSelector((state) => state.cart);

  return (
    <section css={hContainerCss}>
      <div className="container">
        <header css={wrapperCss}>
          <div css={leftCss}>
            <div css={logoCss}>
              <Link to="/">
                <img src={roamioLogo} alt="logo" />
              </Link>
            </div>
            <div css={dropCss}>
              <select css={selectCss} name="seclectlist">
                <option value="option-1">AED</option>
                <option value="option-2">INR</option>
                <option value="option-3">USD</option>
              </select>
              <select css={selectCss} name="seclectlist">
                <option value="option-1">Eng</option>
                <option value="option-2">Arb</option>
              </select>
            </div>
          </div>
          <div css={centerCss}>
            <input
              type="text"
              placeholder="Search for destinations or activities"
            />
            <div css={serachIconCss}>
              <img src={serachBlack} alt="img" />
            </div>
          </div>
          <div css={rightCss}>
            <div css={cartCss}>
              <div css={actionCss}>
                <img src={wishListImage} alt="wishlist" />
                <span css={actionTextCss}>Wishlist</span>
              </div>
              <Link to="/cart">
                <div css={actionCss}>
                  <img src={cart} alt="img" />
                  <span css={actionTextCss}>Cart</span>
                  {items.length > 0 && <Badge content={items.length} />}
                </div>
              </Link>
            </div>
            <div css={loginCss}>
              <Button
                onClick={() => {
                  setIsLoginModal(true);
                }}
              >
                Login
              </Button>
              <Modal
                isOpen={isLoginModal}
                onClose={() => {
                  setIsLoginModal(false);
                }}
              >
                <Login />
              </Modal>
              <Button
                onClick={() => {
                  setIsSignupModal(true);
                }}
              >
                Sign Up
              </Button>
              <Modal
                isOpen={isSignupModal}
                onClose={() => {
                  setIsSignupModal(false);
                }}
              >
                <SignUp />
              </Modal>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

const HeaderMobile = () => {
  return (
    <section className="container">
      <div>
        <div css={mobileHeaderCss}>
          <div css={mobileHeaderTitleCss}>
            <div>
              <div css={mobileTitle1Css}>Hi Mohammed,</div>
              <div css={mobileTitle2Css}>
                Welcome to <span css={mobileTitle3Css}>Roamio Deals!</span>
              </div>
            </div>
            <div>
              <img src={mobileCart} alt="img" />
            </div>
          </div>
          <div css={searchInputCss}>
            <div css={mobileSearchCss}>
              <img src={serachBlack} alt="img" />
            </div>
            <input
              type="text"
              placeholder="Search for destinations or activities"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  const isLaptopView = useViewportWidth("md");
  return (
    <>
      {isLaptopView ? (
        <HeaderDesktop />
      ) : (
        <>
          <HeaderMobile />
          <RoamioServices />
          <MobileHome />
        </>
      )}
    </>
  );
};

export default Header;

const hContainerCss = css`
  padding: 1em 0;
  background: #fff;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
`;

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const leftCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2em;
`;

const logoCss = css``;

const dropCss = css`
  display: flex;
  column-gap: 0.75em;
`;

const selectCss = css`
  ${theme.css.typography.linkText2};
  ${theme.css.borderRadius.borderRadius8};
  ${theme.colors.primaryText};
  outline: none;
  cursor: pointer;
  border: none;
  position: relative;
  font-family: Poppins, sans-serif;
`;

const centerCss = css`
  display: flex;
  justify-content: space-between;
  height: 41px;
  ${theme.css.borderRadius.borderRadius8};
  background: #f6f6f6;
  backdrop-filter: blur(4px);
  max-width: 427px;
  width: 100%;

  input {
    border: #f6f6f6;
    background-color: transparent;
    color: #83878a;
    outline: none;
    padding: 0 1em;
    width: 100%;
  }
`;

const serachIconCss = css`
  width: 41px;
  height: 41px;
  line-height: 45px;
  text-align: center;
`;

const rightCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const cartCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

const actionCss = css`
  position: relative;
  display: flex;
  gap: 0.2rem;

  .badge {
    position: absolute;
    left: 0;
    top: -16px;
  }
`;

const actionTextCss = css`
  color: #cdcfd0;
`;

const loginCss = css`
  display: flex;

  button {
    padding: 6px 12px;
    ${theme.css.borderRadius.borderRadius6};
    border: transparent;
    color: ${theme.colors.white};

    :first-of-type {
      ${theme.css.gradient.transparentGradient};
      color: ${theme.colors.themeColor};
    }
  }
`;

const mobileHeaderCss = css`
  // background: url(${mobileHeaderImg}), no-repeat;
  // max-width: ${393 / 16}em;
  // width: 100%;
  // height: ${196 / 16}em;
`;

const mobileHeaderTitleCss = css`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const mobileTitle1Css = css`
  ${theme.css.typography.mobileTitleText1};
  color: ${theme.colors.black800};
`;

const mobileTitle2Css = css`
  ${theme.css.typography.mobileTitleText2};
  color: ${theme.colors.primaryText};
`;

const mobileTitle3Css = css`
  font-family: "Fredoka", sans-serif;
  color: ${theme.colors.themeColor};
`;

const searchInputCss = css`
  display: flex;
  justify-content: space-between;
  height: 41px;
  ${theme.css.borderRadius.borderRadius8};
  border: 1px solid #83878A;
  background:  #FFF;
  backdrop-filter: blur(4px);
  max-width: 323px;
  width: 100%;
  margin: auto;

  input{
  border: #f6f6f6;
  background-color: transparent;
  color: #83878a;
  outline: none;
  padding: 0 1em;
  width: 100%;
`;

const mobileSearchCss = css`
  margin-left: 0.3em;
  width: 20px;
  height: 20px;
  line-height: 45px;
  text-align: center;
`;
