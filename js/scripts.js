$(document).ready(function(){
  $('.d-project-slider').owlCarousel({
    items : 1,
    loop : true,
    nav: true,
    navText: ['&larr;','&rarr;'],
    lazyLoad: true,
    lazyLoadEager: 1
  })

  $('.s-project-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ['&larr;','&rarr;'],
    lazyLoad: true,
    lazyLoadEager: 1,
    autoHeight: true
  })

  $('.hidden-projects').hide()

  let stickyHeader = function() {
    let scrollTop = $(window).scrollTop()
    scrollTop > 400
    ? $('.sticky-header').slideDown()
    : $('.sticky-header').slideUp()
  }

  stickyHeader()

  $(window).scroll(function() {
    stickyHeader()
  })

  ScrollReveal().reveal('.revealjs', {duration: 750, delay: 150})

  let buttonText = $('#show-projects-button').text()
  $('#show-projects-button').click(function() {
    $('.hidden-projects').slideToggle("slow")
    $('#show-projects-button').text(function() {
      return buttonText === "↓ More Projects ↓" ? "↑ Less Projects ↑" : "↓ More Projects ↓"
    })
  })
})

//Event listener for nav buttons
const navBtns = document.querySelectorAll('.site-header .nav-link')
const stickyBtns = document.querySelectorAll('.sticky-header .nav-link')

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navBtns.forEach(el => {
      el.classList.remove("current")
    })
    document.querySelector('.sticky-header .current').classList.remove("current")
    btn.classList.add("current")
    document.querySelector(`.sticky-header .nav-link[href="${btn.hash}"]`).classList.add("current")

  })
})

stickyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    stickyBtns.forEach(el => {
      el.classList.remove("current")
    })
    document.querySelector('.site-header .current').classList.remove("current")
    btn.classList.add("current")
    document.querySelector(`.site-header .nav-link[href="${btn.hash}"]`).classList.add("current")
  })
})

const anchors = document.querySelectorAll('.anchor-offset')
console.log('anchors', anchors)

function updateCurrentLink() {
  let i = anchors.length;

  while(--i && window.scrollY + 125 < anchors[i].offsetTop) {}

  navBtns.forEach(btn => btn.classList.remove('current'))
  navBtns[i].classList.add('current')

  stickyBtns.forEach(btn => btn.classList.remove('current'))
  stickyBtns[i].classList.add('current')
}

// Set a wait period so scroll event listener doesn't fire a million times per second
function throttledScroll(scrollFn, wait) {
  let time = Date.now()
  return function() {
    if ((time + wait - Date.now()) < 0) {
      scrollFn()
      time = Date.now()
    }
  }
}

updateCurrentLink()
window.addEventListener('scroll', throttledScroll(updateCurrentLink, 250))

