const questions = document.querySelectorAll("li");
const answers = document.querySelectorAll(".answerItem");

questions.forEach(function (listItem) {
  listItem.addEventListener("click", (event) => {
    let liNode = event.target;
    while (liNode.nodeName !== "LI") {
      liNode = liNode.parentNode;
    }

    let plusSign = liNode.firstElementChild.lastElementChild;
    let answer = liNode.lastElementChild;

    answer.classList.toggle("visible");
    if (plusSign.innerText == "+") {
      plusSign.innerText = "−";
    } else {
      plusSign.innerText = "+";
    }
  });
});
