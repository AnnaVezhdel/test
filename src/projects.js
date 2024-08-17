import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-projects', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },

  slidesPerView: 1,
  spaceBetween: 34,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});