$(document).ready(function() {
     var swiper = new Swiper(".main-banner", {
        slidesPerView: 1,
        spaceBetween: 5,
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
});