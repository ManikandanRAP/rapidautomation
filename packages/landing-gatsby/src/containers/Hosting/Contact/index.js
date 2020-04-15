import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';

import axios from 'axios';

import ContactFromWrapper from './contact.style';

const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
}) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/7683b371-ada9-47cb-8ae8-307a6f2afc07',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          'Thanks for contacting us! We will get back to you soon.',
          form
        );
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <Box {...sectionWrapper}>
      <Box {...row}>
        <Box {...contactForm}>
          <ContactFromWrapper>
            <form onSubmit={handleOnSubmit}>
              <Box className="form_fields">
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="name"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  aria-label="email"
                  name="email"
                  required
                />
                {/* <input
                    type="tel"
                    placeholder="Phone number"
                    aria-label="phone"
                    name="phone"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    aria-label="phone"
                    name="company"
                  /> 
                  <input
                    type="text"
                    placeholder="Country or Region"
                    aria-label="phone"
                    className="input_full_width"
                    name="country"
                  />
                  */}
                <select name="Interest" className="input_full_width">
                  <option value="Not selected" disabled selected>
                    What would you like to get out of this demo?
                  </option>
                  <option value="Show me how it works">
                    Show me how it works
                  </option>
                  <option value="Show me document processing capabilities">
                    Show me document processing capabilities
                  </option>
                  <option value="Show me intent classification capabilities">
                    Show me intent classification capabilities
                  </option>
                  <option value="RAP AI for Banking and Financial institutions">
                    RAP AI for Banking and Financial institutions
                  </option>
                  <option value="RAP AI for Insurance companies">
                    RAP AI for Insurance companies
                  </option>
                  <option value="RAP AI for RCM, Medical Billing and Medical Coding Companies">
                    RAP AI for RCM, Medical Billing and Medical Coding Companies
                  </option>
                  <option value="RAP AI for Healthcare Companies">
                    RAP AI for Healthcare Companies
                  </option>
                  <option value="RAP AI for Logistics companies">
                    RAP AI for Logistics companies
                  </option>
                  <option value="RAP AI for Real Estate companies">
                    RAP AI for Real Estate companies
                  </option>
                  <option value="RAP AI for IT department">
                    RAP AI for IT department
                  </option>
                  <option value="RAP AI for Finance and Procurement Department">
                    RAP AI for Finance and Procurement Department
                  </option>
                  <option value="RAP AI for Customer Service Department">
                    RAP AI for Customer Service Department
                  </option>
                  <option value="RAP AI for Operations Department">
                    RAP AI for Operations Department
                  </option>
                  <option value="I am interested in exploring partnership opportunities">
                    I am interested in exploring partnership opportunities
                  </option>
                  <option value="Other">Other (please specify)</option>
                </select>
                <textarea
                  placeholder="Specific Queries"
                  aria-label="phone"
                  name="message"
                  className="messagebox input_full_width"
                />
              </Box>
              <Button {...button} title="SUBMIT" type="submit" />
              {serverState.status && (
                <p className={!serverState.status.ok ? 'errorMsg' : ''}>
                  {serverState.status.msg}
                </p>
              )}
              <div className="empty_space20" />
            </form>
            <Text
              {...note}
              content="Note: Please call us at 12pm to 8am. otherwise our customer supporter will not  available to reach your call, but you can drop mail anytime."
            />
          </ContactFromWrapper>
        </Box>
      </Box>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['35px', '35px', '50px', '60px'],
    pb: ['35px', '35px', '50px', '60px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, '80%', '60%', '60%'],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection;
