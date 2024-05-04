/**
 * add event on element
 */

const addEventOnElem = function(elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const toggleNavbar = function() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};
addEventOnElem(navTogglers, "click", toggleNavbar);
const closeNavbar = function() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};
addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function() {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElem);

/**
 * header active when scroll down to 100px
 */

const TOTAL_SLIDES = 3;
let currentIndex = 0;
const dots = document.querySelectorAll(".dots button");
const images = document.querySelectorAll(".images img");

function showSlide(index) {
  images.forEach(image => (image.style.display = "none"));
  dots.forEach(dot => (dot.style.backgroundColor = "transparent"));
  images[index].style.display = "block";
  dots[index].style.backgroundColor = "#000";
}
function gotoSlide(index) {
  currentIndex = (TOTAL_SLIDES + index) % TOTAL_SLIDES;
  showSlide(currentIndex);
}
function next() {
  gotoSlide(currentIndex + 1);
}
function prev() {
  gotoSlide(currentIndex - 1);
}
function dotClicked(index) {
  gotoSlide(index);
}
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => dotClicked(index));
});
showSlide(currentIndex);
