document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuList = document.querySelector(".menu-list");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    menuList.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    menuList.classList.remove("active");
    overlay.classList.remove("active");
  });
});
