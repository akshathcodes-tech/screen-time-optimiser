const questions = document.querySelectorAll(".question");
const nextButtons = document.querySelectorAll(".next");
const previousButtons = document.querySelectorAll(".previous");
const progressBar = document.querySelector(".progress-bar");
const slider = document.querySelector(".screen-time");
const valueDisplay = document.querySelector("#screen-time-value");

let currentQuestion = 0;

function showQuestion(index) {
  questions.forEach(function (question) {
    question.classList.remove("active");
  });
  questions[index].classList.add("active");
  const progress = ((index + 1) / questions.length) * 100;
  progressBar.style.width = progress + "%";
}

nextButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    }
  });
});

previousButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
    }
  });
});

slider.addEventListener("input", function () {
  const sliderPercentage =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(
  to right, var(--text) 0%, 
  var(--text) ${sliderPercentage}%,  
  var(--background)  ${sliderPercentage}%, 
  var(--background) 100%)`;
  valueDisplay.textContent = slider.value + " hours";
});
