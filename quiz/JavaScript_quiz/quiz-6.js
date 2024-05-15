const questions = [
  // 1
  {
    question: "今日の日時を取得したい", choices: [
      "prompt",
      "new Date",
      "createElement",
      "toLocaleString",
      "textContent"], answer: "new Date"
  },
  // 2
  {
    question: "よりわかりやすく表示したい", choices: [
      "prompt",
      "new Date",
      "createElement",
      "toLocaleString",
      "textContent"], answer: "toLocaleString"
  },
  // 3
  {
    question: "年を取得したい", choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "getSeconds"], answer: "getFullYear"
  },
  // 4
  {
    question: "秒を取得したい", choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "getSeconds"], answer: "getSeconds"
  },
  // 5
  {
    question: "日付を取得したい", choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "getSeconds"], answer: "getDate"
  },
  // 6
  {
    question: "月を取得したい", choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "getSeconds"], answer: "getMonth"
  },
  // 7
  {
    question: "時を取得したい", choices: [
      "getFullYear",
      "getDate",
      "getMonth",
      "getHours",
      "getSeconds"], answer: "getHours"
  },
   // 8
   {
    question: "分を取得したい", choices: [
      "getFullYear",
      "getMinutes",
      "getMonth",
      "getHours",
      "getSeconds"], answer: "getMinutes"
  },
  // 9
  {
    question: "分を取得したい", choices: [
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