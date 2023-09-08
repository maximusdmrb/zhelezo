for (const service of [...document.querySelectorAll('[data-bs-toggle="modal"]')]) {
  service.addEventListener("click", function ({ target }) {
    const { service } = this.dataset;
    const { json } = this.dataset;
    const { name, description, src } = JSON.parse(json);
    console.log(name);
    switch (this.dataset.service) {
      case "trainer":
        const img = document.createElement("img");
        img.src = `./assets/trainers/${src}`;
        document.querySelector("#service-img").innerHTML = "";
        document.querySelector("#service-img").insertAdjacentElement("beforeend", img);

        document.querySelector("#service-description").innerHTML = description;
    }
    // bsOffcanvas.show();
  });
}
