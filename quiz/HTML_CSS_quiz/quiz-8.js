const questions = [
  { question: "ホバーした時border-radiusで丸めたい、プロパティは?", choices: ["trans", "transition-property", "radius", "border", "trans-property"], answer: "transition-property" },

  { question: "ホバーした時要素を丸めたい、transition-propertyの値は?", choices: ["trans", "transition-property", "border-radius", "border", "trans-property"], answer: "border-radius" },

  { question: "要素を丸め1秒かけて変化させたい、プロパティは?", choices: ["trans", "transition-property", "border-radius", "border", "transition-duration"], answer: "transition-duration" },

  { question: "要素を丸め1秒かけて変化させたい、transition-durationの値は?", choices: ["trans", "1s", "border-radius", "border", "transition-duration"], answer: "1s" },

  { question: ":hoverの中にtransitionを書くとどうなる?", choices: ["カーソルを外しても動き続ける", "動きは何も変わらない", "カーソルを外した瞬間動きが終了する", "カーソルを外したら1秒かけて元に戻る", "カーソルを外したら元に戻らない"], answer: "カーソルを外した瞬間動きが終了する" },

  { question: "要素を右側に動きをつけて移動させたい、プロパティは?", choices: ["transition", "transform", "trans", "form", "sition"], answer: "transform" },

  { question: "要素を右側に動きをつけて移動させたい、transformの値は?", choices: ["transition", "transform", "trans", "translate", "sition"], answer: "translate" },

  { question: "要素を右側に20px動きをつけ移動させたいtranslateのX値は?", choices: ["20px", "-20px", "-200px", "200px", "10px"], answer: "20px" },

  { question: "要素を下側に100px動きをつけ移動させたい、translateのY値は?", choices: ["100px", "-100px", "-200px", "200px", "-10px"], answer: "100px" },

  { question: "要素を動きをつけ回転させたい、transformの値は?", choices: ["transition", "transform", "trans", "translate", "rotate"], answer: "rotate" },

  { question: "要素を動きをつけ45度回転させたい、rotateの値は?", choices: ["45deg", "45", "45°", "45度", "45°C"], answer: "45deg" },

  { question: "要素を動きをつけ横幅を2倍にさせたい、transformの値は?", choices: ["rotate", "translate", "trans", "scale", "form"], answer: "scale" },

  { question: "要素を動きをつけ横幅を2倍にさせたい、scaleの値は?", choices: ["rotate(2)", "scale(2)", "transX(2)", "scaleY(2)", "form(2)"], answer: "scale(2)" },

  { question: "要素を動きをつけ縦幅を0.5倍にさせたい、scaleの値は?", choices: ["rotate(.5)", "scaleX(.5)", "transY(.5)", "scaleY(.5)", "form(.5)"], answer: "scaleY(.5)" },

  { question: "要素を動きをつけ幅を5倍にさせたい、scaleの値は?", choices: ["rotate(5)", "scaleX(5)", "scale(5)", "scaleY(5)", "form(5)"], answer: "scale(5)" },

  { question: "要素を動きをつけるが起点を左上にしたい、プロパティは?", choices: ["transform", "translate", "trans", "transform-origin", "form"], answer: "transform-origin" },

  { question: "起点を左上にするが、transform-originの値は?", choices: ["top", "top left", "top light", "bottom", "bottom light"], answer: "top left" },

  { question: "要素を動きをつけ1秒後に移動させたい、プロパティは?", choices: ["transform", "transform-delay", "transition", "transition-delay", "delay"], answer: "transition-delay" },

  { question: "要素を動きをつけ1秒後に移動させたい、transition-delayの値は?", choices: ["1s", "10000ms", ".5s", "2s", "10s"], answer: "1s" },

  { question: "要素に動きをつけて既定値で移動させたい、プロパティは?", choices: ["transition-timing", "transition-function", "transition", "timing-function", "transition-timing-function"], answer: "transition-timing-function" },

  { question: "既定値で移動させるには、transition-timing-functionの値は?", choices: ["ease-out", "ease", "ease-in-out", "linear", "transition"], answer: "ease" },

  { question: "徐々に減速させたい時transition-timing-functionの値は?", choices: ["ease-out", "ease", "ease-in-out", "linear", "transition"], answer: "ease-out" },

  { question: "加速して減速させたい時transition-timing-functionの値は?", choices: ["ease-out", "ease", "ease-in-out", "linear", "transition"], answer: "ease-in-out" },

  { question: "等速で移動させたい時transition-timing-functionの値は?", choices: ["ease-out", "ease", "ease-in-out", "linear", "transition"], answer: "linear" },

  { question: "ある要素を移動させたものをループさせたい、プロパティは?", choices: ["transform", "animation", "ease-in-out", "trans", "transition"], answer: "animation" },

  { question: "再生回数を無限にさせたい、animation-iteration-countの値は?", choices: ["transform", "animation", "infinite", "trans", "transition"], answer: "infinite" },

  { question: "アニメーションのキーとなるフレームを定義させたい", choices: ["@media", "animation", "infinite", "trans", "@keyframes"], answer: "@keyframes" },

  { question: "合計4秒間動作する、キーフレームで1秒ごとに指定したい", choices: ["25%", "50%", "75%", "100%"], answer: "25%" },

  { question: "合計4秒間動作する、キーフレームで2秒ごとに指定したい", choices: ["25%", "50%", "75%", "100%"], answer: "50%" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-8.html">もう一度する</a>`;
}

displayQuestion(0);