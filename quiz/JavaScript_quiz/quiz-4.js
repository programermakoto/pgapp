const questions = [
  // 1
  {
    question: "button要素を取得したい", choices: [
      "querySlecter",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"], answer: "querySlecter"
  },
  // 2
  {
    question: "クリックした時にイベントを追加したい", choices: [
      "querySlecter",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"], answer: "addEventListener"
  },
  // 3
  {
    question: "テキストを変更したい", choices: [
      "querySlecter",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"], answer: "textContent"
  },
  // 4
  {
    question: "クラスを追加したい", choices: [
      "querySlecter",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"], answer: "classList.add"
  },
  // 5
  {
    question: "クラスを削除したい", choices: [
      "classList.remove",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"], answer: "classList.remove"
  },
  // 6
  {
    question: "全てのセレクターを取得したい", choices: [
      "classList.remove",
      "addEventListener",
      "createElement",
      "classList.add",
      "querySlecterAll"], answer: "querySlecterAll"
  },
  // 7
  {
    question: "新たに要素を作りたい", choices: [
      "classList.remove",
      "addEventListener",
      "createElement",
      "classList.add",
      "querySlecterAll"], answer: "createElement"
  },
   // 8
   {
    question: "新たに作ったli要素を下に追加したい", choices: [
      "classList.remove",
      "appendChild",
      "createElement",
      "classList.add",
      "querySlecterAll"], answer: "appendChild"
  },
  // 9
  {
    question: "新たに作ったli要素を間に追加したい", choices: [
      "classList.remove",
      "appendChild",
      "createElement",
      "classList.add",
      "insertBefore"], answer: "insertBefore"
  },

  // 10
  {
    question: "ユーザーが確認できるメッセージを出したい", choices: [
      "confirm",
      "insertBefore",
      "prompt",
      "scanf",
      "double"], answer: "confirm"
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