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
    nav: false,
    margin: 16,
    dots: false,
    autoWidth: true,
    checkVisible: false,
  };

  $(".owl-carousel-unlimited").owlCarousel(option);
  $(".owl-carousel-daytime").owlCarousel(option);
  $(".owl-carousel-childlike").owlCarousel(option);
});
