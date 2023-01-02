$(document).ready(function(){
    $(".benefits_slider").slick({
        dots: false,
        arrows: true,
        prevArrow: $(".benefits_p"),
        nextArrow: $(".benefits_n"),
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 800,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        // fade: true,
        // variableWidth: true // width 가 각각 다름을 표시
      });

      // premium_slide01
    // let premiumSlide = $('.premium_slide');
    let sliderCounter = $('.pagingInfo');
    let currentSlideCount;
    let totalSlideCount;
    let calc;
  
    $('.premium_slide').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $('.premium_n'), //이전 화살표
        nextArrow: $('.premium_p'), //다음 화살표
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 800,
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수   
        fade: true,
    });
   
  
    function slickActive() {

        if ($('.p_item01').hasClass('slick-active')) {
          $('.desc.p_01').addClass('active');
        } else if ($('.p_item02').hasClass('slick-active')) {
          $('.desc.p_02').addClass('active');
        } else if ($('.p_item03').hasClass('slick-active')) {
          $('.desc.p_03').addClass('active');
        } else if ($('.p_item04').hasClass('slick-active')) {
          $('.desc.p_04').addClass('active');
        } else if ($('.p_item05').hasClass('slick-active')) {
          $('.desc.p_05').addClass('active');
        } else if ($('.p_item06').hasClass('slick-active')) {
          $('.desc.p_06').addClass('active');
        } else if ($('.p_item07').hasClass('slick-active')) {
          $('.desc.p_07').addClass('active');
        }
    }
  
    $('.premium_slide').on({
        init: function (event, slick) {
  
        },
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $('.desc').removeClass('active');
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
            slickActive();
        }
    });

    let updateSliderCounter = function(slick, currentSlide) {
  
        // 현재 페이지 index +1 을 해준 이유는 1부터 시작되게 하게끔
        currentSlideCount = slick.slickCurrentSlide() + 1;
  
        // 전체 슬라이드 페이지 갯수
        totalSlideCount = slick.slideCount;
  
        // 현재 페이지 index / 전체 슬라이드 갯수 나누고 * 100을 해서 퍼센페이지화 시킴
        calc = (currentSlideCount / totalSlideCount) * 100;
  
        $('.pagingInfo').text("0" + currentSlideCount + '/' + 0 + totalSlideCount);
        // $('.progress').css('width', calc + '%');
    };
  
  
    $('.premium_slide').on('init', function(event, slick) {
        premiuSlide.append(sliderCounter);
        updateSliderCounter(slick);
    });
  
    $('.premium_slide').on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });    

    let locationSlide = $('.location_slider01');
    let locationSlide02 = $('.lo_slider_title');
    // let sliderCounter = $('.pagingInfo');
    // let calc;
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    locationSlide.slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $('.location_n'), //이전 화살표
        nextArrow: $('.location_p'), //다음 화살표
        autoplay: true,
        autoplaySpeed: 4800,
        speed: 1300,
        swipe: true, //스와이프
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.lo_slider_title', //다른 슬라이드 연동 여부
        variableWidth: true,
        // fade: true,
        cssEase: 'cubic-bezier(0.6, 0.3, 0.5, 1)', //css transition
     });
     locationSlide02.slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $(''), //이전 화살표
        nextArrow: $(''), //다음 화살표
        fade: true,
    });
   
     $('.progressBarContainer .progressBar').each(function(index) {
         var progress = "<div class='inProgress inProgress" + index + "'></div>";
         $(this).html(progress);
     });
   
     function startProgressbar() {
         resetProgressbar();
         percentTime = 0;
         tick = setInterval(interval, 10);
     }
   
     function interval() {
         if (($('.location_slider01 div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
             progressBarIndex = $('.location_slider01 div[aria-hidden="false"]').data("slickIndex");
             startProgressbar();
         } else {
             percentTime += 1 / (time + 3.8);
             $('.inProgress' + progressBarIndex).css({
                 width: percentTime + "%"
             });
             if (percentTime >= 100) {
                 $('.location_slider01').slick('slickNext');
                 progressBarIndex++;
                 if (progressBarIndex > 1) {
                     progressBarIndex = 0;
                 }
                 startProgressbar();
             }
         }
     }
   
     function resetProgressbar() {
         $('.inProgress').css({
             width: 0 + '%'
         });
         clearInterval(tick);
     }
     startProgressbar();
     // End ticking machine
   
     $('.progressBarContainer div').click(function () {
         clearInterval(tick);
         var goToThisIndex = $(this).find("span").data("slickIndex");
         $('.location_slider01').slick('slickGoTo', goToThisIndex, false);
         startProgressbar();
     });
});