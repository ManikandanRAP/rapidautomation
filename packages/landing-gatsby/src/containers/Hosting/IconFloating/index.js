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
  col,
  col20,
  col30,
  col70,
  iconHead,
  iconsubHead,
  iconDescription,
  textArea,
}) => {
  return (
    <>
      <Box
        {...sectionWrapper}
        className="Icon_Floating_Container FormRecognition Benefits"
      >
        <Fade bottom cascade delay={120}>
          <Box {...row} className="margin_auto flexjustifyaround">
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={AIPoweredImg}
                    alt="AI-Powered Automation"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>AI-Powered Automation</li>
                    <li {...iconDescription}>
                      Automate form recognition and field validation with the
                      power of AI.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>

            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={GreaterProductivityImg}
                    alt="Greater Productivity"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
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
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={Save50Img}
                    alt="Save About 50% of Your Cost"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Save About 50% of Your Cost</li>
                    <li {...iconDescription}>
                      Save 50% of the cost of processing forms by leveraging AI.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={IncredibleScalableImg}
                    alt="Incredibly Scalable Solution"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Incredibly Scalable Solution</li>
                    <li {...iconDescription}>
                      Easily Scale to demand and process forms with ease.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={ZeroInterventionImg}
                    alt="Zero Manual Intervention"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
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
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={ProcessMultipleImg}
                    alt="Process Multiple Formats"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Process Multiple Formats</li>
                    <li {...iconDescription}>
                      Accurately process a multitude of formats by utilizing
                      trained AI.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={HandwritingImg}
                    alt="Handwriting Recognition"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Handwriting Recognition</li>
                    <li {...iconDescription}>
                      Superior handwriting recognition with 95% accuracy.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={AccelerateProcessImg}
                    alt="Accelerates Process Cycle"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Accelerates Process Cycle</li>
                    <li {...iconDescription}>
                      Process scanned forms in mere seconds or minutes and not
                      in hours.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={ErrorFreeImg}
                    alt="Error-free Recognition"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
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
            <Box {...col} className="icontext_card">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={RequireOneTimeImg}
                    alt="Requires Just One-time Training"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Requires Just One-time Training</li>
                    <li {...iconDescription}>
                      Train multitude of formats and relevant parameters just
                      once.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
      {/* end of  */}
      <Box
        {...sectionWrapper}
        className="Icon_Floating_Container Home MaxProEff"
      >
        <Fade bottom cascade delay={120}>
          <Box {...row} className="margin_auto flexjustifyaround">
            <Box {...col30} className="icontext_card icontext_card_whitebg">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={AccelerateProcessImg}
                    alt="Accelerate Process"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Accelerate Processes</li>
                    <li {...iconsubHead}>From days to minutes</li>
                    <li {...iconDescription}>
                      Leverage automation for faster processes with higher
                      operational efficiency and accuracy.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col30} className="icontext_card icontext_card_whitebg">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={IncredibleScalableImg}
                    alt="Unlimit Capacity"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Scale-up with ease</li>
                    <li {...iconsubHead}>Unlimit Capacity</li>
                    <li {...iconDescription}>
                      Augment capacity with automation and scale-up volumes with
                      greater accuracy and efficiency.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col30} className="icontext_card icontext_card_whitebg">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={Save50Img}
                    alt="Reduce operation costs"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Reduce Operating costs</li>
                    <li {...iconsubHead}>30% – 70% Reduction</li>
                    <li {...iconDescription}>
                      Cut down Opex with automation powered by AI that provides
                      accurate results faster at lesser cost.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="empty_space30" />
          <Box {...row} className="flexjustifycenter">
            <Box {...col30} className="icontext_card icontext_card_whitebg mr3">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={ErrorFreeImg}
                    alt="Accuary"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Enhance Accuracy</li>
                    <li {...iconsubHead}>Reduction in errors</li>
                    <li {...iconDescription}>
                      Guaranteed accurate outputs and results through
                      intelligent automation that minimizes errors.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box {...col30} className="icontext_card icontext_card_whitebg">
              <Box {...row} className="flexaligncenter">
                <Box {...col30}>
                  <Image
                    src={ZeroInterventionImg}
                    alt="Free Up Critical Resources"
                    className="icon_image"
                  />
                </Box>
                <Box {...col70}>
                  <ul>
                    <li {...iconHead}>Free Up Critical Resources</li>
                    <li {...iconsubHead}>More man hours for critical tasks</li>
                    <li {...iconDescription}>
                      Free up critical resources for higher value-add tasks
                      rather than repetitive low-value ones.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
      {/* end of home maximum process efficiency */}
      <Box
        {...sectionWrapper}
        className="Icon_Floating_Container Home Applications"
      >
        <Fade bottom cascade delay={120}>
          <Box {...textArea}>
            <Box {...row} className="margin_auto flexjustifyaround">
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Form Recognition"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Form Recognition</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Intelligent Email Response"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Intelligent Email Response</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Check Recognition"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Check Recognition</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Quote Processing"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Quote Processing</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Case Deflection"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Case Deflection</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Invoice Processing"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Invoice Processing</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="Lease Abstraction"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>Lease Abstraction</li>
                  </ul>
                </Box>
              </Box>
              <Box {...col20} className="icontext_card_nobg">
                <Box>
                  <ul>
                    <li>
                      <Image
                        src={AccelerateProcessImg}
                        alt="ID Verification"
                        className="icon_image"
                      />
                    </li>
                    <li {...iconHead}>ID Verification</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

IconFloatingsection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col1: PropTypes.object,
  col: PropTypes.object,
  iconHead: PropTypes.object,
  iconsubHead: PropTypes.object,
  iconDescription: PropTypes.object,
  textArea: PropTypes.object,
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
  col: {
    className: 'col',
    width: [1, 0.45, 0.45, 0.45],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  col20: {
    className: 'col20',
    width: [0.4, 0.15, 0.15, 0.2],
  },
  col30: {
    className: 'col30',
    width: [1, 1, 0.3, 0.3],
  },
  col70: {
    className: 'col70',
    width: [1, 1, 0.7, 0.7],
  },
  iconHead: {
    fontSize: ['18px', '18px', '20px', '20px'],
    className: 'iconHead',
  },
  iconsubHead: {
    fontSize: ['18px', '18px', '20px', '20px'],
    className: 'iconsubHead',
  },
  textArea: {
    width: ['100%', '85%', '85%', '85%', '80%'],
    margin: '0 auto',
  },
  iconDescription: {
    className: 'iconDescription',
    fontSize: ['18px', '18px', '20px', '20px'],
  },
};

export default IconFloatingsection;
