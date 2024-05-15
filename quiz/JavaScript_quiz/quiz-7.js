const questions = [
  // 1
  {
    question: "一定周期ごとに繰り返し実行したい", choices: [
      "prompt",
      "setInterval",
      "createElement",
      "toLocaleString",
      "textContent"], answer: "setInterval"
  },
  // 2
  {
    question: "一定時間後に一度だけ実行したい", choices: [
      "setTimeOut",
      "new Date",
      "createElement",
      "toLocaleString",
      "textContent"], answer: "setTimeOut"
  },
  // 3
  {
    question: "setInterval終了させたい", choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "clearInterval"], answer: "clearInterval"
  },
  // 4
  {
    question: "アロー関数でsetTimeoutを3秒後に設定したい", choices: [
      "3",
      "30",
      "300",
      "3000",
      "30000"], answer: "3000"
  },
  // 5
  {
    question: "3秒後に別ページに移動したい", choices: [
      "window.location.href",
      "getDate",
      "getMonth",
      "createElement",
      "toLocaleString"], answer: "getDate"
  },
  // 6
  {
    question: "実行時間によっては処理が重なることがあるのは?", choices: [
      "setTimeOut",
      "setInterval",
      "createElement",
      "toLocaleString",
      "textContent"], answer: "setInterval"
  },
  // 7
  {
    question: "setTimeoutを終了させたい", choices: [
      "setTimeOut",
      "setInterval",
      "clearTimeout",
      "toLocaleString",
      "textContent"], answer: "clearTimeout"
  },
   // 8
   {
    question: "clearTimeoutには何を指定しますか?", choices: [
      "属性",
      "タグ",
      "時間",
      "getHours",
      "getSeconds"], answer: "属性"
  },
  // 9
  {
    question: "ボタンを押すたび再代入される", choices: [
      "getFullYear",
      "getMinutes",
      "getMonth",
      "getHours",
      "getMilliseconds"], answer: "getMilliseconds"
  },

  // 10
  {
    question: "分を取得したい", choices: [
      "getDay",
      "getMinutes",
      "getMonth",
      "getHours",
      "getMilliseconds"], answer: "getDay"
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