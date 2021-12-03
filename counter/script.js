import { setLocalStorageData } from "./helpers/setLocalStorageData.js";
import { getLocalStorageData } from "./helpers/getLocalStorageData.js";

const counter = document.querySelector("p");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

let localStorageData = getLocalStorageData("counter");
counter.innerText = localStorageData;
if (localStorageData > 0) decreaseBtn.style.cursor = "pointer";

decreaseBtn.addEventListener("click", () => {
  let localStorageData = getLocalStorageData("counter");
  if (+localStorageData <= 0) {
    decreaseBtn.style.cursor = "not-allowed";
    return;
  }
  counter.innerText = +counter.innerText - 1;
  localStorageData -= 1;
  setLocalStorageData("counter", localStorageData);
});

increaseBtn.addEventListener("click", () => {
  let localStorageData = getLocalStorageData("counter");
  if (localStorageData >= 0) decreaseBtn.style.cursor = "pointer";
  localStorageData += 1;
  counter.innerText = +counter.innerText + 1;
  setLocalStorageData("counter", localStorageData);
});

resetBtn.addEventListener("click", () => {
  counter.innerText = 0;
  setLocalStorageData("counter", 0);
});
