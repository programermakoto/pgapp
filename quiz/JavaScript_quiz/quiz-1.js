const questions = [
  // 1
  {
    question: "HTML に JavaScript を読み込むためのタグは?", 
    choices: ["stylesheet", "css", "script", "string", "strict"], 
    answer: "script"
  },
  // 2
  {
    question: "コンソールに処理を表示するメソッドは?", 
    choices: ["string", "prompt", "printf", "scanf", "console.log"], 
    answer: "console.log"
  },
  // 3
  {
    question: "余りを計算するための演算子は?", 
    choices: ["+", "*", "%", "/", "-"], 
    answer: "%"
  },
  // 4
  {
    question: "定数を定義するキーワードは?", 
    choices: ["var", "let", "const", "define", "static"], 
    answer: "const"
  },
  // 5
  {
    question: "変数を定義するキーワードは?", 
    choices: ["var", "let", "const", "define", "static"], 
    answer: "let"
  },
  // 6
  {
    question: "条件分岐を記述するキーワードは?", 
    choices: ["if", "for", "switch", "while", "do-while"], 
    answer: "if"
  },
  // 7
  {
    question: "繰り返し処理を記述するキーワードは?", 
    choices: ["if", "for", "switch", "while", "do-while"], 
    answer: "for"
  },
  // 8
  {
    question: "否定を意味する演算子は?", 
    choices: ["&&", "||", "!=", "==", "!"], 
    answer: "!="
  },
  // 9
  {
    question: "配列の要素数を取得するプロパティは?", 
    choices: ["size", "length", "count", "items", "index"], 
    answer: "length"
  },
  // 10
  {
    question: "関数を定義するためのキーワードは?", 
    choices: ["function", "func", "method", "def", "declare"], 
    answer: "function"
  }
];

let currentQuestionIndex = 0;
let correctCount = 0;

function displayQuestion(questionIndex) {
  const questionObj = questions[questionIndex];
  const questionElement = document.getElementById('question');
  questionElement.textContent = questionObj.question;

  const choicesElement = document.getElementById('choices');
  choicesElement.innerHTML = '';

  questionObj.choices.forEach((choice, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => checkAnswer(choice, questionObj.answer);
      li.appendChild(button);
      choicesElement.appendChild(li);
  });
}

function checkAnswer(selected, correct) {
  const feedbackElement = document.getElementById('feedback');
  if (selected === correct) {
      feedbackElement.textContent = "正解です!!!!!!!!　おめでとうございます！";
      correctCount++;
  } else {
      feedbackElement.textContent = `不正解! 答えは ${correct} です。`;
  }

  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
  } else {
      showResult();
      return;
  }

  setTimeout(() => {
      feedbackElement.textContent = '';
      displayQuestion(currentQuestionIndex);
  }, 2000);
}

function nextQuestion() {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = '';

  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
  } else {
      showResult();
  }
}

function showResult() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-1.html">もう一度する</a>`;
}

displayQuestion(0);