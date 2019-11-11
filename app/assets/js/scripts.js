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

    var lamasix = function() {

      function initMenuToggle() {
        $('button.menu-toggle').on('click touch', function(ev) {
          ev.preventDefault();
          $('ul.nav-items').toggleClass('active');
          $('ul.social-items').toggleClass('active');
          $(this).parents('.header').toggleClass('menu-active');
          $('body').toggleClass('menu-active');
        });
      }

      function initHeader()  {

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

        function updateHeader() {
          var $header = $('header.header');
          var headerPos = $header.offset().top;

          if (headerPos > 0) {
            $header.addClass('scrolled');
          } else {
            $header.removeClass('scrolled');
          }
        }

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

          if ($('#work').length > 0) {
            if ( st > $('#work').offset().top && st < ( $('#work').offset().top + $('#work').height() ) ) {
              $('#home #site-navigation .work').addClass('active');
            } else {
              $('#home #site-navigation .work').removeClass('active');
            }
          }

          lastScrollTop = st;
        }

        updateHeader();
      }

      function initTestimonials() {
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
      }

      function initWorkSmoothScroll() {
        $('#home a.work').on('click touch', function(ev) {
          ev.preventDefault();
          $('ul.nav-items').removeClass('active');
          $('ul.social-items').removeClass('active');
          $(this).parents('.header').removeClass('menu-active');
          $('body').removeClass('menu-active');
          var workPos = $('#work').offset().top;
          window.scrollTo({ top: workPos, behavior: 'smooth' });
        });
      }

      function initFormSubmissionHandler() {
        $('form.application').on('submit', function(ev) {
          ev.preventDefault();
          var $this = $(this);
          $this.find("button").attr('disabled', true).addClass('disabled');

          function failure() {
            $this.append("<div class='error'>Sorry, but something went wrong. Contact us directly at <a href='mailto:hi@lamasix.com'>hi@lamasix.com</a></div>")
          }

          var formInputs = {
            name: $this.find('.name input').val(),
            email: $this.find('.email input').val(),
            businessName: $this.find('.business-name input').val(),
            website: $this.find('.website input').val(),
            focus: $this.find('.focus textarea').val(),
            communities: $this.find('.communities textarea').val(),
            stage: $this.find('.stage textarea').val(),
            why: $this.find('.why textarea').val(),
            sixmonths: $this.find('.sixmonths textarea').val(),
            referral: $this.find('.referral input').val()
          }

          $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(formInputs)

          }).done(function(data) {

            if(data['statusCode'] == 200) {
              $this.fadeOut( function(){
                $this.html("<img src='/assets/media/thumbs.gif'><div>Application sent.</div>").fadeIn();
              });
            } else {
              failure();
            }
          }).fail(function() {
            failure();
          })
        });
      }

      var init = function() {
        initMenuToggle();
        initHeader();
        initTestimonials();
        initWorkSmoothScroll();
        initFormSubmissionHandler();

        $('textarea').autogrow({
          verticle: true,
          horizontal: false
        });
      }

      return {
        init: init
      }
    }

    var app = lamasix();
    app.init();

    $('.download-pdf').on('click touch', function(ev) {
      gtag('event', 'downloadPdf', {
        'event_category': 'engagement',
        'event_label': 'download',
        'value': 'dayByDay'
      });
    })

  });

})(jQuery, window, document);
