$(document).ready(function(){
  $('.d-project-slider').owlCarousel({
    items : 1,
    loop : true,
    nav: true,
    navText: ['&larr;','&rarr;'],
    lazyLoad: true
  });
});

ScrollReveal().reveal('.revealjs', {duration: 750, delay: 150});
