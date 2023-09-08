const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasExample");
const offcanvasExample = document.querySelector("#offcanvasExample");
offcanvasExample.addEventListener("show.bs.offcanvas", (event) => {
  console.log(event.target);
});

for (const service of [...document.querySelectorAll('[data-bs-toggle="offcanvas"]')]) {
  service.addEventListener("click", function ({ target }) {
    const { service } = this.dataset;
    const { json } = this.dataset;
    const { name, description, src } = JSON.parse(json);
    console.log(json);
    switch (this.dataset.service) {
      case "trainer":
        document.querySelector("#offcanvasExampleLabel").innerHTML = name;
        document.querySelector(".offcanvas-body").innerHTML = `<img src="./assets/trainers/${src}" alt="" srcset="" />` + description;
        break;
    }
    bsOffcanvas.show();
  });
}

function changeModalForDevice() {
  if (this.screen.width < 450) {
    this.document.querySelector("#offcanvasExample").classList.remove("offcanvas-end");
    this.document.querySelector("#offcanvasExample").classList.add("offcanvas-bottom");
  } else {
    this.document.querySelector("#offcanvasExample").classList.add("offcanvas-end");
    this.document.querySelector("#offcanvasExample").classList.remove("offcanvas-bottom");
  }
}
changeModalForDevice.call(window);
window.addEventListener("resize", changeModalForDevice);
