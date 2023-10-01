/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const HotelDetails = () => {
  return (
    <div>
      <div css={hightlight}>Highlights</div>
      <div css={hightlightTitle}>
        Enjoy the birds-eye view of the palm from a 240 meters high viewing
        deck, choose between 2 packages of Cheers at The View or High Tea by St
        Regis at The View At The Palm from AED 220!
      </div>
      <div css={packageWrapper}>
        <div css={listHeadingCss}>Packages:</div>
        <ul css={listTitleCss}>
          <li>Option 1: Cheers at The View for 1 adult for AED 220</li>
          <li>
            Option 2: High Tea by St Regis at The View at The Palm for 1 person
            for AED 275
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
            High Tea by St Regis: Traditional treat package served at the VIP
            lounge with water, juice, Tea or Coffee, 5 savory items, 5 sweet
            items, 2 scones served with clotted cream, and signature strawberry
            and lavender jam (option 2)
          </li>
        </ul>
      </div>
      <div>
        <div css={listHeadingCss}>Taxes:</div>
        <ul css={listTitleCss}>
          <li>
            Rates are subject to 10% service charge, 6% tourism fee, 4%
            municipality fee and AED 15 destination fee per night per room are
            payable to the resort upon check-in
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
              Prior booking is required at least 48 hours in advance; Check the
              room availability with the hotel before purchasing the voucher.
            </li>
          </ul>
          <li>Required booking details:</li>
          <ul>
            <li>
              Name, contact number, preferred date of stay, time of arrival, and
              copy of Cobone voucher
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
            For availability & bookings please WhatsApp Cobone reservations team
            on +97145562099, daily between 10:30 am to 07:30 pm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotelDetails;

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
