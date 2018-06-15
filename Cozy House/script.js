$(document).ready(function($) {
	
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