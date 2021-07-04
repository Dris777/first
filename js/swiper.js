let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.2,
  centeredSlides: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});