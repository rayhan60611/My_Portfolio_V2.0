$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (window.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        // if (this.scrollY > 500) {
        //     $('.scroll-up-btn').addClass("show");
        // } else {
        //     $('.scroll-up-btn').removeClass("show");
        // }
    });



    //toggle menu/navbar//

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

















});