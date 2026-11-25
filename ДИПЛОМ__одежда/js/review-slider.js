export const reviewSlider = () => {
  new Swiper(".review__slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    watchSlidesProgress: true,
    loopAdditionalSlides: 2,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviews__slider-button--prev",
      nextEl: ".reviews__slider-button--next",
    },
    breakpoints: {
      580: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  const updateBlur = () => {
    if (window.innerWidth < 768) {
      swiper.slides.forEach((s) => s.classList.remove("is-blurred"));
      return;
    }

    const isDesktop = window.innerWidth >= 1280;
    const threshold = isDesktop ? 1.5 : 0.5;

    swiper.slides.forEach((slide) => {
      const p = Math.abs(slide.progress ?? 0);
      slide.classList.toggle("is-blurred", p > threshold);
    });
  };
};
