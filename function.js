$(document).ready(function(){

  $('li.about').click(function() {

    $(this).toggleClass('clicked');
    $('ul.about-us').toggleClass('clicked');
    $('span.about').toggleClass('clicked');

    $('.primary>.wrapper').addClass('open');

    $('li.grace').removeClass('clicked');
    $('ul.grace-schools').removeClass('clicked');
    $('span.schools').removeClass('clicked');
  });
  $('li.grace').click(function() {

    $(this).toggleClass('clicked');
    $('ul.grace-schools').toggleClass('clicked');
    $('span.schools').toggleClass('clicked');

    $('.primary>.wrapper').addClass('open');

    $('li.about').removeClass('clicked');
    $('ul.about-us').removeClass('clicked');
    $('span.about').removeClass('clicked');
  });

  $('li.menu-contact, li.life').click(function() {
    $('li.grace, li.about, ul.about-us, ul.grace-schools, span.schools, span.about').removeClass('clicked');
    $('.primary>.wrapper').removeClass('open');
  });

  $('.menu-normal').click(function(e) {
    e.stopPropagation();
  });
  $(document).click(function(e) {
    $('li.grace, li.about, ul.about-us, ul.grace-schools, span.schools, span.about').removeClass('clicked');
    $('.primary>.wrapper').removeClass('open');
  });

// Rules

  $('.pop-up.rules').on('click', function() {
    $('.card.rules').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.rules').removeClass('open');
  });

// Fees

  $('.pop-up.fees').on('click', function() {
    $('.card.fees').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.fees').removeClass('open');
  });

// Nursery Teachers

  $('.pop-up.teachers-nursery').on('click', function() {
    $('.card.nursery').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.nursery').removeClass('open');
  });

// Nursery Non-Teaching

  $('.pop-up.non-t-nursery').on('click', function() {
    $('.card.non-t-nursery').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.non-t-nursery').removeClass('open');
  });

// Primary Teachers

  $('.pop-up.teachers-primary').on('click', function() {
    $('.card.primary-card').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.primary-card').removeClass('open');
  });

// Primary Non-Teaching

  $('.pop-up.non-t-primary').on('click', function() {
    $('.card.non-t-primary').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.non-t-primary').removeClass('open');
  });

// Secondary Teachers

  $('.pop-up.teachers-secondary').on('click', function() {
    $('.card.secondary-card').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.secondary-card').removeClass('open');
  });

// Secondary Non-Teaching

  $('.pop-up.non-t-secondary').on('click', function() {
    $('.card.non-t-secondary').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.non-t-secondary').removeClass('open');
  });

// Further Contacts

  $('.pop-up.contact-numbers').on('click', function() {
    $('.card.further-contacts').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.further-contacts').removeClass('open');
  });

    /* Hide all elements outside the visible window */
    //
    // var top_of_object = $(this).position().top;
    // var bottom_of_window = $(window).scrollTop() + $(window).height();

    // $('.hero-image').css('transform': 'translateY(0px)');

    /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//     /* Check the location of the desired elements */
//     $('.hide').each( function(i){
//
//         var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;/*here is the change*/
//         var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//
//             if( bottom_of_window > ( bottom_of_object + 20 )  ){
//
//                 $(this).removeClass('hide').animate({'opacity':'1'},500);
//
//             }
//
//     });
//
// });

});

  // var menuWidth = $('.primary').css(width);
  // $('.secondary').css('width', 'menuWidth');

  // smoothScroll(1000);

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
