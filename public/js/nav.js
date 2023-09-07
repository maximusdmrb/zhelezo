document.querySelector(".nav-toggle-btn").addEventListener("click", toggleNav);
document.body.addEventListener("click", closeNav);

function toggleNav(event) {
  event.target.nextElementSibling.classList.toggle("hide");
}
function closeNav(event) {
  if (document.querySelector("nav>ul").classList.contains("hide")) return;
  if (event.target === document.querySelector(".nav-toggle-btn")) return;
  this.querySelector("nav>ul").classList.add("hide");
}
