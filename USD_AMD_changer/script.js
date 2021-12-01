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
  result.innerText = input.value * 480;
});

button.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    event.preventDefault();
    if (input.value <= 0) {
      form.reset();
      result.innerText = "";
      alert("Invalid Input!!!");
      return;
    }
    result.innerText = input.value * 480;
  }
});
