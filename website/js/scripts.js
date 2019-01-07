$(document).ready(function(){
  $('.d-project-slider').owlCarousel({
    items : 1,
    loop : true,
    nav: true,
    navText: ['&larr;','&rarr;'],
    lazyLoad: true
  });
  $('.hidden-projects').hide();
});

ScrollReveal().reveal('.revealjs', {duration: 750, delay: 150});

let buttonText = $('#show-projects-button').text()
$('#show-projects-button').click(function() {
  $('.hidden-projects').slideToggle("slow");
  $('#show-projects-button').text(function() {
    return buttonText === "↓ More Projects ↓" ? "↑ Less Projects ↑" : "↓ More Projects ↓"
  });
})