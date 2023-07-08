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
const fixedHeader = document.querySelector(".header-container");
function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  const offsetTop =
    targetSection.offsetTop -
    respNavbar.clientHeight -
    fixedHeader.clientHeight;
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
    swiperDiv.style.marginTop = "106px";
  } else {
    respNavbar.style.display = "block";
    swiperDiv.style.marginTop = `${
      respNavbar.clientHeight + fixedHeader.clientHeight
    }px`;
  }
}
const responsiveNavigation = respNavbar.querySelectorAll("li");
responsiveNavigation.forEach((item) => {
  item.addEventListener("click", () => {
    toggleBurger();
  });
});
function checkResolution() {
  const screenWidth = window.innerWidth;
  const targetWidth = 1241;
  const mediaQuery = window.matchMedia("(min-width: 1241px)");

  if (mediaQuery.matches) {
    respNavbar.style.display = "none";
    swiperDiv.style.marginTop = `-${
      respNavbar.clientHeight - fixedHeader.clientHeight
    }px`;
    console.log("if");
  } else {
    respNavbar.style.display = "none";
    swiperDiv.style.marginTop = `${
      respNavbar.clientHeight + fixedHeader.clientHeight
    }px`;
    console.log("else");
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
  // let stopLoop = false;

  //validations
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    error.textContent = "გთხოვთ შეიყვანოთ მოქმედი მეილი";
  } else if (!/.*\d.*/.test(name.value)) {
    error.textContent = "სახელი ან გვარი არ უნდა შეიცავდეს ციფრებს";
  } else if (/^\+995\d{9}$/.test(number.value) || number.value.length !== 12) {
    error.textContent = "ჩაწერის ფორმატი +995********* გამოიყენეთ 12 ციფრი";
  } else {
    error.textContent = "შეტყობინება წარმატებით გაიგზავნა";
  }
  validated.forEach((item) => {
    if (item.value === "") {
      error.textContent = "გთხოვთ სრულად შეავსოთ ფორმა";
      submit.reset();
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

const url = `https://api.brandfetch.io/v2/brands/`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer TWvnbNVE/eRjWvo05G6PneRYSweS66r2BEJNJ69+hKk=",
  },
};

async function getLogo() {
  try {
    const companys = ["m2.ge", "archi.ge", "house.ge"];
    companys.forEach(async (item) => {
      const response = await fetch(url + item, options);
      const json = await response.json();
      const partnerDiv = document.createElement("div");
      partnerDiv.classList.add("partners");
      const partnerImage = document.createElement("img");
      partnerImage.setAttribute("src", `${json.logos[0].formats[0].src}`);
      partnerDiv.appendChild(partnerImage);
    });
  } catch {
    console.log(error, "error");
  }
}
getLogo();

//<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-[700]">2.80</span>sellu
const countdown = document.querySelector(
  "span.absolute.top-1/2.left-1/2.-translate-x-1/2.-translate-y-1/2.text-3xl.font-[700]"
);
function checkCountdown() {
  setInterval(function () {
    if (countdown.value <= 0.1) {
      const bidButton = document.getElementById("bidButton");
      if (bidButton) {
        bidButton.click();
      }
    }
  }, 1);
}
checkCountdown();
