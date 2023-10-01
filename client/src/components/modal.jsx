/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import theme from "../styles/theme";
import closeIcon from "../images/close-icon-black.svg";


const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      timeout={300}
      in={isOpen}
      classNames="portal-modal-node"
      nodeRef={modalRef}
    >
      <>
        {ReactDOM.createPortal(
          <div ref={modalRef} css={modalOverlay}>
            <div css={modal}>
              <button css={modalClose} onClick={onClose}>
                <img src={closeIcon} alt="img" />
              </button>
              <div css={modalContent}>{children}</div>
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
      </>
    </CSSTransition>
  );
};

export default Modal;

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const modal = css`
  background-color: white;
  padding: ${20 / 16}em;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: ${453 / 16}rem;
  position: relative;
  z-index: 999;
`;

const modalClose = css`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: ${20 / 16}rem;
  cursor: pointer;
`;
const modalContent = css`
  background-color: ${theme.colors.white};
`;
