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
            $('.scroll-up-button').addClass("show");
        } else {
            $('.scroll-up-button').removeClass("show");
        }
    });

    // scroll up script
    $('scroll-up-button').click(function() {
        $('html').animate({ scrollTop: 0 });
    });



    //////////////toggle menu/navbar scripts////////////

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

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