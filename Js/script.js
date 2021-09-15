$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (window.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll - up button show / hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // scroll up script
    $('.scroll-up-btn').click(function() {
        $("html").animate({ scrollTop: 0 });
    });



    //////////////toggle menu/navbar scripts////////////

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });


    ///////// Typing ANIMATION SCRIPT//////////////
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Creative Designer", "UI/UX Designer", "Freelancer", "Content Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Creative Designer", "UI/UX Designer", "Freelancer", "Content Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    /////////////// owl carosel scripts////////////////

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });













});