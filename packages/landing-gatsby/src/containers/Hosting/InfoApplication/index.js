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

import IconTextHoverSection from '../IconTextHover';

import sample from 'common/src/assets/image/hosting/author-3.jpg';

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
      <div className="multi_sections_container FormRecognition_info_container">
        <Container>
          <Box {...contentArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                className="text_center"
                content="Cloud Technology for eCommerce"
              />
              <Text
                {...description}
                className="text_justify"
                content="eCommerce businesses are leveraging cloud technology and edge computing for massive benefits across their entire eCommerce ecosystem. Cnetric has the expertise and skills to integrate cloud technology and connect all your systems for a seamless, robust eCommerce system that can adapt to changes in demand with minimal infrastructure costs."
              />
            </Fade>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="How it Works"
                />

                <Box className="InfoBanner_Image_container">
                  <Image className="lazyload" src={sample} alt="alt" />
                </Box>
              </Fade>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box>
            <Fade bottom cascade>
              <Heading {...title} className="text_center" content="Benefits" />
              <IconTextHoverSection />
            </Fade>
          </Box>
        </Container>
      </div>
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
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '25px',
    pt: '25px',
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
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
