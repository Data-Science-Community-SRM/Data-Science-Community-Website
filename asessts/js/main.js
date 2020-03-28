$(function () {
    "use strict";

    var navTopOffset = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= navTopOffset) {
                    $(".header-area").addClass("navbar_fixed");
                } else {
                    $(".header-area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
});