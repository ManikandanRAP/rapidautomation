import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Logo from 'common/src/components/UIElements/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { Link } from 'gatsby';

import LogoImage from 'common/src/assets/image/hosting/logo.svg';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  colThree,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        FOOTER_WIDGET {
          title
          menuItems {
            text
            url
          }
        }
      }
    }
  `);

  function cokkieBtn() {
    document.cookie = 'username=RapUser; path=/;';
    document.getElementById('___gatsby').classList.remove('cookie_msg_show');
  }

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="/"
              logoSrc={LogoImage}
              title="Rapid Acceleration Partners"
              className="footer_logo"
              logoStyle={logoStyle}
            />
            <Text
              content="RAP AI is a Next-Gen Content Intelligence Platform that extracts structured data from a range of unstructured content and automates workflows."
              {...textStyle}
            />
            <Box className="socialmedia_icons">
              <a href="#">
                <i className="fa fa-twitter-square" />
              </a>
              <a href="#">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest-square" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </Box>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo} className="colTwo flexjustifycenter">
            {Data.hostingJson.FOOTER_WIDGET.map((widget, index) => (
              <Box key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <a href={item.url} className="ListItem">
                        {item.text}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
          <Box {...colThree}>
            <Box>
              <Heading content="Recent Posts" {...titleStyle} />
              <List>
                <ListItem>
                  <a href="#" className="customItem ListItem">
                    Superior Customer Experience through Next-Generation AI &
                    Intelligent Process Automation (IPA)
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#" className="ListItem">
                    AI for Invoice Processing
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#" className="ListItem">
                    AI for Identity Verification
                  </a>
                </ListItem>
              </List>
            </Box>
          </Box>
          {/* End of footer List column */}
        </Box>
        <Box className="copyright_container">
          <p className="text_center">
            Copyright &copy; {new Date().getFullYear()} Rapid Acceleration
            Partners, Inc.
          </p>
        </Box>
      </Container>
      <Box id="scrollTopBtn" onClick={() => scrollTo('#___gatsby')}>
        <i className="fa fa-chevron-up" />
      </Box>
      <Box id="Cookie_msg">
        <div>
          We use cookies to ensure that we give you the best experience on our
          website. If you continue to use this site we will assume that you are
          happy with it.
          <span className="cookie_btn" onClick={() => cokkieBtn()}>
            OK
          </span>
        </div>
      </Box>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  colThree: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  colOne: {
    width: [1, '40%', '40%', '30%'],
    mt: [0, '0px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  colTwo: {
    className: 'colTwo',
    width: [1, '30%', '30%', '35%'],
    flexBox: true,
    flexWrap: 'wrap',
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  colThree: {
    width: [1, '30%', '30%', '35%'],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '10px',
  },
  logoStyle: {
    width: '130px',
    mb: '15px',
  },
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;
