/*!
 * lamasix.com
 * Website for the creative agency, LAMA SIX
 * https://github.com/LamaSix/lamasix.com
 * @author Max Kirchoff
 * @version 1.0.0
 * Copyright 2019. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('button.menu-toggle').on('click touch', function(ev) {
      ev.preventDefault();
      $('ul.nav-items').toggleClass('active');
      $('ul.social-items').toggleClass('active');
      $(this).parents('.header').toggleClass('menu-active');
      $('body').toggleClass('menu-active');
    });

    function updateHeader() {
      var $header = $('header.header');
      var headerPos = $header.offset().top;

      if (headerPos > 0) {
        $header.addClass('scrolled');
      } else {
        $header.removeClass('scrolled');
      }
    }

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event) {
      didScroll = true;
    });

    // run hasScrolled() and reset didScroll status
    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 50);

    function hasScrolled() {
      updateHeader();
      var st = $(window).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header.header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header.header').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
    }

    updateHeader();

    $('.quotes').slick({
      arrows: true,
      prevArrow: $('.slick-navigation .prev'),
      nextArrow: $('.slick-navigation .next'),
      centerPadding: '0px',
      centerMode: true,
      slidesToShow: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });

    $('#home a.work').on('click touch', function(ev) {
      ev.preventDefault();
      var workPos = $('#work').offset().top;
      window.scrollTo({ top: workPos, behavior: 'smooth' });
    });
  });

})(jQuery, window, document);