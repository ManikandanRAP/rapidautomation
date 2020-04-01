import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import { FeatureItem } from '../hosting.style';
import Image from 'common/src/components/Image';

import sample from 'common/src/assets/image/hosting/author-1.jpg';

import './icontexthover.css';

const IconTextHoverSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
  col5,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
  featureItemSubHeading,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container className="Icon_Hover_Container IT_Iconhover capability">
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      <Container className="Icon_Hover_Container IT_Iconhover benefits">
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
                    content="EyeMagic2"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* End of solution IT */}
      <Container className="Icon_Hover_Container FormRecognition_Iconhover benefits">
        <Box {...row} className="feature_hover_section_container">
          <Box {...col5}>
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
                    content="AI-Powered Automation"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Automate form recognition and field validation with the power of AI."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Greater Productivity"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Improve productivity by processing more forms in a set time-frame."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Save About 50% of Your Cost"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Save 50% of the cost of processing forms by leveraging AI."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Incredibly Scalable Solution"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Easlily Scale to demand and process forms with ease."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Zero Manual Intervention"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Eliminate the need for manual intervention across the pipeline."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          {/* gap */}
          <Box {...col5}>
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
                    content="Process Multiple Formats"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Accurately process a multitude of formats by utilizing trained AI."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="Process Multiple Formats"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Handwriting Recognition"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Superior handwriting recognition with 95% accuracy."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Accelerates Process Cycle"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Process scanned forms in mere seconds or minutes and not in hours."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="Accelerates Process Cycle"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Error-free Recognition"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Eliminate errors with AI-driven form recognition and field validation."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="Error-free Recognition"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col5}>
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
                    content="Requires Just One-time Training"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Train multitude of formats and relevant parameters just once."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* End of application form recognition */}
      <Container className="Icon_Hover_Container Home_Iconhover platform">
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
                    content="EyeMagic4"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* End of home platform */}
      <Container className="Icon_Hover_Container Home_Iconhover maximizeproeff">
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
                    content="EyeMagic4"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* End of home maximize process effeciency */}
      <Container className="Icon_Hover_Container Home_Iconhover applications">
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
                    content="EyeMagic4"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* End of home applications */}
      <Container className="Icon_Hover_Container Home_Iconhover revolutionizingoper">
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
                    content="EyeMagic4"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
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
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* End of home revolutionizing operation effecient */}
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
  col5: PropTypes.object,
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
  col5: {
    className: 'col5',
    width: [1, 0.5, 0.5, 0.2],
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
