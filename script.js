function openCourses() {
  window.location.href = "courses.html";
}

function openQuiz() {
  window.location.href = "quiz.html";
}

function openProgress() {
  window.location.href = "progress.html";
}

/* ---------------- QUIZ SYSTEM ---------------- */

let questions = [
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "Hot Mail",
      "How Text Make Language"
    ],
    answer: 0
  },

  {
    question: "CSS is used for?",
    options: [
      "Styling",
      "Database",
      "Server"
    ],
    answer: 0
  },

  {
    question: "JavaScript is?",
    options: [
      "Programming Language",
      "Painting Tool",
      "Browser"
    ],
    answer: 0
  }
];

let current = 0;
let score = 0;

function loadQuestion() {

  let questionElement = document.getElementById("question");

  if (!questionElement) return;

  let q = questions[current];

  questionElement.innerText = q.question;

  let optionsDiv = document.getElementById("options");

  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {

    optionsDiv.innerHTML += `
      <div>
        <input type="radio" name="option" value="${index}">
        ${opt}
      </div>
    `;

  });

}

function nextQuestion() {

  let selected =
    document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (
    parseInt(selected.value) ===
    questions[current].answer
  ) {
    score++;
  }

  current++;

  if (current < questions.length) {

    loadQuestion();

  } else {

    document.getElementById("question").innerText =
      "Quiz Finished 🎉";

    document.getElementById("options").innerHTML = "";

    document.getElementById("score").innerText =
      "Your Score: " +
      score +
      "/" +
      questions.length;

    localStorage.setItem("quizScore", score);
  }
}

loadQuestion();

/* ---------------- RESTART QUIZ ---------------- */

function restartQuiz() {

  current = 0;
  score = 0;

  document.getElementById("score").innerText = "";

  loadQuestion();

}
function openContact() {
  window.location.href = "contact.html";
}

/* ---------------- LOGIN SYSTEM ---------------- */

function login() {

  let username =
    document.getElementById("username")?.value;

  let password =
    document.getElementById("password")?.value;

  if (
    username === "admin" &&
    password === "1234"
  ) {

    window.location.href = "index.html";

  } else {

    let message =
      document.getElementById("message");

    if (message) {
      message.innerText =
        "Invalid Username or Password";
    }

  }

}
