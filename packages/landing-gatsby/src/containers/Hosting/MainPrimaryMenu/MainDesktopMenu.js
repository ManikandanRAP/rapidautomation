import React from 'react';
// import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Button from 'common/src/components/Button';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Box from 'common/src/components/Box';

import sampleicon from 'common/src/assets/image/hosting/author-1.jpg';

// import MainDesktopNav, {
//   MainNavbarUl,
//   MainNavbarLi,
//   MainNavbarDropBox,
//   MainNavFlexbox,
//   MainNavbarDropUl,
//   MainNavbarDropMainLi,
//   MainNavbarDropLi,
// } from './MainDesktopMenu.style';

import './MainDesktopMenu.css';

const Maindeskmenu1 = button => (
  <nav id="desktopmenu">
    <ul className="flexboxprops">
      <li className="mainmenuhead">
        <span>
          Platform <i className="fa fa-chevron-down" />
        </span>
        <nav className="dropdownMenu dropdownMenu1 flexboxprops">
          <ul className="subwidth30">
            <li>
              <Link>Engines</Link>
              <i className="fa fa-chevron-right" />
            </li>
            <li>
              <Link>Robotic Process Automation</Link>
            </li>
            <li>
              <Link>How It Works</Link>
            </li>
            <li style={{ textAlign: 'center' }}>
              <Link to="/" className="customItem btn btn_primary">
                <span className="btn-text">Getting Started</span>
              </Link>
            </li>
          </ul>
          <ul className="subwidth70">
            <li>
              <Link className="flexboxprops flexjustifystartprops">
                <span>
                  <img src={sampleicon} alt="Eye magic" />
                </span>
                <span>
                  <div>Eye Magic</div>
                  <div className="text_size12">
                    Accurate, rapid and versatile AI-powered engine for Computer
                    Vision and entity extraction
                  </div>
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexjustifystartprops">
                <span>
                  <img src={sampleicon} alt="Response Genie" />
                </span>
                <span>
                  <div>Response Genie</div>
                  <div className="text_size12">
                    Enhance omni-channel response with AI-powered engine for NLP
                    and entity extraction
                  </div>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </li>
      <li className="mainmenuhead2">
        <span>
          Applications <i className="fa fa-chevron-down" />
        </span>
        <nav className="dropdownMenu dropdownMenu2">
          <ul className="flexboxprops">
            <li>
              <Link
                to="/applications/form-recognition"
                className="flexboxprops flexcolumnprops"
              >
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Form
                  <br />
                  Recongnition
                </span>
                <span className="text_size12">
                  Automate and accelerate form recognition with greater accuracy
                  and productivity
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Intelligent
                  <br />
                  Email Response
                </span>
                <span className="text_size12">
                  Expedite email response with entity and intent extraction
                  automated by AI
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Check
                  <br />
                  Recongnition
                </span>
                <span className="text_size12">
                  Accelerate check processing with AI-powered automation of
                  check recognition tasks
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Quote
                  <br />
                  Processing
                </span>
                <span className="text_size12">
                  Streamline quote processing with greater accuracy and speed
                  through AI-powered automation
                </span>
              </Link>
            </li>
          </ul>
          <ul className="flexboxprops">
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Case
                  <br />
                  Deflection
                </span>
                <span className="text_size12">
                  Minimize case deflection with rapid, accurate responses
                  through AI automation
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Invoice
                  <br />
                  Processing
                </span>
                <span className="text_size12">
                  Accurate, efficient and speedy invoice processing through
                  AI-powered automation
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  Lease
                  <br />
                  Abstraction
                </span>
                <span className="text_size12">
                  Rapid lease abstraction processes with high accuracy due to AI
                  automation
                </span>
              </Link>
            </li>
            <li>
              <Link className="flexboxprops flexcolumnprops">
                <span>
                  <img src={sampleicon} alt="Form Recognition" />
                </span>
                <span className="text_bold">
                  ID
                  <br />
                  Verification
                </span>
                <span className="text_size12">
                  Foolproof ID verification including face and signature
                  verification with the power of AI
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </li>
      <li className="mainmenuhead">
        <span>
          Solutions <i className="fa fa-chevron-down" />
        </span>
        <nav className="dropdownMenu dropdownMenu3 flexboxprops flexjustifystartprops">
          <ul>
            <li className="text_bold spacingmenu">Functions</li>
            <li>
              <Link to="/solutions/it">IT</Link>
            </li>
            <li>
              <Link>Customer Service</Link>
            </li>
          </ul>
          <ul>
            <li className="text_bold spacingmenu">Industry Solutions</li>
            <li>
              <Link>BFSI</Link>
            </li>
            <li>
              <Link>Logistics</Link>
            </li>
          </ul>
        </nav>
      </li>
      <li>
        <Link className="customItem">About</Link>
      </li>
      <li className="mainmenuhead">
        <span>
          Resources <i className="fa fa-chevron-down" />
        </span>
        <nav className="dropdownMenu dropdownMenu4">
          <ul className="flexboxprops flexjustifystartprops">
            <li className="text_bold">
              <Link>Blog</Link>
            </li>
            <li className="text_bold">
              <Link>In The News</Link>
            </li>
          </ul>
        </nav>
      </li>
      <li>
        <Link className="btn btn_secondary">
          <span className="btn-text">Book a Demo</span>
        </Link>
      </li>
    </ul>
  </nav>
);

Maindeskmenu1.propTypes = {
  button: PropTypes.object,
};
Maindeskmenu1.defaultProps = {
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
};
export default Maindeskmenu1;
