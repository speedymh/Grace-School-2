$(document).ready(function(){

  $('li.about').click(function() {

    $(this).toggleClass('clicked');
    $('ul.about-us').toggleClass('clicked');
    $('span.about').toggleClass('clicked');

    $('li.grace').removeClass('clicked');
    $('ul.grace-schools').removeClass('clicked');
    $('span.schools').removeClass('clicked');
  });
  $('li.grace').click(function() {

    $(this).toggleClass('clicked');
    $('ul.grace-schools').toggleClass('clicked');
    $('span.schools').toggleClass('clicked');

    $('li.about').removeClass('clicked');
    $('ul.about-us').removeClass('clicked');
    $('span.about').removeClass('clicked');
  });
  $('li.menu-contact, li.life').click(function() {
    $('li.grace, li.about, ul.about-us, ul.grace-schools, span.schools, span.about').removeClass('clicked');
  });
  $('.menu-normal').click(function(e) {
    e.stopPropagation();
  });
  $(document).click(function(e) {
    $('li.grace, li.about, ul.about-us, ul.grace-schools, span.schools, span.about').removeClass('clicked');
  });

  // smoothScroll(1000);
});

// function smoothScroll (duration) {
//   $('.chevron-down').on('click', function(event) {
//
//     var target = $('.values');
//
//     if( target.length ) {
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top -
//       }, duration);
//     }
//   });
// }
