import { prices } from "../config.js";

const unlimited = document.querySelector(".prices-unlimited");
const daytime = document.querySelector(".prices-daytime");
const childlike = document.querySelector(".prices-childlike");

const html = (price) => `<div class="owl-item">
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
