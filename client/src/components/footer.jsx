/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/f.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import instagram from "../images/instagram.svg";
import playstore from "../images/playstore.svg";
import appstore from "../images/app-store.svg";
import footerImage from "../images/footer-img.svg";
import { mq } from "../styles/breakpoints";

const Footer = () => {
  return (
    <footer css={footerImageCss} className="pt">
      <div className="container">
        <div css={fWrapper}>
          <div css={flogo}>
            <div css={fimg}>
              <img src={logo} alt="logo" className="footer-logo" />
            </div>

            <div css={ftollfree}>
              <b>Toll Free :</b> 012345678
            </div>

            <div css={fmail}>
              <b>Email :</b> feedback@roamiodeals.com
            </div>

            <div css={fsocial}>
              <img css={sociallink} src={facebook} alt="img" />
              <img css={sociallink} src={twitter} alt="img" />
              <img css={sociallink} src={youtube} alt="img" />
              <img css={sociallink} src={instagram} alt="img" />
            </div>
          </div>

          {/* footer company */}

          <div css={fCompany}>
            <div css={cssNav}>
              <span>COMPANY</span>
            </div>
            <span>
              <a css={fLink} href="/">
                About Us
              </a>
            </span>
            <span>
              <a css={fLink} href="/">
                Feedback
              </a>
            </span>
            <span>
              <a css={fLink} href="/">
                Testimonials
              </a>
            </span>
            <span>
              <a css={fLink} href="/">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* f-services */}
          <div css={fServices}>
            <div css={cssNav}>
              <span>OUR SERVICES</span>
            </div>
            <span>
              <a css={fLink} href="/">
                Staycations
              </a>
            </span>
            <span>
              <a css={fLink} href="/">
                Activities
              </a>
            </span>
            <span>
              <a css={fLink} href="/">
                Deals
              </a>
            </span>
            <span>
              <a css={fLink} href="/">
                Visa
              </a>
            </span>
          </div>

          {/* footer app */}

          <div css={fApp}>
            <div css={cssNav}>
              <span>DOWNLOAD OUR APP</span>
            </div>

            <div>
              <img src={playstore} alt="img" />
            </div>
            <div>
              <img src={appstore} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div css={fcopyright}>
        <span>
          &copy; 2023 Roamio Deals- All Rights Reserved. | All price shown are
          inclusive of VAT where applicable
        </span>
      </div>
    </footer>
  );
};
export default Footer;

const footerImageCss = css`
  background: url(${footerImage}), no-repeat;
`;

const flogo = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const fimg = css`
  .footer-logo {
    max-width: 180px;
    width: 100%;
    padding-bottom: 2em;
  }

  ${mq("md")}{
    .footer-logo {
      max-width: 260px;
      width: 100%;
      padding-bottom: 2em;

  }

`;

const ftollfree = css`
  color: #282828;
  font-weight: 600;
  font-size: 1rem;
`;

const fmail = css`
  color: #282828;
  font-weight: 600;
  font-size: 1rem;
`;

const fsocial = css`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

const sociallink = css`
  cursor: pointer;
`;

const cssNav = css`
  color: #282828;
  font-size: 1.125rem;
  font-weight: 600;
  padding-bottom: 0.85em;
`;

const fWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 2em;

  ${mq("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const fLink = css`
  text-decoration: none;
  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 500;
`;

const fCompany = css`
  display: flex;
  flex-direction: column;
  gap: 1.25em;
`;
const fServices = css`
  display: flex;
  flex-direction: column;
  gap: 1.25em;
`;

const fApp = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const fcopyright = css`
  text-align: center;
  background: #000;
  font-weight: 500;
  color: #fff;
  padding: 2em 0;
  text-align: center;
  font-size: 0.75em;
  line-height: 0.75em;
  gap: 10px;
`;
