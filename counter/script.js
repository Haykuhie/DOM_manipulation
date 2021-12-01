const counter = document.querySelector("p");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

decreaseBtn.addEventListener("click", () => {
  if (counter.innerText <= 0) {
    decreaseBtn.style.cursor = "not-allowed";
    return;
  }
  counter.innerText -= 1;
});
increaseBtn.addEventListener("click", () => {
  if (+counter.innerText >= 0) decreaseBtn.style.cursor = "pointer";
  counter.innerText = +counter.innerText + 1;
});
resetBtn.addEventListener("click", () => {
  counter.innerText = 0;
});
