/*jslint browser:true */
$(document).ready(function () {

	var $navbar = $('.navbar-default');
	var $offsetY = $navbar.offset().top + 10;

	// Fixed Nav after scroll
	function scroll() {
		if ($(window).scrollTop() >= $offsetY) {
			$navbar.addClass('menu-fixed').css('background-color', 'rgba(255,254,253,0.97)');
		} else {
			$navbar.removeClass('menu-fixed').css('background-color', 'transparent');
		}
	}
	document.onscroll = scroll;

});