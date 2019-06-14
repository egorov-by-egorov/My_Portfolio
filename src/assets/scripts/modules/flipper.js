// flipper

const btn = document.querySelector(".auth__btn");
const frontSide = document.querySelector(".flipper__user-card");
const backSide = document.querySelector(".flipper__authorization");
const goMain = document.querySelector(".flipper__link--back-btn");

btn.addEventListener("click", e => {
  e.preventDefault();
  frontSide.style.transform = "rotateY(180deg)";
  backSide.style.transform = "rotateY(360deg)";
  btn.style.opacity = "0";
});

goMain.addEventListener("click", e => {
  e.preventDefault();
  frontSide.style.transform = "rotateY(0deg)";
  backSide.style.transform = "rotateY(180deg)";
  btn.style.opacity = "1";
});
