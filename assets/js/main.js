var toggle = document.querySelector('#toggle');
var menu = document.querySelector('.main-navigation__list');
var hamburgerIcon = document.querySelector('.main-navigation__burger-icon');

toggle.addEventListener('click', function() {
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
    hamburgerIcon.innerText = '\u2630';
    hamburgerIcon.classList.toggle('main-navigation__button-active');
  } else {
    menu.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    hamburgerIcon.innerText = '\u00D7';
    hamburgerIcon.classList.toggle('main-navigation__button-active');
  }
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}
