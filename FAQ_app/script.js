const questions = document.querySelectorAll("li");
const answers = document.querySelectorAll(".answerItem");
const plusSigns = document.querySelectorAll(".forPlus");

questions.forEach(function (listItem) {
  listItem.addEventListener("click", (event) => {
    let liNode = event.target;
    while (liNode.nodeName !== "LI") {
      liNode = liNode.parentNode;
    }

    let plusSign = liNode.firstElementChild.lastElementChild;
    let answer = liNode.lastElementChild;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == answer) continue;
      answers[i].classList.remove("visible");
      plusSigns[i].innerText = "+";
    }

    answer.classList.toggle("visible");

    if (answer.classList.contains("visible")) {
      plusSign.innerText = "–";
    } else {
      plusSign.innerText = "+";
    }
  });
});
