import styled from 'styled-components';

const TeamWrapper = styled.div`
  .team_card {
    margin: 20px 15px;
    &:hover {
      .team_image_wrapper {
        box-shadow: 0 10px 20px 0 rgba(27, 20, 65, 0.5);
        &::before {
          opacity: 1;
          visibility: visible;
        }
        img {
          transform: scale(1.05);
        }
        i {
          // z-index: 0;
        }
      }
    }
  }
  .team_image_wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 20px 0 rgba(27, 20, 65, 0.3);
    transition: all 0.3s ease 0s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: all 0.3s ease 0s;
      position: relative;
    }
    i {
      position: absolute;
      bottom: 12px;
      right: 15px;
      background-color: #fff;
      padding: 2px;
      border-radius: 4px;
      color: #000;
      z-index: 1;
      font-size: 12px;
      box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      // height: 150px;
      height: 63px;
      position: absolute;
      left: 0px;
      bottom: 0px;
      opacity: 0;
      visibility: hidden;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      z-index: 1;
      background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.8) 110%
      );
      transition: opacity 0.3s ease;
    }
  }
  .team_text_wrapper {
    text-align: center;
    .name_plate {
      position: relative;
      background-color: rgb(253, 239, 0);
      z-index: 1;
      margin: -40px 0px 10px 40px;
      padding: 12px 5px;
      border-radius: 10px;
      width: calc(100% - 80px);
    }
    .social_links {
      display: flex;
      justify-content: center;
      li {
        margin: 0px 7px;
        &:first-child {
          margin-left: 0px;
        }
        a {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(39, 51, 67);
          border-radius: 50%;
          transition: background-color 0.3s ease 0s;
        }
      }
    }
  }
`;

const PartnerWrapper = styled.div`
  img {
    margin: 20px auto;
    width: 100%;
    // max-width: 175px;
    max-width: 100%;
  }
`;

export { TeamWrapper, PartnerWrapper };
