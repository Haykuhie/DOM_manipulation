import {changeRate} from './constants/changeRate.js'

const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("p");
const form = document.querySelector("form");

button.addEventListener("click", () => {
  event.preventDefault();
  if (input.value <= 0) {
    form.reset();
    result.innerText = "";
    alert("Invalid Input!!!");
    return;
  }
  let number =  input.value * changeRate
  result.innerText = number.toLocaleString();
});

