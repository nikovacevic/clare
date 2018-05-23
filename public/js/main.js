var Clare = {};
$(function () {
  UI = {};

  // Header nav background
  UI.setNavScroll = function (nav, limit) {
    nav.toggleClass('scrolled', $(document).scrollTop() > limit);
  }
  $(document).scroll(function () {
    var nav = $("header>nav");
    UI.setNavScroll(nav, 100);
  });

  // Full-screen nav toggle
  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
    if (nav.hasClass('visible')) {
      $("html, body").addClass('no-scroll');
    } else {
      $("html, body").removeClass('no-scroll');
    }
  }
  $('.toggle-menu').click(function () {
    var nav = $("nav#full-screen-nav");
    UI.toggleFullScreenNav(nav);
  });

  // Scroll to anchor
  $(document).ready(function () {
    $("a.smooth-scroll").click(function (e) {
      e.preventDefault();
      if ($("nav#full-screen-nav").hasClass('visible')) {
        UI.toggleFullScreenNav($("nav#full-screen-nav"));
      }
      $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - 58}, 400);
    });
  });
});
