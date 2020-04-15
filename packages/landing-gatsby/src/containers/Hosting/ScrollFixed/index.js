import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import { List, ListItem } from './scrollFixed.style';
import './scrollfixed.css';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { Link } from 'gatsby';

import sample from 'common/src/assets/image/hosting/badge.png';
import AccelerateProcess from 'common/src/assets/image/hosting/ScrollFixed/MaxProEff/Accelerate Processes.svg';
import EnhanceAccuary from 'common/src/assets/image/hosting/ScrollFixed/MaxProEff/Enhance Accuracy.svg';
import FreeupResource from 'common/src/assets/image/hosting/ScrollFixed/MaxProEff/Free Up Critical Resources.svg';
import ReduceOperatingCost from 'common/src/assets/image/hosting/ScrollFixed/MaxProEff/Reduce Operating costs.svg';
import ScaleupEase from 'common/src/assets/image/hosting/ScrollFixed/MaxProEff/Scale-up with ease.svg';

const Scrollfixed = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  textArea,
  contentArea,
  listitems,
}) => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function(e) {
      const content = document.querySelector('.scrollmain_right_content');
      if (content != null) {
        const isInViewport = function(data) {
          let bounding = data.getBoundingClientRect();
          let boundingTopOffset = bounding.top - 105;
          let boundingBottom = bounding.bottom;
          // let boundingBottomOffset = bounding.bottom;
          return boundingTopOffset <= 0 && boundingBottom >= 0;
        };

        const content1 = document.querySelector(
          '.scrollmain_right_content._ct1'
        );
        const content2 = document.querySelector(
          '.scrollmain_right_content._ct2'
        );
        const content3 = document.querySelector(
          '.scrollmain_right_content._ct3'
        );
        const content4 = document.querySelector(
          '.scrollmain_right_content._ct4'
        );
        const content5 = document.querySelector(
          '.scrollmain_right_content._ct5'
        );

        if (isInViewport(content1)) {
          document
            .querySelectorAll('.scrollmain_left_items li')[0]
            .classList.add('active');
        } else {
          document
            .querySelectorAll('.scrollmain_left_items li')[0]
            .classList.remove('active');
        }
        if (isInViewport(content2)) {
          document
            .querySelectorAll('.scrollmain_left_items li')[1]
            .classList.add('active');
        } else {
          document
            .querySelectorAll('.scrollmain_left_items li')[1]
            .classList.remove('active');
        }
        if (isInViewport(content3)) {
          document
            .querySelectorAll('.scrollmain_left_items li')[2]
            .classList.add('active');
        } else {
          document
            .querySelectorAll('.scrollmain_left_items li')[2]
            .classList.remove('active');
        }
        if (isInViewport(content4)) {
          document
            .querySelectorAll('.scrollmain_left_items li')[3]
            .classList.add('active');
        } else {
          document
            .querySelectorAll('.scrollmain_left_items li')[3]
            .classList.remove('active');
        }
        if (isInViewport(content5)) {
          document
            .querySelectorAll('.scrollmain_left_items li')[4]
            .classList.add('active');
        } else {
          document
            .querySelectorAll('.scrollmain_left_items li')[4]
            .classList.remove('active');
        }
      }
    });
  }
  return (
    <>
      <Box {...sectionWrapper} className="Scroll_MaximizeProEff">
        <Container>
          <Box className="scrollmain">
            <Box className="scrollmain_left">
              <Heading {...title} content="Maximize Process Efficiency" />
              <Text
                {...description}
                content="The RAP AI platform is a cutting-edge, AI-powered content intelligence platform that automates extraction of structured data from unstructured content – ranging from emails, images, support tickets, documents, contracts, checks, pretty much anything."
              />
              <List className="scrollmain_left_items">
                <ListItem {...listitems} onClick={() => scrollTo('#__ct1')}>
                  Accelerate Processes
                </ListItem>
                <ListItem {...listitems} onClick={() => scrollTo('#__ct2')}>
                  Scale-up with ease
                </ListItem>
                <ListItem {...listitems} onClick={() => scrollTo('#__ct3')}>
                  Reduce Operating costs
                </ListItem>
                <ListItem {...listitems} onClick={() => scrollTo('#__ct4')}>
                  Enhance Accuracy
                </ListItem>
                <ListItem {...listitems} onClick={() => scrollTo('#__ct5')}>
                  Free Up Critical Resources
                </ListItem>
              </List>
              <Box className="empty_space20" />
              <Link to="/contact" className="btn btn_secondary dark">
                <span className="btn-text">Getting Started</span>
              </Link>
            </Box>
            <Box className="scrollmain_right">
              <Box className="scrollmain_right_container">
                <Box className="scrollmain_right_content _ct1">
                  <Box id="__ct1" className="topic" />
                  <Image src={AccelerateProcess} alt="Accelerate Process" />
                  <Heading {...title} content="From days to minutes" />
                  <Text
                    {...description}
                    content="Leverage automation for faster processes with higher operational efficiency and accuracy."
                  />
                </Box>
                <Box className="scrollmain_right_content _ct2">
                  <Box id="__ct2" className="topic" />
                  <Image src={FreeupResource} alt="Unlimit Capacity" />
                  <Heading {...title} content="Unlimit Capacity" />
                  <Text
                    {...description}
                    content="Augment capacity with automation and scale-up volumes with greater accuracy and efficiency."
                  />
                </Box>
                <Box className="scrollmain_right_content _ct3">
                  <Box id="__ct3" className="topic" />
                  <Image src={ReduceOperatingCost} alt="Cost Reduction" />
                  <Heading {...title} content="30% – 70% Reduction" />
                  <Text
                    {...description}
                    content="Cut down Opex with automation powered by AI that provides accurate results faster at lesser cost."
                  />
                </Box>
                <Box className="scrollmain_right_content _ct4">
                  <Box id="__ct4" className="topic" />
                  <Image src={EnhanceAccuary} alt="Reduction in errors" />
                  <Heading {...title} content="Reduction in errors" />
                  <Text
                    {...description}
                    content="Guaranteed accurate outputs and results through intelligent automation that minimizes errors."
                  />
                </Box>
                <Box className="scrollmain_right_content _ct5">
                  <Box id="__ct5" className="topic" />
                  <Image
                    src={ScaleupEase}
                    alt="More man hours for critical tasks"
                  />
                  <Heading
                    {...title}
                    content="More man hours for critical tasks"
                  />
                  <Text
                    {...description}
                    content="Free up critical resources for higher value-add tasks rather than repetitive low-value ones."
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Scrollfixed.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  textArea: PropTypes.object,
  contentArea: PropTypes.object,
  listitems: PropTypes.object,
};

Scrollfixed.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['30px', '45px', '45px', '50px', '70px'],
    pb: ['30px', '45px', '45px', '50px', '70px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'scroll_fixed',
    backgroundColor: '#191c3c',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '49%', '49%'],
  },
  textArea: {
    width: ['100%', '100%', '100%', '49%', '49%'],
  },
  contentArea: {
    width: ['100%', '100%', '80%', '80%', '80%'],
    margin: '0 auto',
  },
  title: {
    fontSize: ['30px', '30px', '35px', '40px', '40px'],
    fontWeight: '300',
    // color: '#0f2137',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '25px',
    pt: '25px',
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    // color: '#252525',
    color: '#fff',
    lineHeight: '1.5',
    mb: '15px',
  },
  listitems: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    color: '#fff',
    lineHeight: '1.5',
    mb: '15px',
  },
};

export default Scrollfixed;
