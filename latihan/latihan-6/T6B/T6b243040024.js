const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const close = document.querySelector(".close");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

close.addEventListener("click", function () {
  nav.classList.remove("slide");
});
