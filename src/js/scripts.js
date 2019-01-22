(function ($, window, document, undefined) {

  'use strict';

  function scrollText() {
    killScrollText();
    $('.cloned').remove();

    var $holder = $(".holder");
    var $list = $holder.find("ul.list");
    var $clonedList = $list.clone();

    var listWidth = $(window).width();
    var endPos = $holder.width() - listWidth;

    $list.add($clonedList).css({
    	"width" : listWidth + "px"
    });

    $clonedList.addClass("cloned").appendTo($holder);

    //TimelineMax
    var infinite = new TimelineMax({repeat: -1, paused: false});
    var time = 30;

    infinite.fromTo($list, time, {left:0}, {left: -listWidth, ease: Linear.easeNone}, 0);
    infinite.fromTo($clonedList, time, {left:listWidth}, {left:0, ease: Linear.easeNone}, 0);
    infinite.set($list, {left: listWidth});
    infinite.to($clonedList, time, {left: -listWidth, ease: Linear.easeNone}, time);
    infinite.to($list, time, {left: 0, ease: Linear.easeNone}, time);

    //Pause/Play

    $holder.on("mouseenter", function(){
    	infinite.pause();
    }).on("mouseleave", function(){
    	infinite.play();
    });
  }

  function killScrollText() {
    TweenMax.killAll(false, true, false);
  }

  $(window).on('resize', function() {
    if ($(window).width() > 768) {
      killScrollText();
      scrollText();
    } else {
      killScrollText();
    }
  });
  if ($(window).width() > 768) {
    scrollText();
  }

  var vid = document.getElementById("l6-animation-video");

  function playVid() {
      vid.play();
  }

  function pauseVid() {
      vid.pause();
  }

setTimeout( function() {
  playVid();
  setInterval(function() {
    playVid();
  }, 7000);
}, 1000);



})(jQuery, window, document);
