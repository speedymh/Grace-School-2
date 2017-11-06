$(document).ready(function(){

// Menu

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

// SLIDER

// Right
  $('.chevron.right.moja').on('click', function() {
    $('.chevron.left.one').removeClass('hide');
    $(this).addClass('hide');
    $('.chevron.right.mbili').removeClass('hide');
    $('.slider>.slider-wrapper').addClass('middle');

    $('.eins').removeClass('eins-open');
    $('.eins').removeClass('open');
    $('.zwei').addClass('open');
  });

  $('.chevron.right.mbili').on('click', function() {
    $(this).addClass('hide');
    $('.chevron.right.tatu').removeClass('hide');
    $('.chevron.left.one').addClass('hide');
    $('.chevron.left.two').removeClass('hide');
    $('.slider>.slider-wrapper').removeClass('middle');
    $('.slider>.slider-wrapper').addClass('end');

    $('.zwei').removeClass('open');
    $('.drei').addClass('open');
  });

  $('.chevron.right.tatu').on('click', function() {
    $(this).addClass('hide');
    $('.chevron.left.two').addClass('hide');
    $('.chevron.left.three').removeClass('hide');
    $('.slider>.slider-wrapper').removeClass('end');
    $('.slider>.slider-wrapper').addClass('real-end');

    $('.drei').removeClass('open');
    $('.vier').addClass('open');
  });

// Left

  $('.chevron.left.one').on('click', function() {
    $(this).addClass('hide');
    $('.chevron.right.moja').removeClass('hide');
    $('.chevron.right.mbili').addClass('hide');
    $('.slider>.slider-wrapper').removeClass('middle');

    $('.zwei').removeClass('open');
    $('.eins').addClass('open');
  });

  $('.chevron.left.two').on('click', function() {
    $(this).addClass('hide');
    $('.chevron.left.one').removeClass('hide');
    $('.chevron.right.mbili').removeClass('hide');
    $('.chevron.right.tatu').addClass('hide');
    $('.slider>.slider-wrapper').removeClass('end');
    $('.slider>.slider-wrapper').addClass('middle');

    $('.drei').removeClass('open');
    $('.zwei').addClass('open');
  });

  $('.chevron.left.three').on('click', function() {
    $(this).addClass('hide');
    $('.chevron.left.two').removeClass('hide');
    $('.chevron.right.tatu').removeClass('hide');
    $('.slider>.slider-wrapper').removeClass('real-end');
    $('.slider>.slider-wrapper').addClass('end');

    $('.vier').removeClass('open');
    $('.drei').addClass('open');
  });
// Secondary Navigation
    $('.eins').on('click', function() {
      $(this).addClass('open');
      $('.zwei').removeClass('open');
      $('.drei').removeClass('open');
      $('.vier').removeClass('open');

      $('.chevron').addClass('hide');
      $('.chevron.right.moja').removeClass('hide');
      $('.slider>.slider-wrapper').removeClass('end');
      $('.slider>.slider-wrapper').removeClass('real-end');
      $('.slider>.slider-wrapper').removeClass('middle');
    });

    $('.zwei').on('click', function() {
      $(this).addClass('open');
      $('.eins').removeClass('open');
      $('.eins').removeClass('eins-open');
      $('.drei').removeClass('open');
      $('.vier').removeClass('open');

      $('.chevron').addClass('hide');
      $('.chevron.left.one').removeClass('hide');
      $('.chevron.right.mbili').removeClass('hide');
      $('.slider>.slider-wrapper').removeClass('end');
      $('.slider>.slider-wrapper').removeClass('real-end');
      $('.slider>.slider-wrapper').addClass('middle');
    });

    $('.drei').on('click', function() {
      $(this).addClass('open');
      $('.eins').removeClass('open');
      $('.eins').removeClass('eins-open');
      $('.zwei').removeClass('open');
      $('.vier').removeClass('open');

      $('.chevron').addClass('hide');
      $('.chevron.left.two').removeClass('hide');
      $('.chevron.right.tatu').removeClass('hide');
      $('.slider>.slider-wrapper').removeClass('middle');
      $('.slider>.slider-wrapper').removeClass('real-end');
      $('.slider>.slider-wrapper').addClass('end');
    });

    $('.vier').on('click', function() {
      $(this).addClass('open');
      $('.eins').removeClass('open');
      $('.eins').removeClass('eins-open');
      $('.zwei').removeClass('open');
      $('.drei').removeClass('open');

      $('.chevron').addClass('hide');
      $('.chevron.left.three').removeClass('hide');
      $('.slider>.slider-wrapper').removeClass('middle');
      $('.slider>.slider-wrapper').removeClass('end');
      $('.slider>.slider-wrapper').addClass('real-end');
    });

// CARDS

  $('.pop-up').on('click', function() {
    $('.card-background').addClass('visible');
  });

  $('.cross').on('click', function() {
    $('.card-background').removeClass('visible');
  });

  $('.card-background').on('click', function() {
    $(this).removeClass('visible');
    $('.card').removeClass('open');
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

//Volunteers

  $('.open-volunteers').on('click', function() {
    $('.card.volunteers-card').toggleClass('open');
  });
  $('.cross').on('click', function() {
    $('.card.volunteers-card').removeClass('open');
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

  // Karte

  var $latitude = -6.7818472,
		$longitude = 39.2198478,
		$map_zoom = 15;

    var $latitudeTwo = -6.550366,
  		$longitudeTwo = 39.003976,
  		$map_zoomTwo = 11;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';

	//define the basic color of your map, plus a value for saturation and brightness
	var	$main_color = '#60a6da',
		$saturation= -20,
		$brightness= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: $saturation}
			]
		},
	    {	//poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    },
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		}
	];

	//set google map options
	var map_options = {
      	center: new google.maps.LatLng($latitude, $longitude),
      	zoom: $map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
    var map_optionsTwo = {
        	center: new google.maps.LatLng($latitudeTwo, $longitudeTwo),
        	zoom: $map_zoomTwo,
        	panControl: false,
        	zoomControl: false,
        	mapTypeControl: false,
        	streetViewControl: false,
        	mapTypeId: google.maps.MapTypeId.ROADMAP,
        	scrollwheel: false,
        	styles: style,
      }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
  var mapTwo = new google.maps.Map(document.getElementById('google-container-two'), map_optionsTwo);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	 	icon: $marker_url,
	});
  var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitudeTwo, $longitudeTwo),
	    map: mapTwo,
	    visible: true,
	 	icon: $marker_url,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

  function CustomZoomControl(controlDiv, mapTwo) {
		//grap the zoom elements from the DOM and insert them in the map
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in-two'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out-two');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);
  var zoomControl = new CustomZoomControl(zoomControlDiv, mapTwo);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);





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
