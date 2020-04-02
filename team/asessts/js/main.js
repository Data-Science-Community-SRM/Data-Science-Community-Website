// H1 Animation
let textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

//Team Members
const teamMembers = () => {
    let members = [{
        "name": "Avirup Chattaraj",
        "role": "PRESIDENT",
        "img": "avirup",
        "github": "severussnape123",
        "linkedin": "avirupchattaraj"
    }, {
        "name": "Hritik Bhandari",
        "role": "PRESIDENT",
        "img": "hritik",
        "github": "hritikbhandari",
        "linkedin": "hritikbhandari"
    }, {
        "name": "Anush Bhatia",
        "role": "TECHNICAL DIRECTOR",
        "img": "anush",
        "github": "anushbhatia",
        "linkedin": "anush-bhatia-aa500a158"
    }, {
        "name": "Hariom Palkar",
        "role": "CORPORATE DIRECTOR",
        "img": "hariom",
        "github": "aannuuj",
        "linkedin": "hariompalkar"
    }, {
        "name": "Takshil Mittal",
        "role": "EVENTS DIRECTOR",
        "img": "takshil",
        "github": "takshilmittal",
        "linkedin": "takshil-mittal"
    }, {
        "name": "Pratyaksh Bhalla",
        "role": "EXECUTIVE DIRECTOR",
        "img": "pratyaksh",
        "github": "pratyaksh64",
        "linkedin": "pratyaksh-bhalla-96871b186"
    }, {
        "name": "Abhishek Saxena",
        "role": "MEMBER",
        "img": "abhishek",
        "github": "saxenabhishek",
        "linkedin": "abhibored"
    }, {
        "name": "K. Aditya",
        "role": "MEMBER",
        "img": "aditya",
        "github": "i-am-aditya",
        "linkedin": "iamadityak"
    }, {
        "name": "Devansh Goswami",
        "role": "MEMBER",
        "img": "devansh",
        "github": "",
        "linkedin": "devansh-goswami-74590a187"
    }, {
        "name": "Gayathri Seetharaman",
        "role": "MEMBER",
        "img": "gayathri",
        "github": "Gayathri621",
        "linkedin": "gayathri-seetharaman-964986158"
    }, {
        "name": "Kartik Mohan",
        "role": "MEMBER",
        "img": "kartik",
        "github": "kartikmohan123",
        "linkedin": "kartik-mohan"
    }, {
        "name": "Rushil Rai",
        "role": "MEMBER",
        "img": "rushil",
        "github": "rushilrai",
        "linkedin": "rushil-rai-07363116a"
    }, {
        "name": "Sampada Bareja",
        "role": "MEMBER",
        "img": "sampada",
        "github": "",
        "linkedin": "sampada-bareja-43930818b"
    }, {
        "name": "Shubhangi Soni",
        "role": "MEMBER",
        "img": "shubhangi",
        "github": "ShubhangiSoni1603",
        "linkedin": "shubhangi-soni"
    }, {
        "name": "Tejas Chintala",
        "role": "MEMBER",
        "img": "tejas",
        "github": "arcado10",
        "linkedin": "tejas-chintala-752918188"
    }, {
        "name": "Utkarsh Chaurasia",
        "role": "MEMBER",
        "img": "utkarsh",
        "github": "UtkarshChaurasia",
        "linkedin": "utkarsh-chaurasia-a4b76a17b"
    }, {
        "name": "Yashvardhan Jagnani",
        "role": "MEMBER",
        "img": "yashvardhan",
        "github": "jagnani73",
        "linkedin": "yashvardhan-jagnani"
    }];
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