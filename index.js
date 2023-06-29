import "./src/js/products";
import "./src/js/product-filter";
import "./src/js/reviews";

var swiper = new Swiper(".swiper-container", {
  // autoplay: true,
  autoplay: {
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
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
