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

import scrollTo from 'gatsby-plugin-smoothscroll';

// import './bannerother.css';

const BannerSection = ({ row, title, description, button, textArea }) => {
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
              <Heading
                {...title}
                className="text_center"
                content="Productivity"
              />
              <Text
                {...description}
                className="text_center"
                content="Automate extraction of structured data from unstructured content"
              />
              <Box className="empty_space20" />
              <Box className="margin_auto seperator_line" />
              <Box className="empty_space30" />
              <Box className="text_center">
                <Link to="/" className="btn btn_primary">
                  <span className="btn-text">Getting Started</span>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </BannerWrapper>

      <BannerWrapper className="banner_container FormRecognition">
        <ParticlesComponent />
        <Container>
          <Box {...row}>
            <Box {...textArea}>
              <Text {...description} content="Application" />
              <Heading {...title} content="Form Recognition" />
              <Box className="seperator_line" />
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
    width: ['100%', '100%', '100%', '100%', '100%'],
  },
  title: {
    fontSize: ['26px', '32px', '42px', '45px', '45px'],
    fontWeight: '700',
    // color: '#0f2137',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['5px', '8px', '8px', '8px', '8px'],
    lineHeight: '1.31',
    // textAlign: 'center',
  },
  description: {
    fontSize: ['18px', '20px', '20px', '24px', '24px'],
    // color: '#343d48cc',
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    // textAlign: 'center',
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
