import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.swiper-projects', {
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

import mob_1x from './img/book-mob.jpg';
import mob_2x from './img/book-mob-2x.jpg';
import tab_1x from './img/book-tab.jpg';
import tab_2x from './img/book-tab-2x.jpg';
import main from './img/book-tab.jpg';


// mob_1x: './src/img/pet-mob.jpg',
// mob_2x: './src/img/pet-mob-2x.jpg',
// tab_1x: './src/img/pet-tab.jpg',
// tab_2x: './src/img/pet-tab-2x.jpg',
// main: '../img/pet-tab.jpg',

// mob_1x: '../src/img/vocab-mob.jpg',
// mob_2x: '../src/img/vocab-mob-2x.jpg',
// tab_1x: '../src/img/vocab-tab.jpg',
// tab_2x: '../src/img/vocab-tab-2x.jpg',
// main: '../src/img/vocab-tab.jpg',

const projectsList = document.querySelector('.projects-list');

const projectImages = [
  {
    mob_1x: './img/book-mob.jpg',
    mob_2x: './img/book-mob-2x.jpg',
    tab_1x: './img/book-tab.jpg',
    tab_2x: './img/book-tab-2x.jpg',
    main: './img/book-tab.jpg',
    description: 'ReadJourney',
  },
  {
    mob_1x: './src/img/pet-mob.jpg',
    mob_2x: './src/img/pet-mob-2x.jpg',
    tab_1x: './src/img/pet-tab.jpg',
    tab_2x: './src/img/pet-tab-2x.jpg',
    main: '../img/pet-tab.jpg',
    description: 'PetLove',
    },
  {
    mob_1x: '../src/img/vocab-mob.jpg',
    mob_2x: '../src/img/vocab-mob-2x.jpg',
    tab_1x: '../src/img/vocab-tab.jpg',
    tab_2x: '../src/img/vocab-tab-2x.jpg',
    main: '../src/img/vocab-tab.jpg',
    description: 'VocabBuilder',
    }
];

function createProjectsSlideMarkup(mob_1x, mob_2x, tab_1x, tab_2x, main, description) {
  const markup = `
      <li class="swiper-slide projects-slide">
        <div class="projects-items">
          <div class="projects-container">
            <ul class="projects-tech">
              <li class="projects-tech-items">
                <p>#react</p>
              </li>
              <li class="projects-tech-items">
                <p>#js</p>
              </li>
              <li class="projects-tech-items">
                <p>#node js</p>
              </li>
              <li class="projects-tech-items">
                <p>#git</p>
              </li>
            </ul>
            <div class="projects-list-text">
              <p>Programming Across<br />Borders: Ideas,<br />Technologies, Innovations</p>
            </div>
            <a class="see-project"
              href="https://github.com/Tormoond/Team-project-JS-My-portfolio-">
              See project</a>
          </div>
          <div class="projects-picture">
            <picture class="projects-picture-item">
              <source
                srcset="
                ${tab_1x} 1x,
                ${tab_2x} 2x"
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ${mob_1x} 1x,
                ${mob_2x} 2x"
                media="(max-width: 767px)"
              />
              <img
                class="projects-img"
                src="${main}"
                alt="${description}"
                width="614"
                height="385"
              />
            </picture>
          </div>
        </div>
      </li>
    `;

  projectsList.insertAdjacentHTML('beforeend', markup);
}
projectImages.map(({ mob_1x, mob_2x, tab_1x, tab_2x, main,description }) => {
  createProjectsSlideMarkup(mob_1x, mob_2x, tab_1x, tab_2x, main, description);
});
