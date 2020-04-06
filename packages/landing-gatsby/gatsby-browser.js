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
  // scroll top functionality
  window.addEventListener('scroll', function(e) {
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
