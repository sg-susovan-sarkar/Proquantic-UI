import '../scss/main.scss';

import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;

$(function () {
  $('.logo-slider').slick({
    autoplay: true,
    autoplaySpeed: 2200,
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  });
});
