var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });