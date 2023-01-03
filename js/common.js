$(document).ready(function(){
    // meun-btn
    $(".menu").click(function () {
      $(".menu, .meun-bar").toggleClass("active");
    });
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
      }
    });

      // sub
  $(".smenu").click(function(){
    $(".down-btn").toggleClass("active");
  });
  $(".smenu").click(function(){
    $(".smenu_wrap").toggleClass("active");
  });

});