/* Theme Name: Verny - Material Design Personal Template
   Author:Krish
   Author e-mail: themesbykrish@gmail.com
   Version: 1.0
   Created: March 2015
   File Description:Main JS file of the template
*/

/* ==============================================
1. Page Preloader
=============================================== */
$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$(".animationload").delay(600).fadeOut("slow");
});

/* ================================================
2. parallax
================================================ */
// $(window).stellar({
//     horizontalScrolling: false,
//     responsive: true,
//      scrollProperty: 'scroll',
//      parallaxElements: false,
//      horizontalScrolling: false,
//      horizontalOffset: 0,
//      verticalOffset: 0
// });
/* ==============================================
3.Owl carousel for testimonials
=============================================== */
$(document).ready(function() {
    $("#testi-carousel").owlCarousel({
        // Most important owl features
        items: 1,
        singleItem: true,
        startDragging: true,
        autoPlay: true
    });
});

/* ==============================================
4.Navbar-Scroll
=============================================== */
//transperent nav
$(window).scroll(function() {

	$(".navbar-collapse.collapse.in").collapse("hide");

    if ($(".navbar").offset().top > 1) {
        $(".navbar-fixed-top").addClass("navbar-bg");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-bg");
    }
});

/* ==============================================
5.Smooth Scroll To Anchor
=============================================== */
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* ==============================================
6.NiceScroll
=============================================== */
jQuery("html").niceScroll({
    scrollspeed: 50,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#757575',
    autohidemode: false,
    zindex: 9999999,
    horizrailenabled: false,
    cursorborderradius: 0
});
/* ==============================================
7. WOW plugin triggers animate.css on scroll
=============================================== */
jQuery(document).ready(function () {
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            mobile: true
        }
    );
    wow.init();
});

/* ==============================================
    10. Scroll to top
=============================================== */

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});
