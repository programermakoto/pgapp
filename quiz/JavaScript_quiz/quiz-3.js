const questions = [
  // 1
  {
    question: "配列の一番目を指定したい際[i]は何番?", choices: [
      "0",
      "1",
      "2",
      "3",
      "4"], answer: "0"
  },
  // 2
  {
    question: "配列の末尾に値を追加したい時", choices: [
      "pop",
      "unshift",
      "shift",
      "push",
      "pull"], answer: "push"
  },
  // 3
  {
    question: "オブジェクトを定義する際のカッコは?", choices: [
      "{}",
      "[]",
      "()",
      "<>",
      "**"], answer: "{}"
  },
  // 4
  {
    question: "オブジェクトのプロパティを消したい", choices: [
      "remove",
      "delete",
      "add",
      "return",
      "-"], answer: "delete"
  },
  // 5
  {
    question: "オブジェクトを配列にしたい", choices: [
      "Object.entries",
      "object.entries",
      "object",
      "o.e",
      "entries"], answer: "Object.entries"
  },
  // 6
  {
    question: "配列の間に要素を追加したい", choices: [
      "space",
      "split",
      "splice",
      "shift",
      "sheet"], answer: "splice"
  },
  // 7
  {
    question: "配列の中身を｜を使って区切りたい", choices: [
      "add",
      "push",
      "!",
      "join",
      "pull"], answer: "join"
  },
   // 8
   {
    question: "ある配列の各要素を処理して新しい配列を作る", choices: [
      "map",
      "pop",
      "scanf",
      "push",
      "pull"], answer: "map"
  },
  // 9
  {
    question: "配列から条件に合致するものだけ抽出したい", choices: [
      "splice",
      "filter",
      "add",
      "delete",
      "colmon"], answer: "filter"
  },

  // 10
  {
    question: "配列の中に他配列の中身を一つずつ追加したい", choices: [
      "...",
      "***",
      "^^^",
      "+++",
      "~~~"], answer: "..."
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