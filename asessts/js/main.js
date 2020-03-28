//Navbar Toggle
$(document).ready(() => {
    $('#home-tag').addClass('active')
})

$(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($(window).width() < 1200) {
        if (scroll >= 780) {
            $("#home-tag").removeClass("active");
            $("#our-work-tag").addClass("active");
        } else {
            $("#home-tag").addClass("active");
            $("#our-work-tag").removeClass("active");
        }

    } else if ($(window).width() >= 1200) {

        if (scroll >= 1020) {
            $("#home-tag").removeClass("active");
            $("#our-work-tag").addClass("active");
        } else {
            $("#home-tag").addClass("active");
            $("#our-work-tag").removeClass("active");
        }
    }
})


//H1 Animation
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false
    })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1000
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 900,
        delay: 500
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 10000,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 1
    });

//Navbar-Fixed
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