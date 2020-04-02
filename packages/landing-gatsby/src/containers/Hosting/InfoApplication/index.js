import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import { Link } from 'gatsby';

import IconFloatingsection from '../IconFloating';

import sample from 'common/src/assets/image/hosting/author-3.jpg';

import darkRightImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-right.svg';
import darkLeftImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-left.svg';
import darkRightMobImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-right-mobile.svg';
import darkLeftMobImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-left-mobile.svg';

import CurveDeskImg from 'common/src/assets/image/hosting/Background/Overview/CurveDeskImage.svg';
import CurveMobImg from 'common/src/assets/image/hosting/Background/Overview/CurveMobImage.svg';
import DiamondDeskImg from 'common/src/assets/image/hosting/Background/Overview/DiamondDeskImage.svg';
import DiamondMobImg from 'common/src/assets/image/hosting/Background/Overview/DiamondMobImage.svg';

import FormRecognitionImg1 from 'common/src/assets/image/hosting/Pages/Form Recognition/How It Works.png';

import './infoapplication.css';

const InfoApplicationSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  contentArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  secTitleWrapper,
  secHeading,
  secText,
  box_size,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Box className="multi_sections_container FormRecognition_info_container">
        <aside class="bg-images section_background_white">
          <img
            class="bg-image"
            src={CurveDeskImg}
            alt="Background image of a diamond shape"
          />
          <img
            class="bg-image"
            src={DiamondDeskImg}
            alt="Background image of a diamond shape"
          />
          <img
            class="bg-image bg-image--mobile"
            src={CurveMobImg}
            alt="Background image of a diamond shape"
          />
          <img
            class="bg-image bg-image--mobile"
            src={DiamondMobImg}
            alt="Background image of a diamond shape"
          />
        </aside>
        <Container>
          <Box {...contentArea}>
            <Fade bottom cascade>
              <Heading {...title} className="text_center" content="Overview" />
              <Text
                {...description}
                className="text_justify"
                content="Automate form recognition with the capacity to handle multiple templates and formats. Leverage RAP AI’s EyeMagic engine that has OCR capabilities and can recognize text both printed and handwritten. Expedite form processing with zero manual intervention thanks the power of EyeMagic. Extract meaningful structured content from myriad types of forms and feed this structured data into other systems that make use of such content. End-to-end automation of scanned forms provides massive cost-savings, accelerates process cycle time, eliminates errors that are common in manual processes and enables scalability to cope with increased volumes of forms. The application can be deployed on-premise or on a private or public cloud as suits your requirements. Train once in a matter of days, and then deploy to transform your form recognition processes for maximum efficiency."
              />
              <Box className="empty_space20" />
            </Fade>
          </Box>
        </Container>

        <Container>
          <Box>
            <Fade bottom cascade>
              <Heading
                {...title}
                className="text_center"
                content="How it Works"
              />
              <Box className="empty_space10" />
              <Box>
                <Image
                  className="lazyload"
                  src={FormRecognitionImg1}
                  alt="how it works"
                />
              </Box>
              <Box className="empty_space20" />
            </Fade>
          </Box>
        </Container>

        <Box className="section_background_blue">
          <aside className="dark-bg">
            <img
              className="dark-bg-image dark-bg-image-right data"
              src={darkRightImg}
            />
            <img className="dark-bg-image" src={darkLeftImg} />
            <img
              className="dark-bg-image dark-bg-image-right bg-image--mobile data"
              src={darkRightMobImg}
            />
            <img
              className="dark-bg-image bg-image--mobile data"
              src={darkLeftMobImg}
            />
          </aside>
          <Container>
            <Box>
              <Fade bottom cascade>
                {/* <Heading
                  {...title}
                  className="text_center"
                  content="Benefits"
                /> */}
                <IconFloatingsection />
              </Fade>
              <Box className="empty_space20" />
            </Box>
          </Container>
        </Box>
      </Box>
      {/* end of form recognition */}
    </Box>
  );
};

InfoApplicationSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  box_size: PropTypes.object,
};

InfoApplicationSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '30px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_application',
  },
  secTitleWrapper: {
    mb: ['50px', '60px', '60px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '100%', '49%', '49%'],
  },
  contentArea: {
    width: ['100%', '100%', '80%', '80%', '80%'],
    margin: '0 auto',
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['30px', '30px', '35px', '40px', '40px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '0.015em',
    mb: '25px',
    pt: '25px',
  },
  description: {
    fontSize: ['16px', '16px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    color: '#252525',
    lineHeight: '1.5',
    mb: '15px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`,
  },
  box_size: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

export default InfoApplicationSection;
