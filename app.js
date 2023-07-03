// slider
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
});
// Animate on scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".product-img");
    const sectionsReverse = document.querySelector(".product-img-reverse");
    sections.forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.add("animation");
        section.style.opacity = "1";
      } else {
        // section.classList.remove("animation");
      }
    });
    if (isElementInViewport(sectionsReverse)) {
      sectionsReverse.classList.add("animation-reverse");
      sectionsReverse.style.opacity = "1";
    } else {
      // sectionsReverse.classList.remove("animation-reverse");
    }
  });
});

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= 0 && rect.top <= windowHeight - element.offsetHeight;
}
// scroll on click
function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  const offsetTop = targetSection.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}
// burger toggle
const burgerIcon = document.querySelector(".burger-icon");

function toggleBurger() {
  burgerIcon.classList.toggle("active");
}
// responsive navbar
const respNavbar = document.querySelector(".resp-navbar");

burgerIcon.addEventListener("click", () => {
  if (respNavbar.style.display === "block") {
    respNavbar.style.display = "none";
  } else {
    respNavbar.style.display = "block";
  }
});
function checkResolution() {
  const mediaQuery = window.matchMedia("(min-width: 1241px)");

  if (mediaQuery.matches) {
    respNavbar.style.display = "none";
  } else {
    respNavbar.style.display = "block";
  }
}

window.addEventListener("resize", checkResolution);
