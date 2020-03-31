import styled from 'styled-components';
import BannerBG from 'common/src/assets/image/hosting/banner-bg.jpg';

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
    background-position: center;
    background-repeat: no-repeat;
    display: none;
  }
  .FormRecognitionPage &.FormRecognition {
    display: flex;
    background-image: url(${BannerBG});
  }
  .ITPage &.IT {
    display: flex;
    background-image: url(${BannerBG});
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
  @media (max-width: 990px) {
    padding-top: 170px;
    padding-bottom: 120px;
    min-height: auto;
  }
  @media (max-width: 575px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`;

export default BannerWrapper;
