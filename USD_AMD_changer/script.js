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
  let number =  input.value * 486.28
  result.innerText = number.toLocaleString();
});

