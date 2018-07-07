$(document).ready(function() {
      $("#my-menu").mmenu({
         // options
         "extensions": [
            "position-right",
            "border-none"
         ]
         }, {
         // configuration
         offCanvas: {
            pageSelector: ".header"
         },
         
      });
      var API = $("#my-menu").data( "mmenu" );
      
      $(".hamburger").click(function() {
         API.open();
         API.close();
      });

      $(".owl-carousel").owlCarousel({
      	items: 1,
      	dots: true,
      	dotsEach: true
      });
});