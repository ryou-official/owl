window.addEventListener('DOMContentLoaded', function(){

  $('.top-btn').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    },400);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },300);
  });

  $('#menu-wrapper a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },300);
  });

//  $('#menu-icon').click(function(){
//    if($('#menu-icon i').attr('fa-bars')){
//        $('#menu-wrapper').slideDown(200).css('display', 'flex');
//      $('#menu-icon i').attr('fa fa-times');
//    }else if($('#menu-icon').attr('fa-times')){
//      $('#menu-wrapper').slideUp(200).css('display', 'none');
//      $('#menu-icon i').attr('fa fa-bars');
//    }else {
//    ;
//    }
//  });

    $('#menu-icon').click(function(){
      if($('#menu-wrapper').css('display') == 'none') {
        $('#menu-wrapper').slideDown(200).css('display', 'flex');
        $('#menu-icon').html('<i class="fa fa-times"></i>');
      }else if($('#menu-wrapper').css('display') == 'flex'){
        $('#menu-wrapper').slideUp(200)
        $('this').css('display', 'none');
        $('#menu-icon').html('<i class="fa fa-bars"></i>');
      }else{;}
    });
});
