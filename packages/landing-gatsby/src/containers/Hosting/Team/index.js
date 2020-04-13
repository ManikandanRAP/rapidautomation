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

import { TeamWrapper, PartnerWrapper } from './team.style';

import { Link } from 'gatsby';

import Raghu from 'common/src/assets/image/hosting/Team/Raghu.jpg';
import Baskar from 'common/src/assets/image/hosting/Team/Baskar.jpg';
import Ramesh from 'common/src/assets/image/hosting/Team/Ramesh.jpg';
import Padmashali from 'common/src/assets/image/hosting/Team/Padmashali.jpg';
import Sundararaman from 'common/src/assets/image/hosting/Team/Sundarraman.jpg';
import Kanimozhi from 'common/src/assets/image/hosting/Team/Kanimozhi.jpg';
import aws from 'common/src/assets/image/hosting/Team/aws.png';
import virtues from 'common/src/assets/image/hosting/Team/virtues.png';

const Teamsection = ({
  row,
  col1,
  col2,
  title,
  description,
  Teamtitle,
  Teamdescription,
}) => {
  return (
    <Box>
      <TeamWrapper>
        <Box {...row} className="flexjustifycenter">
          <Box className="team_card" {...col1}>
            <Box className="team_image_wrapper">
              <a href="#">
                <Image src={Raghu} alt="Raghuraman Ramamurthy" />
                <i className="fa fa-linkedin" />
              </a>
            </Box>
            <Box className="team_text_wrapper">
              <Box className="name_plate">
                <Heading {...Teamtitle} content="Raghuraman Ramamurthy" />
                <Text {...Teamdescription} content="Founder & CEO" />
              </Box>
              {/* <ul className="social_links">
                                <li><a href="#"><i className="fa fa-facebook"/></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                            </ul> */}
            </Box>
          </Box>
          <Box className="team_card" {...col1}>
            <Box className="team_image_wrapper">
              <a href="#">
                <Image src={Baskar} alt="Baskar Agneeswaran" />
                <i className="fa fa-linkedin" />
              </a>
            </Box>
            <Box className="team_text_wrapper">
              <Box className="name_plate">
                <Heading {...Teamtitle} content="Baskar Agneeswaran" />
                <Text {...Teamdescription} content="Founder & Director" />
              </Box>
            </Box>
          </Box>
          <Box className="team_card" {...col1}>
            <Box className="team_image_wrapper">
              <a href="#">
                <Image src={Ramesh} alt="Ramesh Kumar" />
                <i className="fa fa-linkedin" />
              </a>
            </Box>
            <Box className="team_text_wrapper">
              <Box className="name_plate">
                <Heading {...Teamtitle} content="Ramesh Kumar" />
                <Text {...Teamdescription} content="Founder & Director" />
              </Box>
            </Box>
          </Box>
          <Box className="team_card" {...col1}>
            <Box className="team_image_wrapper">
              <a href="#">
                <Image src={Padmashali} alt="Padmashali Gyaneshwar" />
                <i className="fa fa-linkedin" />
              </a>
            </Box>
            <Box className="team_text_wrapper">
              <Box className="name_plate">
                <Heading {...Teamtitle} content="Padmashali Gyaneshwar" />
                <Text {...Teamdescription} content="Head of Delivery" />
              </Box>
            </Box>
          </Box>
          <Box className="team_card" {...col1}>
            <Box className="team_image_wrapper">
              <a href="#">
                <Image src={Sundararaman} alt="Sundararaman Vaidyanathan" />
                <i className="fa fa-linkedin" />
              </a>
            </Box>
            <Box className="team_text_wrapper">
              <Box className="name_plate">
                <Heading {...Teamtitle} content="Sundararaman Vaidyanathan" />
                <Text {...Teamdescription} content="Director of Products" />
              </Box>
            </Box>
          </Box>
          <Box className="team_card" {...col1}>
            <Box className="team_image_wrapper">
              <a href="#">
                <Image src={Kanimozhi} alt="Dr. Kanimozhi Uma" />
                <i className="fa fa-linkedin" />
              </a>
            </Box>
            <Box className="team_text_wrapper">
              <Box className="name_plate">
                <Heading {...Teamtitle} content="Dr. Kanimozhi Uma" />
                <Text {...Teamdescription} content="Principal AI Researcher" />
              </Box>
            </Box>
          </Box>
        </Box>
      </TeamWrapper>
      <PartnerWrapper>
        <Heading {...title} className="text_center" content="Partners" />
        <Text
          {...description}
          className="text_center"
          content="We’re proud to work with partners from a range of industries."
        />
        <Box {...row} className="flexjustifycenter">
          <Box {...col2}>
            <a href="#">
              <Image src={aws} alt="Amazon Web Services" />
            </a>
          </Box>
          <Box {...col2}>
            <a href="#">
              <Image src={virtues} alt="Virtues" />
            </a>
          </Box>
        </Box>
      </PartnerWrapper>
    </Box>
  );
};

Teamsection.propTypes = {
  row: PropTypes.object,
  col1: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  Teamtitle: PropTypes.object,
  Teamdescription: PropTypes.object,
};

Teamsection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col1: {
    width: [1, '33%', '33%', '28%', '28%'],
  },
  col2: {
    width: [1, '33%', '33%', '28%', '28%'],
  },
  title: {
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    pt: ['10px', '15px', '15px', '20px', '20px'],
    pb: ['10px', '15px', '15px', '20px', '20px'],
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    color: '#252525',
    lineHeight: '1.5',
    mt: ['10px', '15px', '15px', '20px', '20px'],
    mb: ['10px', '15px', '15px', '20px', '20px'],
  },
  Teamtitle: {
    fontSize: ['16px', '16px', '18px', '18px', '18px'],
    color: '#0f2137',
    pt: 0,
    pb: 0,
    mb: '7px',
  },
  Teamdescription: {
    fontSize: ['12px', '12px', '14px', '14px', '14px'],
    color: '#252525',
    mt: 0,
    mb: 0,
  },
};

export default Teamsection;
