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

const projectsList = document.querySelector('.projects-list');

const projectImages = [
  {
    mob_1x: 'book-mob.jpg',
    mob_2x: 'book-mob-2x.jpg',
    tab_1x: 'book-tab.jpg',
    tab_2x: 'book-tab-2x.jpg',
    main: 'book-tab.jpg',
    description: 'ReadJourney',
  },
  {
    mob_1x: 'pet-mob.jpg',
    mob_2x: 'pet-mob-2x.jpg',
    tab_1x: 'pet-tab.jpg',
    tab_2x: 'pet-tab-2x.jpg',
    main: 'pet-tab.jpg',
    description: 'PetLove',
    },
  {
    mob_1x: 'vocab-mob.jpg',
    mob_2x: 'vocab-mob-2x.jpg',
    tab_1x: 'vocab-tab.jpg',
    tab_2x: 'vocab-tab-2x.jpg',
    main: 'vocab-tab.jpg',
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
                ../src/img/${tab_1x} 1x,
                ../src/img/${tab_2x} 2x"
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ../src/img/${mob_1x} 1x,
                ../src/img/${mob_2x} 2x"
                media="(max-width: 767px)"
              />
              <img
                class="projects-img"
                src="../src/img/${main}"
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
