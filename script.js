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
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      answersEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quiz[currentQuestion].answer;
    if (selected === correct) {
      score++;
      alert("✅ Correct!");
    } else {
      alert(`❌ Wrong! Correct answer was: ${correct}`);
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionEl.textContent = "";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerHTML = `🎉 Your score: <strong>${score}/${quiz.length}</strong>`;
  }
  
  nextBtn.onclick = () => {
    showQuestion();
    nextBtn.style.display = "none";
  };
  
  showQuestion();
  