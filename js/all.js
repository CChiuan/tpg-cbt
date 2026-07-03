

$(document).ready(function() {

    // 防止a#點擊後跑位
    $('#iOS, #google').click(function(e){
      e.preventDefault();
    });

    // popup1 - iOS教學
    $('#iOS, #iOS-mob').click(function() {
     $('.popup1').show();
    });
    $('.popup-close').click(function() {
     $('.popup1').hide();
    });

    // popup2 - google下載教學
    $('#google, #google-mob').click(function() {
      $('.popup2').show();
    });
    $('.popup-close').click(function() {
      $('.popup2').hide();
    });

    // kv-mob play
    $('.btn-play').click(function() {
      $('.youtube').show();
    });
    $('.youtube').click(function() {
      $('.youtube').hide();
    });

    // sideBar
    $('.ham').click(function() {
     $('.menu').removeClass('menuOff');
     $('.menu').addClass('menuOn');
    });
    $('.menu-close, .menu-content li').click(function() {
     $('.menu').removeClass('menuOn');
     $('.menu').addClass('menuOff');
    });

    // character
    $('[data-tabswitch]').on('click', function() {
      let _thisSwitch = $(this).data('tabswitch');
      console.log(_thisSwitch);
      $(_thisSwitch).addClass('active').siblings().removeClass('active');
      }).eq(0).click();
    });

    // scroll fadeIn
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height(); 

        // goTop
        if ($(window).scrollTop() > 500) {
          $('.goTop').fadeIn(500);
        } else {
          $('.goTop').fadeOut(500);
        };
        
        // section - 淡入
        $('.hide').each(function(){
          var thisPos = $(this).offset().top;
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if((windowHeight + scrollPos + 200 ) >= thisPos) {
              $(this).addClass('fadeIn');
            }
          } else {
            if((windowHeight + scrollPos) >= thisPos + 0) {
              $(this).addClass('fadeIn');
            }
          }
        });
        
   
      // MediaQuery
      var x = window.matchMedia('(max-width: 999px)')
      if ($(window).scrollTop() > 300) {
        $('.sticker').fadeIn(500);
      } else {
        $('.sticker').fadeOut(500);
      };
    });  






