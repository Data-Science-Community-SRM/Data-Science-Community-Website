// H1 Animation
let textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

//Team Members
const teamMembers = () => {
    let members = [{
            "name": "Yashvardhan Jagnani",
            "role": "something",
            "img": "yashvardhan",
            "github": "jagnani73",
            "linkedin": "yashvardhan-jagnani"
        },
        {
            "name": "Aslı",
            "role": "Sales",
            "img": "asli"
        },
        {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }, {
            "name": "Veysel",
            "role": "Broadcasting",
            "img": "veysel"
        }
    ];
    $("#team").tmpl(members).appendTo("#team-container");
};
$(document).ready(() => {
    teamMembers();
})
anime.timeline({
        loop: false
    })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
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