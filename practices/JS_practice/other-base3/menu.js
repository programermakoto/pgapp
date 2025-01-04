const menuToggle = document.querySelector(".toggle");
const show = document.querySelector(".show");

menuToggle.addEventListener("click", function () {
  /* activeにする */
  menuToggle.classList.toggle("active");
  show.classList.toggle("active");
});