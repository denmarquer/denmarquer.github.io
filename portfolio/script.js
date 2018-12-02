document.body.onload = function() {
	setTimeout( function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		}
	}, 500);
}	
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		margin: 25,
		smartSpeed: 700,
		nav: true,
  		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
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
	var clipboard = new ClipboardJS('.btn');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
});

new WOW().init();

