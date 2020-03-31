import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import { FeatureItem } from '../hosting.style';
import Image from 'common/src/components/Image';

import someimage from 'common/src/assets/image/hosting/author-1.jpg';


import './icontexthover.css';

const IconTextHoverSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
  featureItemSubHeading,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container className="Icon_Hover_Container IT_IconHover">
        <Box {...row} className="feature_hover_section_container">
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="EyeMagic"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Speed up document processing using computer vision capabilities including advanced handwriting recognition."
                  />
                }
                icon={
                  <Image
                    src={EyeMagicIcon}
                    alt="EyeMagic"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="ResponseGenie"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Improve response time and enhance customer engagement with content, intent analysis and entity extraction."
                  />
                }
                icon={
                  <Image
                    src={ResponseGenieIcon}
                    alt="ResponseGenie"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="RPA"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Reduce costs by automating business workflows with the combined power of AI, RPA and IPA for greater efficiency."
                  />
                }
                icon={
                  <Image
                    src={RPAIcon}
                    alt="RPA"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>\
      {/* End of solution IT */}
    </Box>
  );
};

IconTextHoverSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
  featureItemSubHeading: PropTypes.object,
};

IconTextHoverSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'feature_hover_section',
    className: 'service_section',
    pt: ['15px', '15px', '15px', '15px'],
    background: 'transparent',
    // pb: ['60px', '80px', '80px', '100px'],
  },
  secTitleWrapper: {
    mb: ['10px', '10px', '10x', '10px'],
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
    fontSize: ['16px', '16px'],
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
  col: {
    className: 'col',
    width: [1, 0.5, 0.5, 0.25],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  col1: {
    className: 'col1',
    width: [1, 0.5, 0.5, 0.33],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  col2: {
    className: 'col2',
    width: [1, 0.5, 0.5, 0.33],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  featureItemHeading: {
    fontSize: ['16px', '16px', '18px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['5px', '5px', '5px', '5px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', '180px'],
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '15px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['10px', '10px', '10px', '10px'],
  },
  featureItemSubHeading: {
    fontSize: ['14px', '14px', '15px', '15px'],
    fontWeight: '400',
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['10px', '10px', '10px', '10px'],
  },
};

export default IconTextHoverSection;
