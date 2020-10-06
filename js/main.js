/* ON WINDOW LOAD */
$(window).on('load', function() {
	$('.preloader-wrapper').fadeOut(500);
});

/* ON DOCUMENT READY */
$(document).ready( function() {
	let i = 0;
	

	/* show/hide mobile menu */
	$(".navbar-top-mobile-toggle").click( function() {
		$(".navbar-menu-item").toggle();
	});

	$('.slick-prev').html("<i class='fas fa-angle-left'></i>");
	$('.slick-next').html("<i class='fas fa-angle-right'></i>");
});

/* ON WINDOW RESIZING */
$(window).on('resize', function() {
	/* show nav menu when width >= 960 */
	let width = $(window).width();
	if(width >= 965){
		$(".navbar-menu-item").show();
	}else{
		$(".navbar-menu-item").hide();
	}
});