import React from 'react';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Button from 'common/src/components/Button';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './ctasection.css';

const Ctasection = ({ button, box_size, cta_size_container }) => {
  return (
    <>
      <Container fullWidth noGutter className="cta_size_container">
        <Box className="Cta_container cta_FormRecognitionPage">
          <Box {...box_size}>
            <p>Accelerate form recognition with AI-powered automation.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact" className="btn btn_primary">
              <span className="btn-text">Book a Demo Now</span>
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_ITPage">
          <Box {...box_size}>
            <p>
              Automate processes using AI for speed, efficiency and savings.
            </p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact" className="btn btn_primary">
              <span className="btn-text">Schedule A Consultation</span>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

Ctasection.propTypes = {
  button: PropTypes.object,
  box_size: PropTypes.object,
};
Ctasection.defaultProps = {
  button: {
    type: 'button',
    fontSize: ['18px', '20px', '20px', '20px', '20px'],
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`,
  },
  box_size: {
    width: [1, 0.5, 0.5, 0.5],
  },
};

export default Ctasection;
