(self.webpackChunk_adobe_aem_boilerplate = self.webpackChunk_adobe_aem_boilerplate || []).push([[801], {
  801: (e, i, s) => {
    s.r(i), s.d(i, { default: () => l }); const a = {
      loop: !0,
      slidesPerView: 3,
      grabCursor: !0,
      autoplay: !1,
      navigation: {},
      pagination: { clickable: !0 },
      breakpoints: {
        300: { slidesPerView: 1.3 }, 780: { slidesPerView: 1.2 }, 992: { slidesPerView: 3 }, 1199: { slidesPerView: 3 },
      },
    }; const l = {
      'one-slide-only': {
        slidesPerView: 1,
        grabCursor: !0,
        autoplay: { delay: 5e7, disableOnInteraction: !1 },
        navigation: {},
        pagination: { clickable: !0 },
        breakpoints: {
          300: { slidesPerView: 1 }, 780: { slidesPerView: 1 }, 992: { slidesPerView: 1 }, 1199: { slidesPerView: 1 },
        },
      },
      'two-slides-only': {
        loop: !0,
        slidesPerView: 2,
        grabCursor: !0,
        navigation: {},
        pagination: { clickable: !0 },
        breakpoints: {
          300: { slidesPerView: 1, grabCursor: !0 }, 780: { slidesPerView: 1, grabCursor: !0 }, 992: { slidesPerView: 2 }, 1199: { slidesPerView: 2 },
        },
      },
      'three-slides-only': a,
      default: a,
    };
  },
}]);
