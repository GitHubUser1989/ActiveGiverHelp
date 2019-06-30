// jQuery

$(document).ready(function() {

  $(window).resize(function() {

    if (window.matchMedia('(max-width: 91em)').matches) {

      } else {
        $(".navigation").removeAttr('style');
        $(".nav-list").removeAttr('style');
        $(".nav-list li").removeAttr('style');
        $(".arrow_img").removeAttr('style');
        $(".btn-green").removeAttr('style');
      }

  });


  $(".hamburger-menu").click(function(){

    if($(".nav-list").css('display') == 'none') {
        $(".hamburger-menu").css('top', '20px');
        $(".navigation").css({
          'height':'35rem',
          'transition':'all .35s'
        });
        $(".nav-list").css({
          'display':'block',
          'float':'none',
          'text-align':'center',
          'transform':'translateY(0)',
          'opacity': '1',
          'visibility': 'visible',
        });
        $(".nav-list li").css({
          'display':'block',
          'margin-left':'0',
          'margin-bottom':'20px'
        });
        $(".arrow_img").css({
          'transform':'translateY(0)',
          'position':'relative',
        });
        $(".btn-green").css({
          'top':'20px',
          'position':'relative',
        });
        $(".nav-list").hide().fadeIn(400);
    }
    else {
        $(".navigation").removeAttr('style');
        $(".nav-list").removeAttr('style');
        $(".nav-list li").removeAttr('style');
        $(".arrow_img").removeAttr('style');
        $(".btn-green").removeAttr('style');
    }

  });

});
