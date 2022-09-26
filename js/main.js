/*Найди элемент который называется channel-sliper и примени к нему библиотеку Swiper  */
const swiper = new Swiper('.channel-sliper', {
  // Optional parameters
  loop: true /*Сделай так чтобы слайды перелистывались даже когда закончились*/,
  slidesPerView: 1 /*Сразу видно 6 слайдов*/,
  spaceBetween: 20,
  breakpoints: {
    2100: {
      slidesPerView: 7,
    },
    1920: {
      slidesPerView: 6,
    },

    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows /*Сделай так чтобы кнопки плагинации работали с классами  swiper-button-next swiper-button-prev' */
  navigation: {
    nextEl: '.chennal-button-next',
    prevEl: '.chennal-button-prev',
  },
})

/*
const swiper = new Swiper('.channel-Recommended',{
 
  loop: true ,
  slidesPerView:4 ,

  navigation: {
    nextEl: '.chennal-button-next',
    prevEl: '.chennal-button-prev',
  },
})
*/
