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

    if (!/.*\d.*/.test(name.value)) {
    error.textContent = "სახელი ან გვარი არ უნდა შეიცავდეს ციფრებს";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      return error.textContent = "გთხოვთ შეიყვანოთ მოქმედი მეილი";
    } 
    if (/^\+995\d{9}$/.test(number.value) || number.value.length !== 12) {
      return error.textContent = "ჩაწერის ფორმატი +995********* გამოიყენეთ 12 ციფრი";
    }
  validated.forEach((item) => {
    if (item.value === "") {
      return error.textContent = "გთხოვთ სრულად შეავსოთ ფორმა";
  };

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
  function printHelloWorld() {
    const greetingDiv = document.createElement("div");
    const greetingText = document.createElement("p");
    document.body.appendChild(greetingDiv);
    greetingDiv.appendChild(greetingText);
    greetingText.textContent = "Hello World";
  }
  printHelloWorld();

//<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-[700]">2.80</span>sellu
// const countdown = document.querySelector(
//   "span.absolute.top-1/2.left-1/2.-translate-x-1/2.-translate-y-1/2.text-3xl.font-[700]"
// );
// function checkCountdown() {
//   setInterval(function () {
//     if (countdown.value <= 0.1) {
//       const bidButton = document.getElementById("bidButton");
//       if (bidButton) {
//         bidButton.click();
//       }
//     }
//   }, 1);
// }
// checkCountdown();
{
  /* <div class="mx-auto mt-5 px-10 w-fit relative -mb-10 bg-white"><button class="
            custom__button--primary
            
            
            
            
            
            custom__button--medium
            
            
            !min-w-[150px] 
            custom__button
        ">დაბიდვა</button></div>
        <div class=".relative.h-[300px].flex.flex-col.items-center.justify-end"><span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-[700]">2.50</span><div class="text-center text-xs text-site-black-50">ბიდები<div class="font-[700] text-site-black-100">10 / 10</div></div><div class="mx-auto mt-5 px-10 w-fit relative -mb-10 bg-white"><button class="
            custom__button--primary
            
            
            
            
            
            custom__button--medium
            
            
            !min-w-[150px] 
            custom__button
        ">დაბიდვა</button></div><div class="z-10 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"><svg class="w-full h-full" viewBox="0 0 336 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.2198 292.838C37.523 271.276 19.1052 242.31 10.4798 209.893C1.85431 177.476 3.44134 143.187 15.0243 111.706C26.6073 80.2241 47.6219 53.0833 75.2006 33.987C102.779 14.8906 135.578 4.76891 169.122 5.00309C202.666 5.23728 235.321 15.8159 262.631 35.2955C289.94 54.7751 310.574 82.2066 321.716 113.847C332.858 145.487 333.966 179.795 324.889 212.088C315.812 244.381 296.991 273.087 270.996 294.289" stroke="#140800" stroke-width="9.99913" stroke-linecap="round"></path><animate attributeName="stroke-dasharray" from="846 846" to="846 846" dur="3s" repeatCount="indefinite" fill="freeze"></animate><animate attributeName="stroke-dashoffset" from="0" to="846" dur="3s" repeatCount="indefinite" fill="freeze"></animate></svg></div><div class="z-0 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"><svg class="w-full h-full" viewBox="0 0 336 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.2198 292.838C37.523 271.276 19.1052 242.31 10.4798 209.893C1.85431 177.476 3.44134 143.187 15.0243 111.706C26.6073 80.2241 47.6219 53.0833 75.2006 33.987C102.779 14.8906 135.578 4.76891 169.122 5.00309C202.666 5.23728 235.321 15.8159 262.631 35.2955C289.94 54.7751 310.574 82.2066 321.716 113.847C332.858 145.487 333.966 179.795 324.889 212.088C315.812 244.381 296.991 273.087 270.996 294.289" stroke="#E8E6E6" stroke-width="9.99913" stroke-linecap="round"></path></svg></div></div>
        <div class="p-6 rounded-xl bg-white h-fit"><div class="flex items-center justify-between mb-10"><h3 class="lg:text-2xl font-[700]">ბიდინგი</h3><div class="w-10 h-10 bg-brand-color-10 flex items-center justify-center rounded-full p-2 cursor-pointer relative"><div class="-rotate-45
                             w-[1px]
                             absolute
                             bg-brand-color-100
                             transition-all
                             left-[6px]
                             top-[6px]
                             pointer-events-none
                             origin-top-left
                             h-0
                             "></div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#FF9D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#FF9D00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><div class="relative h-[300px] flex flex-col items-center justify-end"><span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-[700]">0.70</span><div class="text-center text-xs text-site-black-50">ბიდები<div class="font-[700] text-site-black-100">0 / 10</div></div><div class="mx-auto mt-5 px-10 w-fit relative -mb-10 bg-white"><button class="
            custom__button--primary
            
            
            
            
            
            custom__button--medium
            
            custom__button--disabled
            !min-w-[150px] 
            custom__button
        " disabled="">დაბიდვა</button></div><div class="z-10 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"><svg class="w-full h-full" viewBox="0 0 336 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.2198 292.838C37.523 271.276 19.1052 242.31 10.4798 209.893C1.85431 177.476 3.44134 143.187 15.0243 111.706C26.6073 80.2241 47.6219 53.0833 75.2006 33.987C102.779 14.8906 135.578 4.76891 169.122 5.00309C202.666 5.23728 235.321 15.8159 262.631 35.2955C289.94 54.7751 310.574 82.2066 321.716 113.847C332.858 145.487 333.966 179.795 324.889 212.088C315.812 244.381 296.991 273.087 270.996 294.289" stroke="#FF0000" stroke-width="9.99913" stroke-linecap="round"></path><animate attributeName="stroke-dasharray" from="846 846" to="846 846" dur="1s" repeatCount="indefinite" fill="freeze"></animate><animate attributeName="stroke-dashoffset" from="0" to="846" dur="1s" repeatCount="indefinite" fill="freeze"></animate></svg></div><div class="z-0 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"><svg class="w-full h-full" viewBox="0 0 336 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.2198 292.838C37.523 271.276 19.1052 242.31 10.4798 209.893C1.85431 177.476 3.44134 143.187 15.0243 111.706C26.6073 80.2241 47.6219 53.0833 75.2006 33.987C102.779 14.8906 135.578 4.76891 169.122 5.00309C202.666 5.23728 235.321 15.8159 262.631 35.2955C289.94 54.7751 310.574 82.2066 321.716 113.847C332.858 145.487 333.966 179.795 324.889 212.088C315.812 244.381 296.991 273.087 270.996 294.289" stroke="#E8E6E6" stroke-width="9.99913" stroke-linecap="round"></path></svg></div></div><div class="mt-20"><div class="flex items-center justify-between"><span>დარჩენილი ბიდები</span><span>0</span></div><div class="mb-4 mt-2 bg-site-black-10 w-full h-[1px]"></div><div class="flex items-center justify-between"><span>დახარჯული ბიდები</span><span>10</span></div></div><div class="
        px-6 
        py-2
        border
        text-sm
        rounded-lg
        flex 
        items-center
        gap-4
        my-6
        !text-site-black-100
        bg-site-black-5 border-site-black-25
    "><img src="/icons/info.svg" alt="sellu"><div class="flex flex-col gap-1"><span class="font-[600]">შენ გახარჯე ყველა ბიდი</span></div></div></div> */
}

// const countDown = document.querySelector("div.p-6.rounded-xl.bg-white.h-fit");
// const countdownsec = countdown.querySelector(":nth-child(2)");
