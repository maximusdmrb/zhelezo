import { prices } from "./config.js";

const unlimited = document.querySelector(".swiper-unlimited").querySelector(".swiper-wrapper");
const daytime = document.querySelector(".swiper-daytime").querySelector(".swiper-wrapper");
const childlike = document.querySelector(".swiper-childlike").querySelector(".swiper-wrapper");

const html = (price) => `
<div class="swiper-slide">
<div class="price-card ${price.status === "pro" ? "active" : ""} ${price.status === false ? "one" : ""} ${price.status === "discount" ? "discount" : ""}">
  <div>
    <h5>${price.name}</h5>
    <p>${price.comment}</p>
  </div>
  <h3>${price.price}</h3>
</div>
</div>`;

for (const price of prices.unlimited) {
  unlimited.insertAdjacentHTML("beforeend", html(price));
}
for (const price of prices.daytime) {
  daytime.insertAdjacentHTML("beforeend", html(price));
}
for (const price of prices.childlike) {
  childlike.insertAdjacentHTML("beforeend", html(price));
}
