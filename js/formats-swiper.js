const swiper = new Swiper('.swiper-container', {
  // Optional parameters
//   direction: 'vertical',
    loop: true,

    // Default parameters
  slidesPerView: 1,
    spaceBetween: 20,
  
     // Responsive breakpoints
  breakpoints: {
    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    // //   spaceBetween: 20
    // },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    //   spaceBetween: 30
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    //   spaceBetween: 40
    }
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});