$(document).ready(function($) {
	jQuery('.hamburger').on('click', function(){
    jQuery(this).toggleClass('active');
    jQuery('.header-nav').slideToggle();
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