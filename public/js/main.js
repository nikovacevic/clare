var Clare = {};
$(function () {
  UI = {};

  UI.navScroll = function (nav, limit) {
    nav.toggleClass('scrolled', $(document).scrollTop() > limit);
  }

  $(document).scroll(function () {
    UI.navScroll($("header>nav"), 100)
  });
});
