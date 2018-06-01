var Clare = {};
$(function () {
  UI = {};

  // Scroll actions
  $(document).scroll(function () {
    var nav = $("header>nav");
    nav.toggleClass('scrolled', $(document).scrollTop() > 100);
    var btt = $("nav#back-to-top");
    btt.toggleClass('hidden', $(document).scrollTop() < 200)
    btt.toggleClass('transparent', $(document).scrollTop() < 200)
  });

  // Full-screen nav toggle
  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
    if (nav.hasClass('visible')) {
      nav.focus();
      $("html, body").addClass('no-scroll');
    } else {
      $("body").focus();
      $("html, body").removeClass('no-scroll');
    }
  }
  $('.toggle-menu').click(function () {
    var nav = $("nav#full-screen-nav");
    UI.toggleFullScreenNav(nav);
  });
});
