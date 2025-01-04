const questions = [
  // 1
  {
    question: "外部のデータを取得したい", 
    choices: [
      "class",
      "date",
      "prompt",
      "fetch",
      "console"
    ], 
    answer: "fetch" // 正しいまま
  },
  // 2
  {
    question: "非同期処理が終わるまで待ちたい", 
    choices: [
      "null",
      "new",
      "Element",
      "await",
      "Content"
    ], 
    answer: "await" // 正しいまま
  },
  // 3
  {
    question: "awaitを使う際一緒に使うものは?", 
    choices: [
      "async",
      "new",
      "Element",
      "await",
      "Content"
    ], 
    answer: "async" // 「aync」→「async」が正しい
  },
  // 4
  {
    question: "json形式では何で囲まないといけないか", 
    choices: [
      "”",
      "^",
      "<>",
      "**",
      "{}"
    ], 
    answer: "”" // 正しいですが、選択肢が不適切です。json形式はダブルクオーテーションで囲むので、選択肢を変更したほうが良いかもしれません。
  },
  // 5
  {
    question: "エラーが出そうなところを囲うブロック", 
    choices: [
      "try",
      "get",
      "Month",
      "Element",
      "toLocaleString"
    ], 
    answer: "try" // 正しいまま
  },
  // 6
  {
    question: "tryを使用した後に書くもの", 
    choices: [
      "setTimeout",
      "setInterval",
      "super",
      "toLocaleString",
      "catch"
    ], 
    answer: "catch" // 正しいまま
  },
  // 7
  {
    question: "fetchの後に処理がうまくいった場合の処理を書きたい", 
    choices: [
      "then",
      "static",
      "clearTimeout",
      "toLocaleString",
      "textContent"
    ], 
    answer: "then" // 正しいまま
  },
  // 8
  {
    question: "jsonを変換したい", 
    choices: [
      ".son",
      ".users",
      ".json",
      ".get",
      ".add"
    ], 
    answer: ".json" // 正しいまま
  },
  // 9
  {
    question: "例外の数値があったときの為のセッター", 
    choices: [
      "get",
      "set",
      "main",
      "delete",
      "Milliseconds"
    ], 
    answer: "set" // 正しいまま
  },
  // 10
  {
    question: "値を取得するゲッター", 
    choices: [
      "get",
      "set",
      "main",
      "delete",
      "Milliseconds"
    ], 
    answer: "get" // 正しいまま
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