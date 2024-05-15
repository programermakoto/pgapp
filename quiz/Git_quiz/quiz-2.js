const questions = [
  // 1
  {
    question: "branchを確認したい", choices: [
      "git branch",
      "git init",
      "git add",
      "git commit",
      "git log"], answer: "git branch"
  },
  // 2
  {
    question: "全てのブランチを見たい", choices: [
      "-a",
      "--all",
      "git add",
      "-l",
      "git log"], answer: "--all"
  },
  // 3
  {
    question: "mainに他のbranchを統合したい", choices: [
      " git merge",
      "git init",
      "git add",
      "git commit",
      "git log"], answer: "git merge"
  },
  // 4
  {
    question: "Fast Forwardマージをしたい", choices: [
      "-a",
      "--all",
      "--no-ff",
      "-l",
      "git log"], answer: "--no-ff"
  },
  // 5
  {
    question: "branchの分岐を確認したい", choices: [
      "-a",
      "-m",
      "-la",
      "-l",
      "-graph"], answer: "-graph"
  },
  // 6
  {
    question: "マージしたbranchを削除したい", choices: [
      "-d",
      "-m",
      "-la",
      "-l",
      "-graph"], answer: "-d"
  },
  // 7
  {
    question: "switchしながらbranchを作りたい", choices: [
      "-d",
      "-m",
      "-c",
      "-l",
      "-graph"], answer: "-c"
  },
   // 8
   {
    question: "コメットメッセージを自動生成したい", choices: [
      "-d",
      "--no-edit",
      "-c",
      "-l",
      "-graph"], answer: "--no-edit"
  },
  // 9
  {
    question: "マージする前にmainの先頭に矛先を向けたい", choices: [
      "git switch",
      "git init",
      "git diff",
      "git checkout",
      "git rebase"], answer: "git rebase"
  },

  // 10
  {
    question: "マージ前のbranchを削除したい", choices: [
      "-D",
      "--no-edit",
      "-c",
      "-l",
      "-graph"], answer: "-D"
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