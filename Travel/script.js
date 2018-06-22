jQuery(document).ready(function($){
	$(".tab-item").not(":nth-child(2)").hide();
	$(".order__offer .tab").click(function() {
		$(".order__offer .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(1).addClass("active");
	$("#phone").mask("+7 (999) 999-99-99");
});