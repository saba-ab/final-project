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
  const offsetTop = targetSection.offsetTop - respNavbar.clientHeight;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}
// burger toggle
// responsive navbar
const burgerIcon = document.querySelector(".burger-icon");
const swiperDiv = document.querySelector(".swiper");
const respNavbar = document.querySelector(".resp-navbar");
function toggleBurger() {
  burgerIcon.classList.toggle("active");
  if (respNavbar.style.display === "block") {
    respNavbar.style.display = "none";
    swiperDiv.style.marginTop = "0px";
  } else {
    respNavbar.style.display = "block";
    swiperDiv.style.marginTop = `${respNavbar.clientHeight}px`;
  }
}
const responsiveNavigation = respNavbar.querySelectorAll("li");
responsiveNavigation.forEach((item) => {
  item.addEventListener("click", () => {
    toggleBurger();
  });
});
function checkResolution() {
  const mediaQuery = window.matchMedia("(min-width: 1241px)");

  if (mediaQuery.matches) {
    respNavbar.style.display = "none";
    swiperDiv.style.marginTop = `-${respNavbar.clientHeight}px`;
  } else {
    respNavbar.style.display = "block";
    swiperDiv.style.marginTop = `${respNavbar.clientHeight}px`;
  }
}
window.addEventListener("resize", checkResolution);
// submit message
let messages = [];
const submit = document.getElementById("messageForm");
submit.addEventListener("submit", function (event) {
  event.preventDefault();
  const error = document.getElementById("error");
  error.style.color = "red";
  const validated = document.querySelectorAll("input, textarea");
  const fullName = document.querySelectorAll("input[type='text']");
  const email = document.querySelector("input[type='email']");
  const number = document.querySelector("input[type='number']");
  const message = document.querySelector("textarea");
  let stopLoop = false;
  fullName.forEach((name) => {
    if (stopLoop) return;
    console.log(name.value);
    if (/.*\d.*/.test(name.value)) {
      error.textContent = "სახელი ან გვარი არ უნდა შეიცავდეს ციფრებს";
      stopLoop = true;
    } else {
      error.textContent = "";
    }
  });
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    error.textContent = "გთხოვთ შეიყვანოთ მოქმედი მეილი";
  } else {
    error.textContent = "";
  }
  console.log(number.value.length);
  if (/^\+995\d{9}$/.test(number.value) || number.value.length !== 12) {
    error.textContent = "ჩაწერის ფორმატი +995********* გამოიყენეთ 12 ციფრი";
  } else {
    error.textContent = "";
  }
  validated.forEach((item) => {
    if (item.value === "") {
      error.textContent = "გთხოვთ სრულად შეავსოთ ფორმა";
    } else {
      error.style.color = "green";
      error.textContent = "შეტყობინება წარმატებით გაიგზავნა";
    }
  });
  const newMessage = {};
  validated.forEach((item) => {
    const key = item.name;
    const value = item.value;
    newMessage[key] = value;
  });
  messages.push(newMessage);
});
