$(document).ready(function () {
  let owl = $(".owl-carousel-gallery");
  owl.owlCarousel({
    items: 1,
    center: true,
    loop: true,
    lazyLoad: true,
  });
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });

  let priceCarousel = $(".owl-carousel-price");
  priceCarousel.owlCarousel({
    items: 5,
    nav: false,
    margin: 16,
    dots: false,
  });
});
