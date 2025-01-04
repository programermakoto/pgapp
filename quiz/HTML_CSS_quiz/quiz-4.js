
const questions = [
  { question: "インライン要素をブロック要素にするには?", choices: ["display", "padding", "color", "margin", "underline"], answer: "display" },
  { question: "クラス名をつけたい場合は何属性?", choices: ["id", "class", "type", "margin", "value"], answer: "class" },
  { question: "要素をずらしたい場合のプロパティは?", choices: ["absolute", "static", "relative", "fixed", "value"], answer: "relative" },
  { question: "要素を絶対値指定してずらしたい場合のプロパティは?", choices: ["absolute", "static", "relative", "fixed", "value"], answer: "absolute" },
  { question: "主にrelativeプロパティとセットで使われるプロパティは?", choices: ["absolute", "static", "relative", "fixed", "value"], answer: "absolute" },
  { question: "スクロールしてもその場に固定しておきたい時、何プロパティ?", choices: ["absolute", "static", "relative", "fixed", "value"], answer: "fixed" },
  { question: "後ろにある要素を一番前に配置したい時、何プロパティ?", choices: ["z-index", "static", "relative", "fixed", "value"], answer: "z-index" },
  { question: "あるimgの縦横比を保つには何プロパティ?", choices: ["z-index", "static", "relative", "fixed", "object-fit"], answer: "object-fit" },
  { question: "要素を少し透明にしたい時、何プロパティ?", choices: ["z-index", "static", "relative", "opacity", "object-fit"], answer: "opacity" },
  { question: "imgの下の余白を消したい時、何プロパティ?", choices: ["z-index", "static", "relative", "opacity", "vertical-align"], answer: "vertical-align" },
  { question: "高さが160pxの時テキストを中間に配置するline-heightの値は?", choices: ["40px", "60px", "auto", "80px", "160px"], answer: "160px" },
  { question: "100%から32px引いた幅にしたい、widthプロパティは何の値?", choices: ["calc(100% - 32px)", "100%", "auto", "32px", "width"], answer: "calc(100% - 32px)" },
  { question: "文章全体に設定された文字のサイズを基準にするwidthの値は?", choices: ["em", "calc", "rem", "pointer", "list-style"], answer: "rem" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-4.html">もう一度する</a>`;
}

displayQuestion(0);