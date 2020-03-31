import React from 'react';
import { Link } from 'gatsby';

import './mobilemenu.css';

// import leftarrow from 'common/src/assets/image/hosting/Symbols/arrow_left.png';

const MainMobilemenu1 = () => {
  const goHome = () => {
    document
      .getElementById('Mobile_menu_container')
      .classList.remove('sub_Menu');
    document.getElementById('mainmobilemenu').style.display = 'block';
    document.getElementById('solutionsmenu').style.display = 'none';
    document.getElementById('servicesmenu').style.display = 'none';
    document.getElementById('productsmenu').style.display = 'none';
    document.getElementById('aboutsmenu').style.display = 'none';
    document.getElementById('solutionssubmenu').classList.remove('showmenu');
    document.getElementById('solutionssubmenu2').classList.remove('showmenu');
    document.getElementById('solutionssubmenu3').classList.remove('showmenu');
    document.getElementById('servicessubmenu').classList.remove('showmenu');
    document.getElementById('servicessubmenu2').classList.remove('showmenu');
    document.getElementById('servicessubmenu3').classList.remove('showmenu');
    document.getElementById('sol_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('sol2_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('sol3_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('ser_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('ser2_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('ser3_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('about_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('prod_arrow_down').classList.remove('arrowtoggle');
    document.getElementById('productsmenu').classList.remove('showmenu');
    document.getElementById('aboutsmenu').classList.remove('showmenu');
  };

  const SolutionsMenu = () => {
    document.getElementById('mainmobilemenu').style.display = 'none';
    document.getElementById('solutionsmenu').style.display = 'block';
    document.getElementById('Mobile_menu_container').classList.add('sub_Menu');
  };
  const SolutionsSubMenu = () => {
    document.getElementById('solutionssubmenu').classList.toggle('showmenu');
    document.getElementById('sol_arrow_down').classList.toggle('arrowtoggle');
  };
  const SolutionsSubMenu2 = () => {
    document.getElementById('solutionssubmenu2').classList.toggle('showmenu');
    document.getElementById('sol2_arrow_down').classList.toggle('arrowtoggle');
  };
  const SolutionsSubMenu3 = () => {
    document.getElementById('solutionssubmenu3').classList.toggle('showmenu');
    document.getElementById('sol3_arrow_down').classList.toggle('arrowtoggle');
  };
  // solution
  const ServicesMenu = () => {
    document.getElementById('mainmobilemenu').style.display = 'none';
    document.getElementById('servicesmenu').style.display = 'block';
    document.getElementById('Mobile_menu_container').classList.add('sub_Menu');
  };
  const ServicesSubMenu = () => {
    document.getElementById('servicessubmenu').classList.toggle('showmenu');
    document.getElementById('ser_arrow_down').classList.toggle('arrowtoggle');
  };
  const ServicesSubMenu2 = () => {
    document.getElementById('servicessubmenu2').classList.toggle('showmenu');
    document.getElementById('ser2_arrow_down').classList.toggle('arrowtoggle');
  };
  const ServicesSubMenu3 = () => {
    document.getElementById('servicessubmenu3').classList.toggle('showmenu');
    document.getElementById('ser3_arrow_down').classList.toggle('arrowtoggle');
  };
  // services
  const ProductsMenu = () => {
    document.getElementById('productsmenu').classList.toggle('showmenu');
    document.getElementById('prod_arrow_down').classList.toggle('arrowtoggle');
  };
  // products
  const AboutsMenu = () => {
    document.getElementById('aboutsmenu').classList.toggle('showmenu');
    document.getElementById('about_arrow_down').classList.toggle('arrowtoggle');
  };
  // about
  return (
    <>
      <div id="Mobile_menu_container">
        <span onClick={goHome} className="icons_image">
          {/* <img src={leftarrow} /> */}
          <i className="fa fa-chevron-left"/>
        </span>
        <ul className="scrollspy__menu mobile_menu" id="mainmobilemenu">
          <li onClick={SolutionsMenu}>
            Solutions
            <span className="Mobile_caret">
              <li className="fa fa-chevron-right" />
            </span>
          </li>
          <li onClick={ServicesMenu}>
            Services
            <span className="Mobile_caret">
              <li className="fa fa-chevron-right" />
            </span>
          </li>
          <li onClick={ProductsMenu}>
            Products
            <span className="Mobile_caret Mobile_caret_down">
              <li id="prod_arrow_down" className="fa fa-chevron-down" />
            </span>
          </li>
          <ul
            className="scrollspy__menu mobile_menu mobile_sub_menu mobile_drop_menu"
            id="productsmenu"
          >
            <Link to="/products/universal-commerce-suite">
              <li>Universal Commerce Suite</li>
            </Link>
            <Link to="/products/universal-retail-dashboard">
              <li>Universal Retail Dashboard</li>
            </Link>
            <Link to="/products/universal-virtual-agent">
              <li>Universal Virtual Agent</li>
            </Link>
            <Link to="/products/universal-automation-suite">
              <li>Universal Automation Suite</li>
            </Link>
          </ul>
          <li onClick={AboutsMenu}>
            About
            <span className="Mobile_caret Mobile_caret_down">
              <li id="about_arrow_down" className="fa fa-chevron-down" />
            </span>
          </li>
          <ul
            className="scrollspy__menu mobile_menu mobile_sub_menu mobile_drop_menu"
            id="aboutsmenu"
          >
            <Link to="/company">
              <li>Company</li>
            </Link>
            <Link to="/partners">
              <li>Partners</li>
            </Link>
            <Link to="/customers">
              <li>Customers</li>
            </Link>
            <Link to="/media-white-papers">
              <li>Media & White Papers</li>
            </Link>
          </ul>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="solutionsmenu"
        >
          <li className="submenu_heading">Solutions</li>
          <ul>
            <li onClick={SolutionsSubMenu}>
              Business Model{' '}
              <span className="Mobile_caret">
                <li id="sol_arrow_down" className="fa fa-chevron-right" />
              </span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu">
              <Link to="/solutions/b2c">
                <li>B2C</li>
              </Link>
              <Link to="/solutions/b2b">
                <li>B2B</li>
              </Link>
              <Link to="/solutions/market-places">
                <li>Market Places</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={SolutionsSubMenu2}>
              Industry{' '}
              <span className="Mobile_caret">
                <li id="sol2_arrow_down" className="fa fa-chevron-right" />
              </span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu2">
              <Link to="/solutions/retail">
                <li>Retail</li>
              </Link>
              <Link to="/solutions/banking">
                <li>Banking</li>
              </Link>
              <Link to="/solutions/telecom">
                <li>Telecom</li>
              </Link>
              <Link to="/solutions/food-grocery">
                <li>Food & Grocery</li>
              </Link>
              <Link to="/solutions/government-education">
                <li>Government & Education</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={SolutionsSubMenu3}>
              Capability{' '}
              <span className="Mobile_caret">
                <li id="sol3_arrow_down" className="fa fa-chevron-right" />
              </span>
            </li>
            <ul className="mobile_drop_menu" id="solutionssubmenu3">
              <Link to="/solutions/headless-commerce/">
                <li>Headless Commerce</li>
              </Link>
              <Link to="/solutions/omnichannel">
                <li>Omnichannel</li>
              </Link>
              <Link to="/solutions/digital-experience-cx">
                <li>Digital Experience & CX</li>
              </Link>
              <Link to="/solutions/order-management">
                <li>Order Management</li>
              </Link>
              <Link to="/solutions/experience-analytics">
                <li>Experience Analytics</li>
              </Link>
              <Link to="/solutions/marketing">
                <li>Marketing</li>
              </Link>
              <Link to="/solutions/automation-ai">
                <li>Automation & AI</li>
              </Link>
              <Link to="/solutions/iot-blockchain">
                <li>IOT & Blockchain</li>
              </Link>
            </ul>
          </ul>
        </ul>
        <ul
          className="scrollspy__menu mobile_menu mobile_sub_menu"
          id="servicesmenu"
        >
          <li className="submenu_heading">Services</li>
          <ul>
            <li onClick={ServicesSubMenu}>
              Consulting{' '}
              <span className="Mobile_caret">
                <li id="ser_arrow_down" className="fa fa-chevron-right" />
              </span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu">
              <Link to="/services/dr-commerce">
                <li>Dr. Commerce</li>
              </Link>
              <Link to="/services/strategy-roadmap">
                <li>Strategy & Roadmap</li>
              </Link>
              <Link to="/services/analytics-insights">
                <li>Analytics & Insights</li>
              </Link>
              <Link to="/services/cloud-transformation">
                <li>Cloud Transformation</li>
              </Link>
              <Link to="/services/conversation-ai">
                <li>Conversation AI</li>
              </Link>
              <Link to="/services/5g">
                <li>5G</li>
              </Link>
              <Link to="/services/microservices-mesh">
                <li>Microservices & Mesh</li>
              </Link>
              <Link to="/services/social-commerce">
                <li>Social Commerce</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={ServicesSubMenu2}>
              Delivery{' '}
              <span className="Mobile_caret">
                <li id="ser2_arrow_down" className="fa fa-chevron-right" />
              </span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu2">
              <Link to="/services/agile-teams">
                <li>Agile Teams</li>
              </Link>
              <Link to="/services/managed-services">
                <li>Managed Services</li>
              </Link>
              <Link to="/services/offshore-dev-center">
                <li>Offshore Dev Center</li>
              </Link>
            </ul>
          </ul>
          <ul>
            <li onClick={ServicesSubMenu3}>
              Technology{' '}
              <span className="Mobile_caret">
                <li id="ser3_arrow_down" className="fa fa-chevron-right" />
              </span>
            </li>
            <ul className="mobile_drop_menu" id="servicessubmenu3">
              <Link to="/services/elastic-path">
                <li>Elastic Path</li>
              </Link>
              <Link to="/services/hcl-commerce">
                <li>HCL Commerce</li>
              </Link>
              <Link to="/services/core-media">
                <li>CoreMedia</li>
              </Link>
              <Link to="/services/ibm-redhat">
                <li>IBM & Redhat</li>
              </Link>
              <Link to="/services/drupal-commerce">
                <li>Drupal Commerce</li>
              </Link>
              <Link to="/services/api-graphql">
                <li>APIs & GraphQL</li>
              </Link>
              <Link to="/services/jamstack-gatsby">
                <li>JAMStack & Gatsby</li>
              </Link>
              <Link to="/services/magneto">
                <li>Magneto</li>
              </Link>
            </ul>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default MainMobilemenu1;
