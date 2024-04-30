const questions = [
  { question: "scriptタグの書き方で当てはまるものは?", choices: ["<script>",
  "</script>",
  "<script></script> ",
  "@mediaqueries",
  "queries"], answer: "@media()" },

  { question: "jsを書く際ファイル名の.の後は?", choices: [".css",
  ".html",
  ".c",
  ".js",
  ".java"], answer: ".js" },

  { question: "htmlでjsファイルを読み込むとき属性は?", choices: ["src",
  "ref",
  "href",
  ".js",
  ".java"], answer: ".js" },

  { question: "コンソールに結果を表示させたい", choices: ["console()",
  "include()",
  "scan()",
  "console.log()",
  "string"], answer: "console.log" },

  { question: "10の何乗としたい時の記号は?", choices: ["@",
  "e",
  "2",
  "*",
  "/"], answer: "e" },
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