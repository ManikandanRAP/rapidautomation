import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';

import sample from 'common/src/assets/image/hosting/author-1.jpg';

import AIPoweredImg from 'common/src/assets/image/hosting/Pages/Form Recognition/AI-Powered Automation.svg';
import GreaterProductivityImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Greater Productivity.svg';
import Save50Img from 'common/src/assets/image/hosting/Pages/Form Recognition/Save About 50% of Your Cost.svg';
import IncredibleScalableImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Incredibly Scalable Solution.svg';
import ZeroInterventionImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Zero Manual Intervention.svg';
import ProcessMultipleImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Process Multiple Formats.svg';
import HandwritingImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Handwriting Recognition.svg';
import AccelerateProcessImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Accelerates Process Cycle.svg';
import ErrorFreeImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Error-free Recognition.svg';
import RequireOneTimeImg from 'common/src/assets/image/hosting/Pages/Form Recognition/Requires Just One-time Training.svg';

import './iconfloating.css';

const IconFloatingsection = ({
  sectionWrapper,
  row,
  col2,
  col3,
  col7,
  iconHead,
  iconDescription,
}) => {
  return (
    <Box {...sectionWrapper} className="Icon_Floating_Container">
      <Box {...row} className="margin_auto flexjustifyaround">
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={AIPoweredImg}
                alt="AI-Powered Automation"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>AI-Powered Automation</li>
                <li {...iconDescription}>
                  Automate form recognition and field validation with the power
                  of AI.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={GreaterProductivityImg}
                alt="Greater Productivity"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Greater Productivity</li>
                <li {...iconDescription}>
                  Improve productivity by processing more forms in a set
                  time-frame.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={Save50Img}
                alt="Save About 50% of Your Cost"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Save About 50% of Your Cost</li>
                <li {...iconDescription}>
                  Save 50% of the cost of processing forms by leveraging AI.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={IncredibleScalableImg}
                alt="Incredibly Scalable Solution"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Incredibly Scalable Solution</li>
                <li {...iconDescription}>
                  Easily Scale to demand and process forms with ease.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={ZeroInterventionImg}
                alt="Zero Manual Intervention"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Zero Manual Intervention</li>
                <li {...iconDescription}>
                  Eliminate the need for manual intervention across the
                  pipeline.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={ProcessMultipleImg}
                alt="Process Multiple Formats"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Process Multiple Formats</li>
                <li {...iconDescription}>
                  Accurately process a multitude of formats by utilizing trained
                  AI.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={HandwritingImg}
                alt="Handwriting Recognition"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Handwriting Recognition</li>
                <li {...iconDescription}>
                  Superior handwriting recognition with 95% accuracy.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={AccelerateProcessImg}
                alt="Accelerates Process Cycle"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Accelerates Process Cycle</li>
                <li {...iconDescription}>
                  Process scanned forms in mere seconds or minutes and not in
                  hours.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={ErrorFreeImg}
                alt="Error-free Recognition"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Error-free Recognition</li>
                <li {...iconDescription}>
                  Eliminate errors with AI-driven form recognition and field
                  validation.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box {...col2} className="icontext_card">
          <Box {...row} className="flexaligncenter">
            <Box {...col3}>
              <Image
                src={RequireOneTimeImg}
                alt="Requires Just One-time Training"
                className="icon_image"
              />
            </Box>
            <Box {...col7}>
              <ul>
                <li {...iconHead}>Requires Just One-time Training</li>
                <li {...iconDescription}>
                  Train multitude of formats and relevant parameters just once.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

IconFloatingsection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  iconHead: PropTypes.object,
  iconDescription: PropTypes.object,
};

IconFloatingsection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'IconFloating_section',
    className: 'IconFloating_section',
    pt: ['15px', '15px', '15px', '15px'],
    background: 'transparent',
    // pb: ['60px', '80px', '80px', '100px'],
  },

  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col7: {
    className: 'col7',
    width: [1, 1, 0.7, 0.7],
  },
  col3: {
    className: 'col3',
    width: [1, 1, 0.3, 0.3],
  },
  col2: {
    className: 'col2',
    width: [1, 0.45, 0.45, 0.45],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  iconHead: {
    className: 'iconHead',
    fontSize: ['18px', '18px', '20px', '20px'],
  },
  iconDescription: {
    className: 'iconDescription',
    fontSize: ['18px', '18px', '20px', '20px'],
  },
};

export default IconFloatingsection;
