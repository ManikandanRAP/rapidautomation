import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import FeatureBlock from 'common/src/components/FeatureBlock';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'source_sans_pro_regular',sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'source_sans_pro_bold',sans-serif;
  }

  section {
    position: relative;
  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #eb4d4b;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #eb4d4b;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #eb4d4b;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #eb4d4b;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
  

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${themeGet('colors.primary', '#5268db')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }
  }

  // own css

  .text_center {
    text-align: center;
  }
  .text_justify {
    text-align: justify;
  }
  .margin_auto {
    margin: 0 auto;
  }
  .flexbox {
    display:flex;
  }
  .flexaligncenter {
    align-items: center;
  }
  .flexrow {
    flex-direction: row;
  }
  .flexcol {
    flex-direction: column;
  }
  .flexwrap {
    flex-wrap: wrap;
  }
  .flexjustifycenter {
    justify-content: center;
  }
  .flexjustifyaround {
    justify-content: space-around;
  }
  .empty_space10 {
    display: block;
    height: 10px;
  }
  .empty_space20 {
    display: block;
    height: 20px;
  }
  .empty_space30 {
    display: block;
    height: 30px;
  }
  .empty_space40 {
    display: block;
    height: 40px;
  }
  // Home page particle
  .banner_container.Home {
    .particle {
      z-index: 2;
    }
    .container {
      z-index: 1;
      position: relative;
    }
    
  }
  .section_background_color {
    background-color: #f9fbfd;
  }
  .section_background_blue {
    // background-color: rgb(63, 32, 186);
    background-image: linear-gradient(128deg, #1a2547, #3b1f47);
    position: relative;
    overflow: hidden;
    padding-top: 40px;
    padding-bottom: 40px;
    h2 {
      color: #fff;
    }
    .dark-bg {
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
      height: 100%;
    }
    .dark-bg-image {
      position: absolute;
      top: 0;
    }
    .dark-bg-image-right {
      right: 0;
      top: calc(100% - 500px);
    }
    @media only screen and (min-width: 768px) {
      .bg-image--mobile {
        display: none;
      }
    }
    @media only screen and (max-width: 1199px) {
      .dark-bg-image:not(.bg-image--mobile) {
        width: 500px;
      }
    }
    @media only screen and (max-width: 767px) {
      .dark-bg-image:not(.bg-image--mobile) {
        display: none;
      }
      .dark-bg-image-right {
        top: calc(100% - 250px);
      }
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  // END OF BACKGROUND EFFECT
  .btn.btn_primary {
    padding: 10px 20px;
    min-height: auto;
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background-color: #2981c2;
    vertical-align: middle;
    display: inline-block;
    .btn-text {
      color: #fff !important;
      font-size: 16px;
      padding: 0;
      z-index: 9;
    }
  }

  .btn.btn_primary:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -webkit-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    transition: all scaleY 0.4s ease-out 0s;
  }
  .btn.btn_primary:hover:after {
    transform: scaleY(1);
    // z-index: 1;
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    background-color: #73c2c2;
    -webkit-transform: scaleY(1);
    -ms-transform: scaleY(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .Logo_image_dark {
    display: none;
  }
  .Logo_image_light {
    display: block;
  }
  .Logo_image img {
    width: 100%;
    height: 100%;
    max-width: 135px;
    vertical-align: middle;
  }
  .sticky-nav-active {
    .hosting_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
    }
    .Logo_image_light {
      display: none;
    }
    .Logo_image_dark {
      display: block;
    }
  }

  .hosting_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #eb4d4b;
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #343d48;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #eb4d4b;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .info-sec-container {
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    @media (max-width: 768px) and (min-width: 768px) {
      top: 40%;
    }
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .accordion_item {
    border-bottom: 1px solid #ebebeb;
    border-top: 0;
    + .accordion__item {
      border-top: 0;
    }
  }

  .accordion_title {
    padding: 23px 30px;
    @media (max-width: 575px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .accordion_body {
    padding: 0 30px 23px 30px;
  }

  .service_section {
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #f9fbfd 50%,
      #f9fbfd 100%
    );

    .service_col {
      border-width: 1px 0 0 1px;
      border-style: solid;
      border-color: #f1f4f6;
      &:nth-child(3n + 3),
      &:last-child {
        border-right-width: 1px;
      }
      &:nth-last-child(-n + 3) {
        border-bottom-width: 1px;
      }
      .service_item {
        position: relative;
        height: 100%;
        transition: 0.2s ease-in-out;

        &:hover {
          box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
          z-index: 1;
        }

        &:before {
          content: '';
          position: absolute;
          width: 85%;
          height: 0;
          bottom: 0;
          left: 50%;
          display: block;
          pointer-events: 0;
          transform: translateX(-50%);
        }
        &:hover {
          &:before {
            box-shadow: 0px 0px 60px 0px rgba(39, 79, 117, 0.2);
          }
        }

        img {
          width: 80px;
          height: 70px;
        }
      }
    }
  }

  @media (max-width: 990px) {
    .glide__slide--active .pricing_table {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      border: 0;
    }
  }
`;

export const FeatureItem = styled(FeatureBlock)`
  position: relative;
  padding: 50px 30px;
  border: 1px solid #f2f4f7;
  border-radius: 5px;
  background-color: #fff;
  transition: 0.35s ease-in-out;
  @media (max-width: 768px) and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media (max-width: 575px) {
    padding: 40px 25px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      138deg,
      rgb(249, 212, 35) 0%,
      rgb(255, 78, 80) 100%
    );
    transition: 0.35s ease-in-out;
  }

  & > div {
    position: relative;
  }

  h2,
  p {
    transition: 0.35s ease-in-out;
  }

  .hover-shape {
    width: 20px;
    height: auto;
    position: absolute;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(260deg);
  }

  .hover-shape-1 {
    left: 0;
    top: 20px;
  }

  .hover-shape-2 {
    right: 29%;
    top: 0;
  }

  .hover-shape-3 {
    right: 0;
    bottom: 35%;
  }

  .hover-shape-4 {
    right: 30%;
    bottom: 0;
  }

  .hover-shape-5 {
    left: 0;
    bottom: 30%;
  }

  .icon__wrapper {
    margin-bottom: 40px;
    @media (max-width: 768px) and (min-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 25px;
    }
    i {
      line-height: 1;
      font-size: 65px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 50px;
      }
      &.violate {
        color: #8569ff;
      }
      &.yellow {
        color: #ffb129;
      }
      &.green {
        color: #18d379;
      }
    }
  }

  .button__wrapper {
    a {
      color: #c2cbd6;
      font-size: 24px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 22px;
      }
    }
  }

  &:hover {
    background-color: #eb4d4b;
    &:before {
      opacity: 0.37;
    }

    .hover-shape-1 {
      left: -40px;
      top: 20px;
    }
    .hover-shape-2 {
      right: 29%;
      top: -47px;
    }
    .hover-shape-3 {
      right: -27px;
      bottom: 35%;
    }
    .hover-shape-4 {
      right: 30%;
      bottom: -60px;
    }
    .hover-shape-5 {
      left: -35px;
      bottom: 30%;
    }
    .hover-shape {
      transform: rotate(0);
      opacity: 1;
    }

    h2,
    p {
      color: #fff;
    }

    .icon__wrapper {
      i {
        color: #fff;
      }
    }

    .button__wrapper {
      a {
        color: #fff;
      }
    }
  }
`;
