$(document).ready(function(){"use strict";$(function(){$("body").on("click",".page-scroll a",function(o){var i=$(this),e=$(i.attr("href")).offset().top,t=e<800?0:e;$("html, body").stop().animate({scrollTop:t-50},1500,"easeInOutExpo"),o.preventDefault()})}),$(".carousel").carousel({interval:3e3}),$(".responsive").slick({dots:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$("#mobile-menu").mobileMenu({MenuWidth:250,SlideSpeed:300,WindowsMaxWidth:767,PagePush:!0,FromLeft:!1,Overlay:!0,CollapseMenu:!0,ClassName:"mobile-menu"}),$(".fancybox").fancybox(),$(window).load(function(){var o=$(".blogmasonary");o.isotope({layoutMode:"masonry",animationOptions:{duration:750,easing:"linear",queue:!0}});var o=$(".portfoliodiv");o.isotope({filter:".coloring",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear",queue:!0}}),$(".filter ul li a").click(function(){$(".filter .active").removeClass("active"),$(this).addClass("active");var i=$(this).attr("data-filter");return"*"==i?$(i).children("a.fancybox").attr("data-fancybox-group","gallery"):$(i).children("a.fancybox").attr("data-fancybox-group",i.substring(1)),o.isotope({filter:i,animationOptions:{duration:750,queue:!1}}),!1})}),$(window).scroll(function(){$(this).scrollTop()>500?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}),$(window).load(function(){(new WOW).init()});