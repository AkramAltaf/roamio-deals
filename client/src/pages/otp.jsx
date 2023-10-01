/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactDOM from "react-dom";
import { useState } from "react";
import theme from "../styles/theme";
import logo from "../images/logo.svg";
import Button from "../components/button";
import Modal from "../components/modal";

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div css={signUpWrapperCss}>
      <div css={modalImgCss}>
        <img src={logo} alt="" />
        <div css={signUpTitleCss}>Login or Sign up</div>
        <div css={inputContainer}>
          <input
            css={inputCss}
            type="tel"
            name="telphone"
            pattern="[0-9]{10}"
            title="Ten digits code"
            required
          />
        </div>
        <div css={signUpSubTitleCss}>
          Loggin in with unregistered phone number creates a new Romaio account.
        </div>
        <div css={signUpBtnCss}>
          <Button css={signUpButton} onClick={openModal}>
            Continue
          </Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <SignUp />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

const signUpWrapperCss = css`
  text-align: center;
`;

const modalImgCss = css`
  padding: ${50 / 16}em;
  max-width: ${353 / 16}em;
  width: 100%;
`;

const signUpTitleCss = css`
  margin-top: ${20 / 16}em;
  margin-bottom: ${20 / 16}em;
  ${theme.css.typography.mobileTitleText1};
  color: ${theme.colors.black800};
`;

const inputContainer = css`
  border-radius: 6px;
`;

const inputCss = css`
  max-width: 333px;
  width: 90%;
  border: 1px solid rgba(131, 135, 138, 0.5);
  padding: 15px 15px;
  border-radius: 6px;
  background: #fff;
  outline: none;
`;

const signUpSubTitleCss = css`
  margin-top: ${15 / 16}em;
  margin-bottom: ${15 / 16}em;
  color: #83878a;
  ${theme.css.typography.modalText};
`;

const signUpBtnCss = css`
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

const signUpButton = css``;
