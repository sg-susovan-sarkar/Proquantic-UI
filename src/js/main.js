$(function () {
  $(".logo-slider").slick({
    autoplay: true,
    autoplaySpeed: 2200,
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });

  $("[data-accordion]").each(function () {
    const $group = $(this);
    $group.on("click", ".accordion-trigger", function () {
      const $item = $(this).closest(".accordion-item");
      const wasOpen = $item.hasClass("is-open");
      $group.find(".accordion-item").removeClass("is-open");
      if (!wasOpen) $item.addClass("is-open");
    });
  });

  const $successSlider = $(".success-slider");
  if ($successSlider.length) {
    $successSlider.slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    });
    $(".success-prev").on("click", function () {
      $successSlider.slick("slickPrev");
    });
    $(".success-next").on("click", function () {
      $successSlider.slick("slickNext");
    });
  }
});
