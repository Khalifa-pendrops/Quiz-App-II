import { questions } from "./questions.js";

const topMainContainer = document.getElementById("topMainContainer");
const questionText = document.getElementById("questions");
const resultsContainer = document.getElementById("scoreContainer");
const nextBtn = document.getElementById("nextButton");
const prevBtn = document.getElementById("prevButton");
const progressBtn = document.getElementById("progress");
const resetBtn = document.getElementById("resetButton");
const answerBtnContainer = document.getElementById("answerContainer");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  resultsContainer.classList.add("hide");
  topMainContainer.classList.remove("hide");
  questionText.classList.remove("hide");
  displayQuestions();
  updateProgress();
};
const displayQuestions = () => {
  resetQuiz();
  const currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const answerElement = document.createElement("button");
    answerElement.innerText = answer.text;
    answerElement.classList.add("btn");
    answerElement.addEventListener("click", () => {
      answerElement.classList.add("active");
      selectAnswer(answer.right);
    });
    answerBtnContainer.appendChild(answerElement);
  });
};

const selectAnswer = (isRight) => {
  if (isRight) {
    score++;
    console.log("Correct!");
  }
  nextBtn.classList.remove("hide");
};

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    updateProgress();
    displayQuestions();
  } else {
    displayResult();
  }
});

prevBtn.addEventListener("click", () => {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    updateProgress();
    displayQuestions();
  }
});

const updateProgress = () => {
  progressBtn.innerText = `Progress:  ${currentQuestionIndex + 1} out of ${
    questions.length
  } questions`;
};

const resetQuiz = () => {
  //   nextBtn.classList.add("hide");
  answerBtnContainer.innerHTML = "";
};

const displayResult = () => {
  setTimeout(() => {
    alert(
      (resultsContainer.innerText = `Your final score in the Quiz is: ${score} / ${questions.length}`)
    );
  }, 2000);
  //   updateProgress();
};

resetBtn.addEventListener("click", () => {
  topMainContainer.classList.remove("hide");
  resultsContainer.classList.add("hide");
  progressBtn.innerText = "";
  startQuiz();
});

startQuiz();
