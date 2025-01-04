const questions = [
  // 1
  {
    question: "リポジトリを作るコマンド", choices: [
      "pwd",
      "git init",
      "git add",
      "git commit",
      "git log"
    ], answer: "git init"
  },
  // 2
  {
    question: "ステージングエリアにファイルを移したい", choices: [
      "pwd",
      "git init",
      "git add",
      "git commit",
      "git log"
    ], answer: "git add"
  },
  // 3
  {
    question: "リポジトリにファイルを移したい", choices: [
      "pwd",
      "git init",
      "git add",
      "git commit",
      "git log"
    ], answer: "git commit"
  },
  // 4
  {
    question: "コミット一覧を見たい", choices: [
      "pwd",
      "git init",
      "git add",
      "git commit",
      "git log"
    ], answer: "git log"
  },
  // 5
  {
    question: "コミットでメッセージを追加したい", choices: [
      "-a",
      "-m",
      "-la",
      "-l",
      "m"
    ], answer: "-m"
  },
  // 6
  {
    question: "現在の状況を確認したい", choices: [
      "git status",
      "git init",
      "git add",
      "git commit",
      "git log"
    ], answer: "git status"
  },
  // 7
  {
    question: "ステージングエリアに上げる前の変更を確認したい", choices: [
      "git status",
      "git init",
      "git diff",
      "git commit",
      "git log"
    ], answer: "git diff"
  },
  // 8
  {
    question: "過去に追加したところまで戻りたい", choices: [
      "git status",
      "git init",
      "git diff",
      "git checkout",
      "git log"
    ], answer: "git checkout"
  },
  // 9
  {
    question: "過去から現在のファイルに戻りたい", choices: [
      "git switch",
      "git init",
      "git diff",
      "git checkout",
      "git log"
    ], answer: "git switch"
  },
  // 10
  {
    question: "指定したファイル以降を削除したい", choices: [
      "git switch",
      "git init",
      "git diff",
      "git checkout",
      "git reset"
    ], answer: "git reset"
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