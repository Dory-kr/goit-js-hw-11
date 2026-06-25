import{a as f,S as m,i as o}from"./assets/vendor-CucEYOFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="56445035-b18e3991649a74824eb44e6b3",g="https://pixabay.com/api/";async function y(r){return(await f.get(g,{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const s=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${a}" alt="${e}" />
          </a>

          <div class="image-info">
            <p class="info-item">
              <span class="info-title">Likes</span>
              <span class="info-value">${t}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Views</span>
              <span class="info-value">${i}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Comments</span>
              <span class="info-value">${p}</span>
            </p>
            <p class="info-item">
              <span class="info-title">Downloads</span>
              <span class="info-value">${u}</span>
            </p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}function b(){l.innerHTML=""}function v(){c.classList.add("is-visible")}function S(){c.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",q);async function q(r){r.preventDefault();const s=r.currentTarget.elements["search-text"].value.trim();if(s===""){o.warning({message:"Please enter a search query",position:"topRight"});return}b(),v();try{const a=await y(s);if(a.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(a.hits)}catch{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S(),r.currentTarget.reset()}}
//# sourceMappingURL=index.js.map
