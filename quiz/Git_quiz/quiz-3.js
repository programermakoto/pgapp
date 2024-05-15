const questions = [
  // 1
  {
    question: "リモートリポジトリの名前をつけるには?", choices: [
      "git remote",
      "git init",
      "git add",
      "git commit",
      "git log"], answer: "git branch"
  },
  // 2
  {
    question: "ローカルからリモートへ転送したい", choices: [
      "git remote",
      "git init",
      "git add",
      "git commit",
      "git push"], answer: "git push"
  },
  // 3
  {
    question: "リモートから追跡ブランチへ転送したい", choices: [
      "git fetch",
      "git init",
      "git add",
      "git commit",
      "git log"], answer: "git fetch"
  },
  // 4
  {
    question: "リモートリポジトリが登録されているか確認したい", choices: [
      "-a",
      "--all",
      "--no-ff",
      "-v",
      "git log"], answer: "-v"
  },
  // 5
  {
    question: "リモート追跡ブランチを作るには", choices: [
      "-u",
      "-m",
      "-la",
      "-l",
      "-graph"], answer: "-u"
  },
  // 6
  {
    question: "リモートにない追跡ブランチを削除したい", choices: [
      "-d",
      "-m",
      "-la",
      "-l",
      "--prune"], answer: "--prune"
  },
  // 7
  {
    question: "コマンドパレットの開き方", choices: [
      "shift + !",
      "shift + command + p",
      "command",
      "shift",
      "p"], answer: "shift + command + p"
  },
   // 8
   {
    question: "指定したところ以降が全て消えるのは?", choices: [
      "--hard",
      "--no-edit",
      "-c",
      "-l",
      "-graph"], answer: "--hard"
  },
  // 9
  {
    question: "指定したところ以降がリモートリポジトリだけ消えるのは?", choices: [
      "--hard",
      "--no-edit",
      "-c",
      "-l",
      "--soft"], answer: "--soft"
  },

  // 10
  {
    question: "削除してもワーキングディレクトリだけ残るのは?", choices: [
      "--mixed",
      "--no-edit",
      "-c",
      "-l",
      "-graph"], answer: "--mixed"
  },


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