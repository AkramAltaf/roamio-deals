import { css, keyframes } from "@emotion/react";

const Colors = {
  themeColor: "#FF3500",
  themeColorLight: "#e6b87c",
  primaryText: "#282828",
  default: "#f2f2f2",

  white: "#ffffff",

  // black
  black: "#000000",
  black800: "#4A4A4A",

  //orange
  orange: "#FFF3E3",

  //yellow
  lightYellow: "#FFF5E9",
};

const typography = {
  cardTitle: css`
    font-size: ${18 / 16}rem;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  `, // 18px

  sectionHeader: css`
    font-size: ${28 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `, // 28px

  priceText: css`
    font-size: ${25 / 16}rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `, // 25px

  currencyText: css`
    font-size: ${20 / 16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `, // 20px

  ratingText: css`
    font-size: ${13 / 16}rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `, // 13px

  modalText: css`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `, 
  // 12px 

  offerText: css`
    font-size: ${10 / 16}rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  `, //10px

  linkText: css`
    font-size: ${20 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.1px;
  `, // 20px

  linkText2: css`
    font-size: ${14 / 16}rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.07px;
  `, // 14px

  sectionHeaderText: css`
    font-size: ${28 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.14px;
  `, // 28px

  buttonText: css`
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `, // 16px

  categoryText: css`
    font-size: ${18 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.09px;
  `, // 18px

  headerText1: css`
    font-size: 2em;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
  `, // 32px

  headerText2: css`
    font-size: ${30 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.15px;
  `, // 30px

  subtitleText: css`
    font-size: ${22 / 16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140.523%; /* 30.915px */
    letter-spacing: 0.11px;
  `, // 22px

  bannerHeaderText: css`
    color: #fff;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    font-family: Poppins;
    font-size: ${45 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: 50px;
  `, // 45px

  mobileTitleText1: css`
    font-size: ${16 / 16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  // 16px

  mobileTitleText2: css`
    font-size: ${20 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  `,
  // 20px

  mobileServicesText: css`
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  // 10px
};

const borderRadius = {
  default: css`
    border-radius: 8px;
  `,

  none: css`
    border-radius: 0;
  `,

  borderRadius3: css`
    border-radius: 3px;
  `,

  borderRadius4: css`
    border-radius: 4px;
  `,
  borderRadius6: css`
    border-radius: 6px;
  `,
  borderRadius8: css`
    border-radius: 8px;
  `,
  borderRadius12: css`
    border-radius: 12px;
  `,
  borderRadius15: css`
    border-radius: 15px;
  `,
  borderRadius16: css`
    border-radius: 16px;
  `,
};

const gradient = {
  themeGradient: css`
    background: linear-gradient(180deg, #fe9000 0%, #ff3500 100%);
  `,
  whiteGradient: css`
    background: white;
  `,
  transparentGradient: css`
    background: transparent;
  `,
  defaultGradient: css`
    background: #f2f2f2;
  `,
};

const boxShadow = {
  default: css`
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
  `,
  boxShadowService: css`
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  `,
  boxShadowNone: css`
    box-shadow: none;
  `,
};

const animation = {
  viewDetails: keyframes`
    0% {
    -webkit-transform: translateX(0);
     }
    100% {
    -webkit-transform: translateX(1em);
    }
     `,
};

const hiddenScrollbarCss = css`
  -ms-overflow-style: none; /* Hides scrollbar for Internet Explorer 10+ */
  scrollbar-width: none; /* Hides scrollbar for Firefox */

  ::-webkit-scrollbar {
    display: none; /* Hides scrollbar for Safari and Chrome */
  }
`;

const customScrollbarCss = css`
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    ${borderRadius.borderRadius8}
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-track {
    background-color: ${Colors.white};
  }
`;

const disableTextSelectionCss = css`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const theme = {
  colors: Colors,
  css: {
    typography,
    borderRadius,
    boxShadow,
    animation,
    hiddenScrollbarCss,
    disableTextSelectionCss,
    customScrollbarCss,
    gradient,
  },
};
export default theme;
