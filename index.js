import "./src/js/products";
import "./src/js/product-filter";
import "./src/js/reviews";

var swiper = new Swiper(".swiper-container", {
  // autoplay: true,
  autoplay: {
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  // spaceBetween: 30,
  breakpoints: {
    1500: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    2200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
  centeredSlides: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
