const openBtn = document.querySelector(".open-btn");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");
const header = document.querySelector(".header");

openBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
  header.style.display = "none";
  body.style.overflow = "hidden";
  body.style.paddingRight = "17px";
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
  header.style.display = "block";
  body.style.overflow = "auto";
  body.style.paddingRight = "0";
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    sideBar.classList.remove("show-sidebar");
    body.style.overflow = "auto";
    body.style.paddingRight = "0";
    header.style.display = "block";
  }
});
