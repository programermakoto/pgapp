const questions = [
  // 1
  {
    question: "クラスでデータ型を作りたい", 
    choices: [
      "class",
      "date",
      "prompt",
      "sell",
      "console"
    ], 
    answer: "class" // 正しいまま
  },
  // 2
  {
    question: "インスタンスを作る際のキーワードは?", 
    choices: [
      "null",
      "new",
      "Element",
      "String",
      "Content"
    ], 
    answer: "new" // 正しいまま
  },
  // 3
  {
    question: "クラス内での関数名は?", 
    choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "constructor"
    ], 
    answer: "constructor" // 正しいまま
  },
  // 4
  {
    question: "クラスのプロパティのキーワードは?", 
    choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "this",
      "constructor"
    ], 
    answer: "this" // 正しいまま
  },
  // 5
  {
    question: "クラスを継承させたい", 
    choices: [
      "extends",
      "getDate",
      "getMonth",
      "createElement",
      "toLocaleString"
    ], 
    answer: "extends" // 正しいまま
  },
  // 6
  {
    question: "親クラスのコンストラクタを使いたい", 
    choices: [
      "setTimeout",
      "setInterval",
      "super",
      "toLocaleString",
      "textContent"
    ], 
    answer: "super" // 正しいまま
  },
  // 7
  {
    question: "クラス全体で一つだけの特殊なプロパティ", 
    choices: [
      "setTimeout",
      "static",
      "clearTimeout",
      "toLocaleString",
      "textContent"
    ], 
    answer: "static" // 正しいまま
  },
  // 8
  {
    question: "staticをつけたものの先頭につけるもの", 
    choices: [
      "クラス名",
      "タグ",
      "static",
      "コンストラクタ",
      "インスタンス"
    ], 
    answer: "クラス名" // 正しいまま
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