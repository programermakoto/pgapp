const questions = [
  { question: "600px以上になった時背景色を変えたい場合、書き始めは?", choices: ["media()",
  "@media()",
  "mediaqueries",
  "@mediaqueries",
  "queries"], answer: "@media()" },

  { question: "最低でも600px以上という条件は、何を書けばいいですか?", choices: ["width: 600px;",
  "max-width: 600px;",
  "min-width: 600px;",
  "height: 600px;",
  "600px"], answer: "min-width: 600px;" },

  { question: "A(min-width: 600px;)B(min-width: 800px)指定の時、620pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "A" },

  { question: "A(min-width: 600px;)B(min-width: 800px)指定の時、800pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "B" },

  { question: "A(min-width: 600px;)B(min-width: 800px)指定の時、799pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "A" },

  { question: "画面幅が小さい方から書く方法はなんと呼ばれている?", choices: ["デスクトップファースト",
  "ファースト",
  "モバイルファースト",
  "デスクトップ",
  "モバイル"], answer: "モバイルファースト" },

  { question: "A(max-width: 800px;)B(max-width: 600px)指定の時、801pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "どちらでもない" },

  { question: "A(max-width: 800px;)B(max-width: 600px)指定の時、800pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "A" },

  { question: "A(max-width: 800px;)B(max-width: 600px)指定の時、601pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "A" },

  { question: "A(max-width: 800px;)B(max-width: 600px)指定の時、600pxなら?", choices: ["A",
  "B",
  "どちらでもない",
  "*",
  "*"], answer: "B" },

  { question: "画面幅が大きい方から書く方法はなんと呼ばれている?", choices: ["デスクトップファースト",
  "ファースト",
  "モバイルファースト",
  "デスクトップ",
  "モバイル"], answer: "デスクトップファースト" },

  { question: "**px以上になったら消したい要素がある時、プロパティは?", choices: ["display",
  "width",
  "height",
  "margin",
  "padding"], answer: "display" },

  { question: "**px以上になったら消したい要素がある時、displayの値は?", choices: ["display",
  "width",
  "block",
  "none",
  "padding"], answer: "none" },

  { question: "消したblock要素を元に戻したい、displayの値は?", choices: ["display",
  "width",
  "block",
  "none",
  "padding"], answer: "block" },

  { question: "flex-itemを3列にし、隙間を8pxずつ開けたい、calcの値は?", choices: ["(100% + 8px) / 3",
  "(100% -8px) / 3",
  "(100% + 16px) / 3",
  "(100% - 16px) / 3",
  "(100% / 3)"], answer: "(100% - 16px) / 3" },

  
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-7.html">もう一度する</a>`;
}

displayQuestion(0);