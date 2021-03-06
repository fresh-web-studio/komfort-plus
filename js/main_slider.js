$(document).ready(function(){
    $("#owl-carousel1").owlCarousel(
        {
            loop:true,
            margin:0,
            items: 1,
            autoplay:true,
            autoplayTimeout:6000,
            autoplayHoverPause:true
        }
    );
    $("#owl-carousel2").owlCarousel(
        {
            loop:true,
            margin:35,
            nav:true,
            dots:false,
            autoplay:true,
            autoplayTimeout:6000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                670:{
                    items:4
                }
            }
        }
    );
    $("#owl-carousel3").owlCarousel(
        {
            loop:true,
            margin:22,
            nav:true,
            center:true,
            dots:false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                670:{
                    items:5
                }
            }
        }
    );
    $("#owl-carousel4").owlCarousel(
        {
            loop:true,
            margin:23,
            dots:true,
            autoplay:true,
            autoplayTimeout:7000,
            autoplayHoverPause:true,
            dotsEach:true,
            responsive:{
                0:{
                    items:1
                },
                670:{
                    items:6
                }
            }
        }
    );
});