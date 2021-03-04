window.onscroll = function() {
    
    let nav = document.querySelector('.navbar');

    if ( window.pageYOffset > 150 ) {
        nav.classList.add("navScroll");
    } else {
        nav.classList.remove("navScroll");
    }

}

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:40,
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
  });

  var $grid = $('.filter').isotope({
    // options
    itemSelector: '.grid',
    layoutMode: 'fitRows'
    });

  $('.btns').on( 'click', '.btn', function() {
    var filterValue = $(this).attr('data-name');
    $grid.isotope({ filter: filterValue });
  });


jQuery(document).ready(function( $ ) {
    $('.num').counterUp({
        delay: 10,
        time: 1000
    });
});