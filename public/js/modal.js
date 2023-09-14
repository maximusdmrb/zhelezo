for (const service of [...document.querySelectorAll('[data-bs-toggle="modal"]')]) {
  service.addEventListener("click", function ({ target }) {
    const { json } = this.dataset;
    const { name, description, src } = JSON.parse(json);
    switch (this.dataset.service) {
      case "trainer":
        const img = document.createElement("img");
        img.src = `./assets/trainers/${src}`;
        document.querySelector("#service-img").innerHTML = "";
        document.querySelector("#service-img").insertAdjacentElement("beforeend", img);

        document.querySelector("#service-description").innerHTML = description;
        document.querySelector("#trainer-name").innerHTML = name;
    }
  });
}
const myModalEl = document.getElementById("modal");
myModalEl.addEventListener("show.bs.modal", () => {
  document.querySelector("html").style.overflowY = "hidden";
});
myModalEl.addEventListener("hide.bs.modal", () => {
  document.querySelector("html").style.overflowY = "auto";
});
const myModal = new bootstrap.Modal("#modal");
document.querySelector(".close-modal").addEventListener("click", () => {
  myModal.hide();
});
