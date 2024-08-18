import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

new Swiper('.swiper-projects', {
  modules: [Navigation, Mousewheel, Keyboard],
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


