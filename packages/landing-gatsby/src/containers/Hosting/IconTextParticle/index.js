import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import { FeatureItem } from '../hosting.style';
import Image from 'common/src/components/Image';
import AdditionalContentParticle from './additionalComponent';

import './icontextparticle.css';

import sample from 'common/src/assets/image/hosting/icon1.svg';

const IconParticleSection = ({
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
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container className="Icon_particle_Container FormRecognition_Iconparticle">
        <Box {...row} className="feature_section_container">
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Personalization2"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Personalized offers and strategies drive greater customer retention and sales."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Omnichannel"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Omnichannel engagement covers all your bases to maximize sales & profits."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Seamless"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="A truly seamless experience keeps customers delighted and returning for more."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Multi-Language"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Translate content into a customer’s preferred language for ease & convenience."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
        </Box>
      </Container>
      {/* end of FormRecognition */}
      <Container className="Icon_particle_Container IT_Iconparticle capabilities">
        <Box {...row} className="feature_section_container">
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Helpdesk"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Enhance helpdesk service with intelligent automation for responding to requests."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Response Automation"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Speed up service and improve accuracy with AI automation."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="IT Operations"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Certain routine IT operations can be automated for greater efficiency."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Workflow Automation"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Rule-based automation of workflows with RPA eliminates manual intervention."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
        </Box>
      </Container>

      <Container className="Icon_particle_Container IT_Iconparticle benefits">
        <Box {...row} className="feature_section_container">
          <Box {...col1}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="No AI Knowledge Needed"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="No AI understanding required to leverage the RAP AI platform."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col1}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Integration"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Easily integrates with existing solutions and systems enhancing them."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
          <Box {...col1}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Rapid Deployment"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Deployment is a quick and hassle-free process."
                  />
                }
                icon={
                  <Image
                    src={sample}
                    alt="alt"
                    className="home_features_icon"
                  />
                }
                additionalContent={<AdditionalContentParticle />}
              />
            )}
          </Box>
        </Box>
      </Container>

      {/* end of IT */}
    </Box>
  );
};

IconParticleSection.propTypes = {
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
};

IconParticleSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'feature_particle_section',
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
};

export default IconParticleSection;
