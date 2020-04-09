import React from 'react';
import { Link } from 'gatsby';

import './mobilemenu.css';
import { render } from 'react-dom';

// import leftarrow from 'common/src/assets/image/hosting/Symbols/arrow_left.png';

class MainMobilemenu1 extends React.Component {
  componentDidMount() {
    var dropMenus = document.querySelectorAll('.mobile_menu_drop');
    function addActive() {
      for (let i = 0; i < dropMenus.length; i++) {
        dropMenus[i].addEventListener('click', function() {
          this.parentElement.classList.toggle('active');
        });
      }
      // end of add class
      // setTimeout(() => {
      //   document.querySelector('.reusecore-drawer__close').addEventListener('click', function() {
      //     var activeClass = document.querySelectorAll('.mobile_menu_drop');
      //     for (let i = 0; i < activeClass.length; i++) {
      //       if(activeClass[i].classList.contains('active')) {
      //         let x = activeClass[i].className;
      //         x.replace(/active/g, "");
      //       }
      //     }
      //   });
      // }, 2500);
    }
    addActive();
  }
  render() {
    return (
      <>
        <div id="Mobile_menu_container">
          <ul className="scrollspy__menu mobile_menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span className="mobile_menu_drop">Platform</span>
              <span className="Mobile_caret">
                <i className="fa fa-chevron-right" />
              </span>
              {/* start of drop menu */}
              <ul className="MobileMain_drop">
                {/* start of sub drop menu */}
                <li className="MobileMainsub_drop">
                  <span className="mobile_menu_drop">Engines</span>
                  <span className="Mobile_caret">
                    <i className="fa fa-chevron-right" />
                  </span>
                  <ul className="subMenu_list">
                    <li>EyeMagic</li>
                    <li>ResponseGenie</li>
                  </ul>
                </li>
                {/* end of sub drop menu */}
                <li>Robotic Process Automation</li>
                <li>How It Works</li>
              </ul>
              {/* end of drop menu */}
            </li>
            <li>
              <span className="mobile_menu_drop">Applications</span>
              <span className="Mobile_caret">
                <i className="fa fa-chevron-right" />
              </span>
              <ul className="MobileMain_drop">
                <li>Form Recognition</li>
                <li>Intelligent Email Response</li>
                <li>Check Recognition</li>
                <li>Quote Processing</li>
                <li>Case Deflection</li>
                <li>Invoice Processing</li>
                <li>Lease Abstraction</li>
                <li>ID Verification</li>
              </ul>
            </li>
            <li>
              <span className="mobile_menu_drop">Platform</span>
              <span className="Mobile_caret">
                <i className="fa fa-chevron-right" />
              </span>
              <ul className="MobileMain_drop">
                <li className="MobileMainsub_drop">
                  <span className="mobile_menu_drop">Functions</span>
                  <span className="Mobile_caret">
                    <i className="fa fa-chevron-right" />
                  </span>
                  <ul className="subMenu_list">
                    <li>IT</li>
                    <li>Customer Service</li>
                    <li>Finance/Procurement</li>
                    <li>Operations</li>
                  </ul>
                </li>
                <li className="MobileMainsub_drop">
                  <span className="mobile_menu_drop">Industry Solutions</span>
                  <span className="Mobile_caret">
                    <i className="fa fa-chevron-right" />
                  </span>
                  <ul className="subMenu_list">
                    <li>BFSI</li>
                    <li>Logistics</li>
                    <li>Healthcare</li>
                    <li>Real Estate</li>
                    <li>Cross Industry</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">About</Link>
            </li>
            <li>
              <span className="mobile_menu_drop">Resources</span>
              <span className="Mobile_caret">
                <i className="fa fa-chevron-right" />
              </span>
              <ul className="MobileMain_drop">
                <li>Blog</li>
                <li>In The News</li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default MainMobilemenu1;
