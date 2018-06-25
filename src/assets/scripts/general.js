const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".hero__nav");
// const socials = document.querySelector(".socials__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("hero__nav--active");
  // socials.classList.toggle("socials__list--active");
});
