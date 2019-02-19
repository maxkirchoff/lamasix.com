/*!
 * basic-bro
 * Just your basic HTML/SASS/JS bro.
 * https://github.com/LamaSix/basic-bro
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
      $(this).toggleClass('menu-active');
    });
  });

})(jQuery, window, document);
