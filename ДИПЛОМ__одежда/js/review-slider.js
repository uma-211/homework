export const reviewSlider = () => {
  new Swiper(".review__slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    watchSlidesProgress: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviews__slider-button--prev",
      nextEl: ".reviews__slider-button--next",
    },
    breakpoints: {
      580: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};
