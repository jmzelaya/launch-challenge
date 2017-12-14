$( document ).ready(function() {

  //Scroll to top of window on load. Refreshing mid-page messes it up?
  $(this).scrollTop(0);

  var $stickyBan = $('#the-target');
  var $stickyStop = $('.page-ads');

  //If any of the panels are opened ( documentation from bootstrap ).
  $('.collapse').on('shown.bs.collapse',function(){
    //Amount of space from the top of the banner to the top of the window
    var stickyTop = $stickyBan.offset().top;
    //The total height of the banner
    var generalSidebarHeight = $stickyBan.innerHeight();
    //The position of the stop div plus its total inner height
    var stickyStopperPosition = $stickyStop.offset().top + $stickyStop.innerHeight();
    //The space between the top of the stickyStop and the banner
    var stopPoint = stickyStopperPosition - generalSidebarHeight;
    //Taking into account the margin (30) of the stickyStop
    var diff = stopPoint - $stickyStop.innerHeight() - 30;
    $(window).scroll(function(){
      var windowTop = $(window).scrollTop();
      if (stopPoint <= windowTop) {
          $stickyBan.css({ position: 'absolute', top: diff });
          //Give stickBan position absolute.
      } else if (stickyTop < windowTop) {

          $stickyBan.css({ position: 'fixed', top: 0 });
          //Give stickBan position fixed to scroll
      } else {

          $stickyBan.css({position: 'absolute', top: 'initial'});
          //At the beginning of the page leave it be!
      }
    });
  });

  //If any of the panels are closed ( documentation from bootstrap ).
  $('.collapse').on('hidden.bs.collapse',function(){
    var stickyTop = $stickyBan.offset().top;
    var generalSidebarHeight = $stickyBan.innerHeight();
    var stickyStopperPosition = $stickyStop.offset().top + $stickyStop.innerHeight();
    var stopPoint = stickyStopperPosition - generalSidebarHeight;
    var diff = stopPoint - $stickyStop.innerHeight() - 30;

    $(window).scroll(function(){
      var windowTop = $(window).scrollTop();
      if (stopPoint <= windowTop) {
          $stickyBan.css({ position: 'absolute', top: diff });
      } else if (stickyTop < windowTop) {
          $stickyBan.css({ position: 'fixed', top: 0 });
      } else {
          $stickyBan.css({position: 'absolute', top: 'initial'});
      }
    });
  });
});
