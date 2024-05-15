const questions = [
  // 1
  {
    question: "自分の現在地を確認したい", choices: [
      "pwd",
      "cd",
      "ls",
      "rm",
      "cat"], answer: "pwd"
  },
  // 2
  {
    question: "移動のコマンド", choices: [
      "pwd",
      "cd",
      "ls",
      "rm",
      "cat"], answer: "cd"
  },
  // 3
  {
    question: "フォルダを作るコマンド", choices: [
      "pwd",
      "cd",
      "ls",
      "rm",
      "mkdir"], answer: "mkdir"
  },
  // 4
  {
    question: "ファイルを作るコマンド", choices: [
      "pwd",
      "touch",
      "ls",
      "rm",
      "mkdir"], answer: "touch"
  },
  // 5
  {
    question: "ファイルに書き込むコマンド", choices: [
      "vim",
      "touch",
      "ls",
      "rm",
      "mkdir"], answer: "vim"
  },
  // 6
  {
    question: "ファイルの中身を確認したい", choices: [
      "vim",
      "touch",
      "ls",
      "rm",
      "cat"], answer: "cat"
  },
  // 7
  {
    question: "テキストエディタから抜け出すには", choices: [
      ":wq",
      "touch",
      "ls",
      "rm",
      "cat"], answer: ":wq"
  },
   // 8
   {
    question: "ファイルを削除したい", choices: [
      ":wq",
      "touch",
      "ls",
      "rm",
      "cat"], answer: "rm"
  },
  // 9
  {
    question: "ディレクトリごと削除したい", choices: [
      "-i",
      "-l",
      "-r",
      "-f",
      "-d"], answer: "-r"
  },

  // 10
  {
    question: "一つもどる", choices: [
      "..",
      "//",
      "**",
      "~",
      "^"], answer: ".."
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