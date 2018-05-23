var Clare = {};
$(function () {
  UI = {};

  UI.setNavScroll = function (nav, limit) {
    nav.toggleClass('scrolled', $(document).scrollTop() > limit);
  }
  $(document).scroll(function () {
    var nav = $("header>nav");
    UI.setNavScroll(nav, 100);
  });

  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
  }
  $('.toggle-menu').click(function () {
    var nav = $("nav#full-screen-nav");
    UI.toggleFullScreenNav(nav);
  });
});
