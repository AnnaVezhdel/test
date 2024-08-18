import{S as l}from"./assets/vendor-Bit1m2CU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const b="/test/assets/book-mob-BdhA58_h.jpg",d="/test/assets/book-mob-2x-j9KOIk62.jpg",a="/test/assets/book-tab--kIxrC0Y.jpg",m="/test/assets/book-tab-2x-D_63PazX.jpg",u="/test/assets/pet-mob-C1HkQvOk.jpg",j="/test/assets/pet-mob-2x-B5xWtdrT.jpg",n="/test/assets/pet-tab-CrhDqkQQ.jpg",x="/test/assets/pet-tab-2x-D-11kDrl.jpg",_="/test/assets/vocab-mob-CcDreXMM.jpg",f="/test/assets/vocab-mob-2x-BOoZoPUC.jpg",p="/test/assets/vocab-tab-Dsv7O7Av.jpg",g="/test/assets/vocab-tab-2x-CLu38__-.jpg";new l(".swiper-projects",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const v=[{mob_1x:b,mob_2x:d,tab_1x:a,tab_2x:m,main:a,description:"ReadJourney"},{mob_1x:u,mob_2x:j,tab_1x:n,tab_2x:x,main:n,description:"PetLove"},{mob_1x:_,mob_2x:f,tab_1x:p,tab_2x:g,main:p,description:"VocabBuilder"}];new l(".swiper-projects",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const h=document.querySelector(".projects-list");function y(i,s,r,o,e,t){const c=`
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
                ${i} 1x,
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
    `;h.insertAdjacentHTML("beforeend",c)}v.map(({mob_1x:i,mob_2x:s,tab_1x:r,tab_2x:o,main:e,description:t})=>{y(i,s,r,o,e,t)});
//# sourceMappingURL=commonHelpers.js.map
