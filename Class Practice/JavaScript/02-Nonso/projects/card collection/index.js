import { details } from "./collection.js";

const container = document.getElementById("main");

details.forEach((detail) => {
  container.innerHTML += `<article class="card">
  <img src="${detail.imgLink}" alt="${detail.title}">
  <h3>${detail.title}</h3>
  <div class="btn-container">
    <a href="" class="btn play-btn">Play</a>
    <a href="" class="btn download-btn">Download</a>
  </div>
</article>`;
});
