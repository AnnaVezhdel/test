import{S as p}from"./assets/vendor-Bit1m2CU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new p(".swiper-projects",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const a=document.querySelector(".projects-list"),n=[{mob_1x:"./img/book-mob.jpg",mob_2x:"./img/book-mob-2x.jpg",tab_1x:"./img/book-tab.jpg",tab_2x:"./img/book-tab-2x.jpg",main:"./img/book-tab.jpg",description:"ReadJourney"},{mob_1x:"./img/pet-mob.jpg",mob_2x:"./img/pet-mob-2x.jpg",tab_1x:"./img/pet-tab.jpg",tab_2x:"./img/pet-tab-2x.jpg",main:"../img/pet-tab.jpg",description:"PetLove"},{mob_1x:"../src/img/vocab-mob.jpg",mob_2x:"../src/img/vocab-mob-2x.jpg",tab_1x:"../src/img/vocab-tab.jpg",tab_2x:"../src/img/vocab-tab-2x.jpg",main:"../src/img/vocab-tab.jpg",description:"VocabBuilder"}];function l(c,o,s,r,e,t){const i=`
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
                ${s} 1x,
                ${r} 2x"
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ${c} 1x,
                ${o} 2x"
                media="(max-width: 767px)"
              />
              <img
                class="projects-img"
                src="${e}"
                alt="${t}"
                width="614"
                height="385"
              />
            </picture>
          </div>
        </div>
      </li>
    `;a.insertAdjacentHTML("beforeend",i)}n.map(({mob_1x:c,mob_2x:o,tab_1x:s,tab_2x:r,main:e,description:t})=>{l(c,o,s,r,e,t)});
//# sourceMappingURL=commonHelpers.js.map
