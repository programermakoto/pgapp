const questions = [
  { question: "要素を横並びにしたい、何プロパティを使用すればいいですか?", choices: ["display",
  "background",
  "width",
  "height",
  "border"], answer: "display" },

  { question: "要素を横並びにしたい、displayプロパティの値は?", choices: ["display",
  "background",
  "width",
  "flex",
  "border"], answer: "flex" },

  { question: "flex-box同士を横並びにしたい、displayプロパティの値は?", choices: ["display",
  "inline-flex",
  "width",
  "flex",
  "border"], answer: "inline-flex" },

  { question: "flex-boxの主軸の方向を変更するプロパティは?", choices: ["display",
  "inline-flex",
  "width",
  "flex",
  "flex-direction"], answer: "flex-direction" },

  { question: "flex-boxの主軸を右から左に変更するにはflex-directionの値は?", choices: ["column",
  "column-reverse",
  "width",
  "row-reverse",
  "flex-direction"], answer: "row-reverse" },

  { question: "flex-boxの主軸を上から下に変更するにはflex-directionの値は?", choices: ["column",
  "column-reverse",
  "width",
  "row-reverse",
  "flex-direction"], answer: "column" },

  { question: "flex-boxの主軸を下から上に変更するにはflex-directionの値は?", choices: ["column",
  "column-reverse",
  "width",
  "row-reverse",
  "flex-direction"], answer: "column-reverse" },

  { question: "flex-boxの主軸の開始地点に要素を配置したい、プロパティは?", choices: ["width",
  "height",
  "max-width",
  "justify-content",
  "flex-direction"], answer: "justify-content" },

  { question: "flex-boxの主軸の開始地点に配置したい、justify-contentの値は?", choices: ["space-between",
  "flex-end",
  "center",
  "justify-content",
  "flex-start"], answer: "flex-start" },

  { question: "flex-boxの主軸の中央に配置したい、justify-contentの値は?", choices: ["space-between",
  "flex-end",
  "center",
  "justify-content",
  "flex-start"], answer: "center" },

  { question: "flex-boxの主軸の終了地点に配置したい、justify-contentの値は?", choices: ["space-between",
  "flex-end",
  "center",
  "justify-content",
  "flex-start"], answer: "flex-end" },

  { question: "flex-boxの要素間に隙間を配置したい、justify-contentの値は?", choices: ["space-between",
  "flex-end",
  "center",
  "justify-content",
  "flex-start"], answer: "space-between" },

  { question: "flex-boxの縦側の開始地点に要素を配置したい、プロパティは?", choices: ["space-between",
  "align-items",
  "center",
  "justify-content",
  "flex-start"], answer: "align-items" },

  { question: "flex-boxの縦側の開始地点に配置したい、align-itemsの値は?", choices: ["space-between",
  "align-items",
  "center",
  "justify-content",
  "flex-start"], answer: "flex-start" },

  { question: "flex-boxの縦側の終了地点に配置したい、align-itemsの値は?", choices: ["space-between",
  "align-items",
  "center",
  "flex-end",
  "flex-start"], answer: "flex-end" },

  { question: "flex-boxの縦側の中央に配置したい、align-itemsの値は?", choices: ["space-between",
  "align-items",
  "center",
  "flex-end",
  "flex-start"], answer: "center" },

  { question: "flex-boxの要素を折り返したい、プロパティは?", choices: ["flex-wrap",
  "align-items",
  "center",
  "flex-end",
  "wrap"], answer: "flex-wrap" },

  { question: "flex-box要素の一つだけを下にずらしたい、プロパティは?", choices: ["flex-wrap",
  "align-self",
  "center",
  "flex-end",
  "wrap"], answer: "lign-self" },

  { question: "flex-box要素の一つだけを中央にずらしたい、lign-selfの値は?", choices: ["flex-wrap",
  "align-self",
  "center",
  "flex-end",
  "wrap"], answer: "center" },

  { question: "flex-boxの要素を一つだけ右に寄せたい、margin-leftの値は?", choices: ["flex-wrap",
  "align-self",
  "center",
  "auto",
  "wrap"], answer: "auto" },

  { question: "flex-box要素の順番を変えたい、プロパティは?", choices: ["order",
  "align-self",
  "center",
  "auto",
  "wrap"], answer: "order" },

  { question: "flex-box要素に余白を1:2:3の比率で割り振りたい", choices: ["order",
  "flex",
  "center",
  "auto",
  "wrap"], answer: "flex" },

  { question: "余白を1:2:3の比率で割り振りたい、flexプロパティの値は?", choices: ["auto",
  "flex",
  "center",
  "1には1,2には2,3には3",
  "1には2,2には3,3には1"], answer: "1には1,2には2,3には3" },

  { question: "bodyの高さを100%にしたい、どこの高さを100%にすればいい?", choices: ["body",
  "要素",
  "html",
  "body",
  "元から100%"], answer: "body" },

  { question: "flex-itemをwidthのように指定したい、プロパティは?", choices: ["body",
  "flex",
  "html",
  "htmlとbody",
  "flex-basis"], answer: "flex-basis" },

  { question: "flex-itemが複数行で上下の余白を埋めたい、プロパティは?", choices: ["flex-content",
  "flex",
  "html",
  "htmlとbody",
  "flex-basis"], answer: "flex-content" },

  { question: "flex-itemが複数行で上下の余白を埋めたい、flex-contentの値は?", choices: ["flex-content",
  "flex",
  "stretch",
  "htmlとbody",
  "flex-basis"], answer: "stretch" },

  { question: "flex-itemが複数行で上揃えに配置したい、flex-contentの値は?", choices: ["space-around",
  "flex",
  "flex-start",
  "htmlとbody",
  "flex-end"], answer: "flex-start" },

  { question: "flex-itemが複数行で下揃えに配置したい、flex-contentの値は?", choices: ["space-around",
  "flex",
  "flex-start",
  "htmlとbody",
  "flex-end"], answer: "flex-end" },

  { question: "flex-itemが複数行で均等に配置したい、flex-contentの値は?", choices: ["space-around",
  "flex",
  "flex-start",
  "htmlとbody",
  "flex-end"], answer: "space-around" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-6.html">もう一度する</a>`;
}

displayQuestion(0);