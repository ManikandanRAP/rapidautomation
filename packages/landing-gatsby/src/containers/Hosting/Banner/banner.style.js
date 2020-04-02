import styled from 'styled-components';
import HomeBG from 'common/src/assets/image/hosting/Banner/BFSI.webp';
import FormRecognitionBG from 'common/src/assets/image/hosting/Banner/BFSI.webp';
import ITBG from 'common/src/assets/image/hosting/Banner/BFSI.webp';

const BannerWrapper = styled.section`
  padding-top: 190px;
  padding-bottom: 140px;
  // min-height: 400px;
  max-height: 150px;
  display: flex;
  align-items: center;
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
  .FormRecognitionPage &.FormRecognition {
    display: flex;
    background-image: url(${FormRecognitionBG});
  }
  .ITPage &.IT {
    display: flex;
    background-image: url(${ITBG});
  }
  .HomePage &.Home {
    padding-top: 270px;
    padding-bottom: 220px;
    display: flex;
    background-image: url(${HomeBG});
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(5, 47, 74, 0.67);
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
  @media (max-width: 990px) {
    padding-top: 170px;
    padding-bottom: 120px;
    min-height: auto;
    .HomePage &.Home {
      padding-top: 250px;
      padding-bottom: 200px;
    }
  }
  @media (max-width: 575px) {
    padding-top: 150px;
    padding-bottom: 150px;
    .HomePage &.Home {
      padding-top: 230px;
      padding-bottom: 180px;
    }
  }
`;

export default BannerWrapper;
