$(document).ready(function () {
  let owl = $(".owl-carousel-gallery");
  owl.owlCarousel({
    items: 1,
    lazyLoad: true,
    center: true,
    loop: true,
    autoplay: true,
    lazyLoadEager: 1,
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

  const option = {
    items: 5,
    nav: false,
    margin: 16,
    dots: false,
  };
  let priceUnlimited = $(".owl-carousel-unlimited");
  let priceDaytime = $(".owl-carousel-daytime");
  let priceChildlike = $(".owl-carousel-childlike");
  priceUnlimited.owlCarousel(option);
  priceDaytime.owlCarousel(option);
  priceChildlike.owlCarousel(option);
});
