$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });
  
     
            $('.sidebar-item a').click(function(){
                  var id =$(this).attr('href');//変数idにはクリックされたlist aのhref属性値のいずれかが入っている
                  var position=$(id).offset().top;//変数positionはページトップから変数idまでの距離が入っている
                  $('html,body').animate({
                    'scrollTop':position         //scrolltop:positionでpositionまでスクロールする
                  },1000);
                 })
 
 
});



$(function(){
  2
    $(window).scroll(function (){
  3
      $("#about").each(function(){
  4
        var imgPos = $(this).offset().top;
  5
        var scroll = $(window).scrollTop();
  6
        var windowHeight = $(window).height();
  7
        if (scroll > imgPos - windowHeight + windowHeight/5){
  8
          $(this).addClass("fade_on");
  9
        } else {
  10
          $(this).removeClass("fade_on");
  11
        }
  12
      });
  13
    });
  14
  });
$(function(){
  2
    $(window).scroll(function (){
  3
      $("#fade").each(function(){
  4
        var imgPos = $(this).offset().top;
  5
        var scroll = $(window).scrollTop();
  6
        var windowHeight = $(window).height();
  7
        if (scroll > imgPos - windowHeight + windowHeight/5){
  8
          $(this).addClass("fade_on");
  9
        } else {
  10
          $(this).removeClass("fade_on");
  11
        }
  12
      });
  13
    });
  14
  });
  
$(function(){
  2
    $(window).scroll(function (){
  3
      $("#fade2").each(function(){
  4
        var imgPos = $(this).offset().top;
  5
        var scroll = $(window).scrollTop();
  6
        var windowHeight = $(window).height();
  7
        if (scroll > imgPos - windowHeight + windowHeight/5){
  8
          $(this).addClass("fade_on");
  9
        } else {
  10
          $(this).removeClass("fade_on");
  11
        }
  12
      });
  13
    });
  14
});


