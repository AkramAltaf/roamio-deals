/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";
import logo from "../images/logo.svg";
import Button from "../components/button";
import facebook from "../images/facebook-icon.svg";
import google from "../images/google-icon.svg";
import mail from "../images/mail-icon.svg";

const Login = () => {
  return (
    <div css={loginWrapperCss}>
      <div css={modalImgCss}>
        <img src={logo} alt="" />
        <div css={loginTitleCss}>Login or Sign up</div>
        <div css={inputContainer}>
          <select css={selectCss} name="select">
            <option value="us">+1</option>
            <option value="ind">+91</option>
          </select>
          <input
            css={inputCss}
            type="tel"
            name="telphone"
            pattern="[0-9]{10}"
            title="Ten digits code"
            required
          />
        </div>
        <div css={loginSubTitleCss}>
          Loggin in with unregistered phone number creates a new Romaio account.
        </div>
        <div css={loginBtnCss}>
          <Button>Send verification code</Button>
        </div>
        <div css={LinkCss}>
          <a href="#login">Login with password</a>
        </div>
        <div css={loginCss}>or login with</div>
        <div css={loginWithCss}>
          <div>
            <img src={facebook} alt="img" />
          </div>
          <div>
            <img src={google} alt="img" />
          </div>
          <div>
            <img src={mail} alt="img" />
          </div>
        </div>
        <div css={modalPolicyCss}>
          By signing up, you're agree to our <span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

const loginWrapperCss = css`
  text-align: center;
`;

const modalImgCss = css`
  padding: ${50 / 16}em;
  max-width: ${353 / 16}em;
  width: 100%;
`;

const loginTitleCss = css`
  margin-top: ${20 / 16}em;
  margin-bottom: ${20 / 16}em;
  ${theme.css.typography.mobileTitleText1};
  color: ${theme.colors.black800};
`;

const inputContainer = css`
  backgroud: ${theme.css.gradient.whiteGradient}
  position: relative;
  border-radius: 6px;
  border: 1px solid rgba(131, 135, 138, 0.5);
`;

const selectCss = css`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
`;

const inputCss = css`
  max-width: 333px;
  width: 65%;
  border: ${theme.colors.white};
  padding: 15px 20px;
  border-radius: 6px;
  background: #fff;
  outline: none;
`;

const loginSubTitleCss = css`
  margin-top: ${15 / 16}em;
  margin-bottom: ${15 / 16}em;
  color: #83878a;
  ${theme.css.typography.modalText};
`;

const loginBtnCss = css`
  display: flex;
  justify-content: center;

  button {
    display: block;
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const LinkCss = css`
  margin-top: ${15 / 16}em;
  margin-bottom: ${15 / 16}em;
  ${theme.css.typography.linkText2};

  a {
    color: #ff3500;
  }
`;

const loginCss = css`
  margin-bottom: ${15 / 16}em;
  ${theme.css.typography.modalText};
  color: ${theme.colors.black800};
`;

const loginWithCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

  div {
    width: 45px;
    height: 45px;
    background: #edf2f8;
    border-radius: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const modalPolicyCss = css`
  margin-top: ${15 / 16}em;
  ${theme.css.typography.modalText};

  span {
    color: ${theme.colors.themeColor};
    cursor: pointer;
  }
`;
