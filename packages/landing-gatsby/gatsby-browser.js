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
    // scrollfix
    var scrollFix = document.querySelector('#scroll_fixed');
    var scrollFixTop = scrollFix.getBoundingClientRect().top;
    if (scrollFixTop <= 0) {
      var elmt = document.querySelectorAll('.scrollmain_right_content');
      elmt.forEach(function(Item) {
        var top = Item.getBoundingClientRect().top;
        var hght = -Math.abs(Item.getBoundingClientRect().height);
        if (top <= 0 && top <= hght) {
          // return console.log(Item);
          console.log('a');
        } else {
          // Item.classList.toggle('Test');
          // return console.log(Item);
          console.log('b');
        }
      });
    }

    // element in view
    // var elmt = document.querySelectorAll('.scrollmain_right_content');
    // elmt.forEach(function(Item) {
    //   // deleteUser(userItem);
    //   // var topVal = userItem.getBoundingClientRect().top;
    //   // if(topVal === 0 )
    //   console.log(Item.getBoundingClientRect().top - Item.getBoundingClientRect().height)
    // });
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
