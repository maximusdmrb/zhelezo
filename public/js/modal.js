const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasExample", {
  scroll: false,
});
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
        document.querySelector(".offcanvas").style.backgroundImage = `url("./assets/trainers/${src}")`;
        document.querySelector(".offcanvas-body").innerHTML = `
        <div class="row">
        <div class="col-md-12 description">${description}</div>
        </div>
        `;
        break;
      // <div class="col-md-6"><img src="./assets/trainers/${src}" alt="" srcset="" /></div>
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
