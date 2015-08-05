$(function(){
 var shrinkHeader = 51;
 var shrinkHeader2 = 705;
  var shrinkHeader3 = 505;


  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('shrink');
        }
        else {
            $('.header').removeClass('shrink');
        }
  });

  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader2 ) {
           $('.header').addClass('shrink2');
        }
        else {
            $('.header').removeClass('shrink2');
        }
  });

  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader3 ) {
           $('.message').addClass('shrink3');

        }
        else {
            $('.message').removeClass('shrink3');
        }
  });

  var fadeStart=50 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=51 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.logo2flikn');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=1
    ;
    if( offset<=fadeStart ){
        opacity=0;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);

});



//     $(".header").hover(function(){
//         $("").css("background-color", "red");
//         };
//     });
// $(".header").hover(function() {
//     $(this).siblings("a").addClass("your_color_class");
// }, function() {
//     $(this).siblings("h1").removeClass("your_color_class");
// });

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }



});
// $(document).on('mouseenter','.header', function() {
//     if($('.hn_navegador').hasClass('w')) {
//     }

//   });