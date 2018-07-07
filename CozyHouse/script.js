$(document).ready(function($) {
	$("#my-menu").mmenu({
         // options
         "extensions": [
         	"pagedim-black",
            "position-right",
            "theme-dark",
            "border-none"
         ]
         }, {
         // configuration
         offCanvas: {
         	pageNodetype: "header",
            pageSelector: ".header"
         },
         navbar: {
            title: "New title"
         }
         
      });
      var API = $("#my-menu").data( "mmenu" );
      
      $(".hamburger").click(function() {
         API.open();
      });

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 25,
		smartSpeed: 700,
		nav: true,
  		navText: ['←', '→'],
  		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});
});