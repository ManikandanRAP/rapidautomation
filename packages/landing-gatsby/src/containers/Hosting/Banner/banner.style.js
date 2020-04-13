import styled from 'styled-components';
import HomeBG from 'common/src/assets/image/hosting/Banner/BFSI.webp';
import FormRecognitionBG from 'common/src/assets/image/hosting/Banner/BFSI.webp';
import ITBG from 'common/src/assets/image/hosting/Banner/BFSI.webp';

const BannerWrapper = styled.section`
  padding-top: 93px;
  padding-bottom: 55px;
  display: flex;
  align-items: center;
  justify-center: center;
  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &.banner_container {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: none;
  }
  .HomePage &.Home {
    display: flex;
    background-image: url(${HomeBG});
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .FormRecognitionPage &.FormRecognition {
    display: flex;
    background-image: url(${FormRecognitionBG});
  }
  .ITPage &.IT {
    display: flex;
    background-image: url(${ITBG});
  }
  .AboutPage &.About {
    display: flex;
    background-image: url(${HomeBG});
  }
  .ContactPage &.Contactus {
    display: flex;
    background-image: url(${HomeBG});
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      #081275 15%,
      rgba(8, 18, 117, 0.75)
    );
    opacity: 0.85;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .seperator_line {
    background-color: white;
    width: 15%;
    height: 4px;
    max-width: 120px;
  }
  .container {
    z-index: 9;
  }
  .home_button {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -10%);
    z-index: 3;
  }
  @media (max-width: 575px) {
    // .home_button {
    //   bottom: 10%;
    //  }
  }
`;

export default BannerWrapper;
