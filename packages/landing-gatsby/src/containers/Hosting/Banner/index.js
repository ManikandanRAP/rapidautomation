import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import ParticlesComponent from '../../Hosting/Particle';
import ParticlesWebComponent from '../../Hosting/ParticleWeb';
import BannerWrapper from './banner.style';
import { Link } from 'gatsby';

import TypingEffectSection from '../../Hosting/TypingEffect';

import scrollTo from 'gatsby-plugin-smoothscroll';

// import './bannerother.css';

const BannerSection = ({
  row,
  title,
  description,
  subdescription,
  button,
  textArea,
}) => {
  return (
    <>
      <BannerWrapper className="banner_container Home">
        {/* <ParticlesComponent /> */}
        <ParticlesWebComponent />
        <Container>
          <Box {...row}>
            <Box {...textArea}>
              <Heading
                {...title}
                className="text_center"
                content="Practical AI that delivers"
              />
              {/* <Heading
                {...title}
                className="text_center"
                content="Productivity"
              /> */}
              <TypingEffectSection />
              <Text
                {...description}
                className="text_center"
                content="Automate extraction of structured data from unstructured content"
              />
              <Box className="empty_space20" />
              <Box className="margin_auto seperator_line" />
              <Box className="empty_space30" />
            </Box>
          </Box>
        </Container>
        <Box className="home_button">
          <Link to="/" className="btn btn_primary">
            <span className="btn-text">Getting Started</span>
          </Link>
        </Box>
      </BannerWrapper>

      <BannerWrapper className="banner_container FormRecognition">
        {/* <ParticlesComponent /> */}
        <Container>
          <Box {...row}>
            <Box {...textArea}>
              <Heading {...title} content="Form Recognition with RAP AI" />
              <Text
                {...description}
                content="Expedite form processing with zero manual intervention"
              />
              <Text
                {...subdescription}
                content="Extract meaningful structured content from myriad types of forms and feed this structured data into other systems that make use of such content."
              />
              <Box>
                <Link to="/" className="btn btn_secondary">
                  <span className="btn-text">Book a Demo</span>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </BannerWrapper>
      <BannerWrapper className="banner_container IT">
        <ParticlesComponent />
        <Container>
          <Box {...row}>
            <Box {...textArea}>
              <Text {...description} content="Solutions" />
              <Heading {...title} content="IT" />
              <Box className="seperator_line" />
            </Box>
          </Box>
        </Container>
      </BannerWrapper>
    </>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  subdescription: PropTypes.object,
  button: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: ['95%', '95%', '80%', '75%', '75%'],
  },
  title: {
    fontSize: ['26px', '32px', '42px', '45px', '45px'],
    fontWeight: '700',
    // color: '#0f2137',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '20px', '25px', '25px', '25px'],
    lineHeight: '1.31',
    textAlign: 'center',
  },
  description: {
    fontSize: ['18px', '20px', '20px', '24px', '24px'],
    // color: '#343d48cc',
    color: '#fff',
    lineHeight: '1.75',
    // mb: ['8px', '8px', '10px', '10px', '10px'],
    mb: '5px',
    textAlign: 'center',
  },
  subdescription: {
    fontSize: ['14px', '14px', '14px', '16px', '16px'],
    // color: '#343d48cc',
    color: '#fff',
    lineHeight: '1.75',
    mb: ['20px', '20px', '25px', '25px', '25px'],
    textAlign: 'center',
  },
  button: {
    title: 'Search',
    type: 'button',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    iconPosition: 'left',
  },
};

export default BannerSection;
