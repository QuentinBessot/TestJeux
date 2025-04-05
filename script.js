const quiz = [
  {
    question: "What is the synonym of 'happy'?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    answer: "Joyful"
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Beautiful", "Apple", "Quickly"],
    answer: "Apple"
  },
  {
    question: "What is the past tense of 'go'?",
    options: ["Goed", "Gone", "Went", "Goes"],
    answer: "Went"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  answered = false;
  nextBtn.style.display = "none";
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(button, selected) {
  if (answered) return;
  answered = true;

  const correct = quiz[currentQuestion].answer;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.border = "3px solid #4caf50"; // Vert pour la bonne réponse
    } else if (btn.textContent === selected) {
      btn.style.border = "3px solid #f44336"; // Rouge pour la mauvaise
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

function showScore() {
  questionEl.textContent = "Game Over!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerHTML = `🎉 Your score: <strong>${score}/${quiz.length}</strong>`;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showScore();
  }
};

showQuestion();
