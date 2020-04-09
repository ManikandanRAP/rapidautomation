/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  // add class once page loaded
  window.addEventListener('load', pageload);
  function pageload() {
    document.getElementById('___gatsby').classList.add('page__loaded');
  }

  //test
  window.addEventListener('load', () => {
    function removeActive() {
      var test = document.querySelectorAll('.mobile_menu_drop.active');
      for (let i = 0; i < test.length; i++) {
        // dropMenus[i].className.replace(/active/g, "").trim();
        let x = test[i].className;
        let y = x.replace('active', '');
        // let y = x.replace(/active/g, "").trim();
        // dropMenus[i].className.replace(/active/g, "").trim();
        console.log(y);
      }
    }
  });
  //test

  window.addEventListener('scroll', function(e) {
    // scroll top button
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document
        .getElementById('scrollTopBtn')
        .classList.add('scrollTopBtnshown');
    } else {
      document
        .getElementById('scrollTopBtn')
        .classList.remove('scrollTopBtnshown');
    }
  });
  function cookieshow() {
    const getCookie = document.cookie;
    const cookArray = getCookie.split(';');
    const cookResult = cookArray.filter(name =>
      name.includes('username=RapUser')
    );
    const cookName = cookResult.toLocaleString().trim();
    if (cookName == 'username=RapUser') {
      document.getElementById('___gatsby').classList.remove('cookie_msg_show');
    } else {
      document.getElementById('___gatsby').classList.add('cookie_msg_show');
    }
  }
  cookieshow();
};
