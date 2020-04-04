import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';

import './scrollfixed.css';

const Scrollfixed = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  textArea,
  contentArea,
}) => {
  return (
    <>
      <Box {...sectionWrapper} className="Scroll_MaximizeProEff">
        <Container>
          <Box className="scrollmain">
            <Box className="scrollmain_left">
              <Heading content="Maximize Process Efficiency" />
              <Text content="The RAP AI platform is a cutting-edge, AI-powered content intelligence platform that automates extraction of structured data from unstructured content – ranging from emails, images, support tickets, documents, contracts, checks, pretty much anything." />
              <ul>
                <li>Accelerate Processes</li>
                <li>Scale-up with ease</li>
                <li>Reduce Operating costs</li>
                <li>Enhance Accuracy</li>
                <li>Free Up Critical Resources</li>
              </ul>
            </Box>
            <Box className="scrollmain_right">
              <Box>
                <Box>
                  <Heading content="Unlimit Capacity" />
                  <Text content="Augment capacity with automation and scale-up volumes with greater accuracy and efficiency." />
                </Box>
                <Box>
                  <Heading content="30% – 70% Reduction" />
                  <Text content="Cut down Opex with automation powered by AI that provides accurate results faster at lesser cost." />
                </Box>
                <Box>
                  <Heading content="Reduction in errors" />
                  <Text content="Guaranteed accurate outputs and results through intelligent automation that minimizes errors." />
                </Box>
                <Box>
                  <Heading content="More man hours for critical tasks" />
                  <Text content="Free up critical resources for higher value-add tasks rather than repetitive low-value ones." />
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
};

Scrollfixed.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '30px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'scroll_fixed',
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
};

export default Scrollfixed;
