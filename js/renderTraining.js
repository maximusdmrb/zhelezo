import { training } from "../config.js";

let i = 0,
  k = 0;
for (const trainingItem of training) {
  document.querySelector("#accordion").insertAdjacentHTML(
    "beforeend",
    `
    <div class="accordion-item ${!i ? "" : "collapsed"}" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        <h3 class="accordion-header" >
           ${trainingItem.workout}
        </h3>
        <div id="collapse${i}" class="collapse ${!i ? "show" : ""}" data-bs-parent="#accordion">
            <div class="accordion-body">
                <table width="100%">
                    ${trainingItem.items.map((item) => `<tr><td>${item.name}</td><td align="right">${item.price} р.</td></tr>`).join("")}
                </table>
            </div>
        </div>
    </div>`
  );
  i++;
}
