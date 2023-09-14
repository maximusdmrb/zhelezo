import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

new Swiper(".swiper-gallery", {
  grabCursor: true,
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  pagination: {
    el: ".pagination-gallery",
    type: "progressbar",
  },
});

const priceSwipeConf = {
  slidesPerView: "auto",
};
new Swiper(".swiper-unlimited", priceSwipeConf);
new Swiper(".swiper-daytime", priceSwipeConf);
new Swiper(".swiper-childlike", priceSwipeConf);

new Swiper(".swiper-trainers", priceSwipeConf);

new Swiper(".swiper-arm", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: ".pagination-arm",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}"></div>`;
    },
  },
});
