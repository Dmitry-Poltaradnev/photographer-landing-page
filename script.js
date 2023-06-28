// =============== Translate change
var arrLang = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  for (const el of [...document.querySelectorAll(".translate")])
    el.addEventListener("click", () => {
      var lang = el.getAttribute("id");
      for (const item of [...document.querySelectorAll(".lang")])
        item.textContent = arrLang[lang][item.getAttribute("key")];
    });
});

// Burger handler
const menuLinks = document.querySelectorAll(".header__link");
const iconMenu = document.querySelector(".burger");
const menuBody = document.querySelector(".header__menu__burger");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("burger__active");
    iconMenu.classList.toggle("header__menu__burger_active");
    menuBody.classList.toggle("header__menu__burger_active");
  });
  if ((window.innerWidth = 768)) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", () => {
        menuBody.classList.remove("header__menu__burger_active");
        iconMenu.classList.remove("burger__active");
      });
    }
  }
}
// Change images portfolio
const portfolioBtn = document.querySelector(".btn_images");
const portfolioImages = document.querySelectorAll(".photo");
const portfolioBtns = document.querySelector(".menu__portfolio");

portfolioBtns.addEventListener("click", function (event) {
  if (event.target.dataset.season == "winter") {
    portfolioImages.forEach(
      (img, index) => (img.src = `./winter/${index + 1}.jpg`)
    );
  }
  if (event.target.dataset.season == "spring") {
    portfolioImages.forEach(
      (img, index) => (img.src = `./spring/${index + 1}.jpg`)
    );
  }
  if (event.target.dataset.season == "summer") {
    portfolioImages.forEach(
      (img, index) => (img.src = `./summer/${index + 1}.jpg`)
    );
  }
  if (event.target.dataset.season == "autumn") {
    portfolioImages.forEach(
      (img, index) => (img.src = `./autumn/${index + 1}.jpg`)
    );
  }
});
// Change color theme
let page = document.querySelector(".page");
let themeButton = document.querySelector(".theme-button");
themeButton.onclick = function () {
  page.classList.toggle("light-theme");
  page.classList.toggle("dark-theme");
};

let message = document.querySelector(".subscription-message");
let form = document.querySelector(".subscription");
let email = document.querySelector(".subscription-email");

form.onsubmit = function (evt) {
  evt.preventDefault();
  message.textContent = email.value;
};
