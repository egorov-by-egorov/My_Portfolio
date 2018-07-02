const sidebar = document.querySelector(".sidebar-mobile");
const btn = document.querySelector(".sidebar-mobile__btn");
const heroSec = document.querySelector(".blog");

window.addEventListener("scroll", function() {
  const posTop = heroSec.getBoundingClientRect().top;
  const top = posTop.toFixed();
  if (top < 430) {
    btn.style.width = "70px";
  }
  if (top > 480 && sidebar.classList == "sidebar-mobile") {
    btn.style.width = "0px";
  }
});
btn.addEventListener("click", function() {
  btn.classList.toggle("sidebar-mobile__btn--active");
  sidebar.classList.toggle("sidebar-mobile--active");
});
