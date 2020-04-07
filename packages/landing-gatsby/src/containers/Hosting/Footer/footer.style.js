import styled from 'styled-components';
import FooterImage from 'common/src/assets/image/hosting/footer-bg.png';

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #f9fbfd;
  overflow: hidden;
  #Cookie_msg {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    text-align: center;
    padding: 10px;
    display: none;
    z-index: 9999;
    .cookie_btn {
      margin-left: 10px;
      padding: 0px 10px;
      display: inline-block;
      background-color: red;
      cursor: pointer;
    }
  }
  #scrollTopBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #f2863a;
    display: none;
    // display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    line-height: 1;
    padding-bottom: 4px;
    cursor: pointer;
    &.scrollTopBtnshown {
      display: flex;
    }
  }
  @media (min-width: 576px) {
    // padding-top: 130px;
    padding-top: 0;
    &:before {
      content: '';
      position: absolute;
      width: 104%;
      padding-bottom: 104%;
      border-top-right-radius: 11%;
      top: 14%;
      left: 0;
      pointer-events: none;
      background-color: #fff;
      transform: rotate(-6deg);
      @media (max-width: 767px) {
        padding-bottom: 150%;
      }
    }
  }

  .footer_container {
    background-repeat: no-repeat;
    background-position: center 50px;
    padding-top: 80px;
    // padding-bottom: 80px;
    position: relative;
    @media (min-width: 576px) {
      background-image: url(${FooterImage});
    }
    @media (max-width: 576px) {
      .colTwo.flexjustifycenter {
        justify-content: flex-start;
      }
      .colTwo.flexjustifycenter {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 0px;
    }
  }
  .copyright_container {
    padding-top: 40px;
    padding-bottom: 15px;
    p {
      color: rgba(52, 61, 72, 0.8);
      font-family: inherit;
      font-size: 16px;
    }
  }
  .footer_logo {
    width: 100%;
    max-width: 90px;
  }
  .socialmedia_icons a {
    margin: 0 5px;
  }
  .socialmedia_icons a:first-child {
    margin-left: 0;
  }
  .socialmedia_icons i {
    font-size: 24px;
    color: rgba(52, 61, 72, 0.3);
    line-height: 1;
    vertical-align: middle;
  }
  .socialmedia_icons i:hover {
    color: #150b47;
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: rgba(52, 61, 72, 0.8);
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #343d48;
    }
  }
  a.customItem {
    line-height: 1;
  }
`;

export { List, ListItem };

export default FooterWrapper;
