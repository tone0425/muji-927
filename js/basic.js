// Scroll add Sticky on top

$(document).ready(function () {
  // top距離
  var stickyNavTop = $('#nav-top').offset().top - 30;
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('#nav-top').addClass('is-sticky');
    } else {
      $('#nav-top').removeClass('is-sticky');
    }
  };
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });
});


jQuery(document).ready(function ($) {

  // set a variable for the anchor link which is the location.hash
  var anchorLink = $(window.location.hash);
  // test to see if the link is a anchor link, if not the length will have no value, this is done to avoid js errors on non anchor links
  if (anchorLink.length) {
    // set an element as the fixed entity, header in this case and get its height
    var offsetSize = $("#nav-top").innerHeight();
    // fire the animation from the top of the page to the anchor link offsetting by the fixed elements height, the number is the speed of the animation
    $("html, body").animate({
      scrollTop: anchorLink.offset().top - offsetSize
    }, 100);
  }

});

$('.tab-nav-item a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      // 單元距離調整
      scrollTop: target.offset().top - 70
    }, 'fast');
  }
});

$(window).bind('scroll', function () {
  var currentTop = $(window).scrollTop();
  var elems = $('.scrollspy');
  elems.each(function (index) {
    var elemTop = $(this).offset().top - 150;
    var elemBottom = elemTop + $(this).height();
    if (currentTop >= elemTop && currentTop <= elemBottom) {
      var id = $(this).attr('id');
      var navElem = $('.tab-nav-item a[href="#' + id + '"]');
      navElem.parent().addClass('active').siblings().removeClass('active');
    }
  })
});