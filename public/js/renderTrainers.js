import { trainers } from "./config.js";

const boxTrainers = document.querySelector(".trainers-list");

for (const trainer of trainers) {
  // Рендер модальных окон
  /*   boxTrainers.insertAdjacentHTML(
    "beforebegin",
    `<div class="modal fade modal-lg" id="modal${trainer.src.replace(".", "")}" tabindex="-1" aria-labelledby="modal${trainer.src.replace(".", "")}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title fs-5" id="modal${trainer.src.replace(".", "")}Label">${trainer.name}</h3>
              
            </div>
            <div class="modal-body">
            <img src="./assets/trainers/${trainer.src}" alt="" srcset="" />
             ${trainer.description} <input type="text" /></div>
          <div class="modal-footer">
          <a class="cbtn small">Записаться</a>
          </div>
        </div>
      </div>
    </div>`
  ); */

  //  Рендер карточек
  boxTrainers.insertAdjacentHTML(
    "beforeend",
    `<div><div class="trainers-list-item" data-service="trainer" data-json='${JSON.stringify(trainer)}' data-bs-toggle="modal" data-bs-target="#modal" >
    <img src="./assets/trainers/${trainer.src}" alt="" srcset="" />
    <h3>${trainer.name}</h3>
    <buttun class="cbtn small">Запись</buttun>
  </div></div>`
  );

  // Рендер карточек для мобилок
  document
    .querySelector(".swiper-trainers")
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide"><div class="trainers-list-item" data-service="trainer" data-json='${JSON.stringify(trainer)}' data-bs-toggle="modal" data-bs-target="#modal">
    <img src="./assets/trainers/${trainer.src}" alt="" srcset="" />
    <h3>${trainer.name}</h3>
    <button class="cbtn small" type="button">
      Запись
    </button>
  </div></div>`
    );
}
export const showTrainderCard = (name) => {
  console.log(trainers.find((trainer) => trainer.name == name));
};
