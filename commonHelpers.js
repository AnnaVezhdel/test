import{S as n}from"./assets/vendor-Bit1m2CU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="/test/assets/pet-mob-C1HkQvOk.jpg",m="/test/assets/pet-mob-2x-B5xWtdrT.jpg",a="/test/assets/pet-tab-CrhDqkQQ.jpg",b="/test/assets/pet-tab-2x-D-11kDrl.jpg",d="/test/assets/vocab-mob-CcDreXMM.jpg",u="/test/assets/vocab-mob-2x-BOoZoPUC.jpg",p="/test/assets/vocab-tab-Dsv7O7Av.jpg",j="/test/assets/vocab-tab-2x-CLu38__-.jpg";new n(".swiper-projects",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const g=[{mob_1x:"./src/img/book-mob.jpg",mob_2x:"../src/img/book-mob-2x.jpg",tab_1x:"./img/book-tab.jpg",tab_2x:"../src/img/book-tab-2x.jpg",main:"../src/img/book-tab.jpg",description:"ReadJourney"},{mob_1x:l,mob_2x:m,tab_1x:a,tab_2x:b,main:a,description:"PetLove"},{mob_1x:d,mob_2x:u,tab_1x:p,tab_2x:j,main:p,description:"VocabBuilder"}];new n(".swiper-projects",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const x=document.querySelector(".projects-list");function f(c,s,r,o,e,t){const i=`
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
                ${r} 1x,
                ${o} 2x"
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ${c} 1x,
                ${s} 2x"
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
    `;x.insertAdjacentHTML("beforeend",i)}g.map(({mob_1x:c,mob_2x:s,tab_1x:r,tab_2x:o,main:e,description:t})=>{f(c,s,r,o,e,t)});
//# sourceMappingURL=commonHelpers.js.map
