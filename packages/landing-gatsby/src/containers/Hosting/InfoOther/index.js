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

import ContactSection from '../Contact';

import { Link } from 'gatsby';

import sample from 'common/src/assets/image/hosting/author-3.jpg';

import './infoother.css';

const InfoOtherSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
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
      <Box className="multi_sections_container Contact_info_container">
        <Container>
          <Box className="empty_space20" />
          <Box {...textArea}>
            <Heading
              {...title}
              content="Unlock The True Potential Of Your Unstructured Content With RAP AI"
              className="text_center"
            />
            <Text
              {...description}
              className="text_justify"
              content="Achieve peak operational efficiencies with our Next-Gen Content Intelligence Platform. Curious to learn how it works? Fill in your information and our sales executives will be in touch shortly to set up a virtual demonstration. You will get to see a few working models and find out how you can transform your process efficiencies and disrupt your industry with RAP AI."
            />
          </Box>
        </Container>
        <ContactSection />
      </Box>
    </Box>
  );
};

InfoOtherSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
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

InfoOtherSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '30px'],
    // pb: ['25px', '25px', '25px', '30px', '30px'],
    id: 'info_other',
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
  col1: {
    width: ['100%', '100%', '30%', '30%', '30%'],
  },
  col2: {
    width: ['100%', '100%', '70%', '70%', '70%'],
  },
  textArea: {
    width: ['95%', '95%', '85%', '85%', '85%'],
    margin: '0 auto',
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
    pt: ['10px', '15px', '15px', '20px', '20px'],
    pb: ['10px', '15px', '15px', '20px', '20px'],
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    color: '#252525',
    lineHeight: '1.5',
    mt: ['10px', '15px', '15px', '20px', '20px'],
    mb: ['10px', '15px', '15px', '20px', '20px'],
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

export default InfoOtherSection;
