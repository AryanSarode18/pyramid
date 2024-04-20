/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);







var currentImageIndex = 1; // Start from 1 since result1.jpg is the initial image
    var totalImages = 3; // Total number of images
    var imagePath = "assets/images/result"; // Path to images (excluding the index and extension)

    function showImage() {
        var image = document.getElementById("slider-image");
        image.src = imagePath + currentImageIndex + ".jpg";
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex > totalImages) {
            currentImageIndex = 1; // Start from the first image if reached the end
        }
        showImage();
    }

    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 1) {
            currentImageIndex = totalImages; // Go to the last image if reached the beginning
        }
        showImage();
    }

    // Show the initial image
    showImage();
