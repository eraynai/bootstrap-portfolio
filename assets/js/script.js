$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
})

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 30,
        responsive:{
            0:{
                items: 1
            },
            900: {
                items: 2
            }
        }
    });

    //One Page Scroll
    $.scrollIt({
        easing: 'linear',
        topOffset: -70
    });
})
