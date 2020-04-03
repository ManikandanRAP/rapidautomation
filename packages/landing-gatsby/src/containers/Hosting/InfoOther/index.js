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

// import IconParticleSection from '../IconTextParticle';
import IconFloatingSection from '../IconFloating';
import BgImageDark from '../BgImagedark';

import sample from 'common/src/assets/image/hosting/author-3.jpg';

import './infoother.css';

const InfoHomeSection = ({
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
      <Box className="multi_sections_container Home_info_container">
        <Container className="maxproeff_container">
          <Fade bottom cascade>
            <Box className="empty_space20" />
            <Box {...textArea}>
              <Heading
                {...title}
                content="Maximize Process Efficiency"
                className="text_center"
              />
              <Text
                {...description}
                className="text_justify"
                content="The RAP AI platform is a cutting-edge, AI-powered content intelligence platform that automates extraction of structured data from unstructured content – ranging from emails, images, support tickets, documents, contracts, checks, pretty much anything."
              />
            </Box>
            <IconFloatingSection />
            <Box className="empty_space40" />
          </Fade>
        </Container>

        <Box className="applications_container">
          <Box className="section_background_blue">
            <BgImageDark />
            <Container>
              <Fade bottom cascade>
                <Box className="empty_space20" />
                <Box {...textArea}>
                  <Heading
                    {...title}
                    content="Applications"
                    className="text_center"
                  />
                  <Text
                    {...description}
                    className="text_center text_white"
                    content="Innovation through automation is key to successful business transformation. To this end, we have a multitude of applications that you can choose from, powered by EyeMagic, ResponseGenie or both."
                  />
                </Box>
              </Fade>
              <IconFloatingSection />
              <Box className="empty_space40" />
            </Container>
          </Box>
        </Box>
      </Box>

      {/* <Box className="multi_sections_container Home_info_container">
        <Container className="platform_container">
          <Fade bottom cascade>
            <Box className="empty_space20" />
            <Box {...row} className="flexaligncenter">
              <Box {...col1}>
                <Heading {...title} content="The Platform" />
              </Box>
              <Box {...col2}>
                <Text
                  {...description}
                  className="text_justify"
                  content="The RAP AI platform with its core engines – EyeMagic and ResponseGenie automates a range of tasks and processes across various industries with extremely high efficiency and accuracy. IPA (Intelligent Process Automation) combines the power of business process automation, RPA and AI to extract structured content from a range of sources."
                />
              </Box>
            </Box>
            <Box className="empty_space20" />
            <IconTextHoverSection />
            <Box className="empty_space20" />
          </Fade>
        </Container>

        <Box className="section_background_color">
          <Container className="maxproeff_container">
            <Fade bottom cascade>
              <Box className="empty_space20" />
              <Box {...row} className="flexaligncenter">
                <Box {...col1}>
                  <Heading {...title} content="Maximize Process Efficiency" />
                </Box>
                <Box {...col2}>
                  <Text
                    {...description}
                    className="text_justify"
                    content="The RAP AI platform is a cutting-edge, AI-powered content intelligence platform that automates extraction of structured data from unstructured content – ranging from emails, images, support tickets, documents, contracts, checks, pretty much anything."
                  />
                </Box>
              </Box>
              <Box className="empty_space20" />
              <IconTextHoverSection />
              <Box className="empty_space20" />
            </Fade>
          </Container>
        </Box>

        <Container className="applications_container">
          <Fade bottom cascade>
            <Box className="empty_space20" />
            <Box {...row} className="flexaligncenter">
              <Box {...col1}>
                <Heading {...title} content="Applications" />
              </Box>
              <Box {...col2}>
                <Text
                  {...description}
                  className="text_justify"
                  content="Innovation through automation is key to successful business transformation. To this end, we have a multitude of applications that you can choose from, powered by EyeMagic, ResponseGenie or both."
                />
              </Box>
            </Box>
            <Box className="empty_space20" />
            <IconTextHoverSection />
            <Box className="empty_space20" />
          </Fade>
        </Container>

        <Box className="section_background_color">
          <Container className="revolutionizingoper_container">
            <Fade bottom cascade>
              <Box className="empty_space20" />
              <Box {...row} className="flexaligncenter">
                <Box {...col1}>
                  <Heading
                    {...title}
                    content="Revolutionizing Operational Efficiency Across Industries"
                  />
                </Box>
                <Box {...col2}>
                  <Text
                    {...description}
                    className="text_justify"
                    content="AI-powered tools and automation can transform operations, processes and workflows across a wide range of industries. Our AI platforms can integrate with your existing systems and augment capabilities, pulling data from existing multiple sources to automate and accelerate processes. Transform the way you do business, unleash your full potential, and take advantage of new opportunities."
                  />
                </Box>
              </Box>
              <Box className="empty_space20" />
              <IconTextHoverSection />
              <Box className="empty_space20" />
            </Fade>
          </Container>
        </Box>
      </Box>
      */}
      {/* end of Home page */}
    </Box>
  );
};

InfoHomeSection.propTypes = {
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

InfoHomeSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '30px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
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
    mt: ['10px', '15px', '15px', '20px', '20px'],
    mb: ['10px', '15px', '15px', '20px', '20px'],
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

export default InfoHomeSection;
