import { prices } from "../config.js";

const pricesCarousel = document.querySelector(".prices-carousel");

for (const price of prices) {
  pricesCarousel.insertAdjacentHTML(
    "beforeend",
    `<div class="owl-item">
  <div class="price-card ${price.status ? "active" : ""}">
    <div>
      <h5>${price.name}</h5>
      <p>${price.comment}</p>
    </div>
    <h3>${price.price}</h3>
  </div>
</div>`
  );
}
