export const reviewSlider = () => {
  new Swiper(".review__slider", {
    initialSlide: 1,
    slidesPerView: "1.2",
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
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
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
    },
  });
};
