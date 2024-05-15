const questions = [
  // 1
  {
    question: "ユーザーから入力を取得したい", choices: [
      "prompt",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"], answer: "querySlecter"
  },
  // 2
  {
    question: "少数の桁を指定したい", choices: [
      "toFixed",
      "To",
      "prompt",
      "number",
      "content"], answer: "toFixed"
  },
  // 3
  {
    question: "taroが含まれる配列を取りたい", choices: [
      "querySlecter",
      "includes",
      "createElement",
      "classList.add",
      "textContent"], answer: "includes"
  },
  // 4
  {
    question: "配列の文字を指定数だけ切り出したい", choices: [
      "slice",
      "split",
      "createElement",
      "place",
      "price"], answer: "slice"
  },
  // 5
  {
    question: "指定したい文字を空白に置き換えたい", choices: [
      "slice",
      "split",
      "createElement",
      "replace",
      "price"], answer: "replace"
  },
  // 6
  {
    question: "文字数分だけ*を表示したい", choices: [
      "slice",
      "split",
      "repeat",
      "replace",
      "price"], answer: "repeat"
  },
  // 7
  {
    question: "2文字に満たない場合空白を追加したい", choices: [
      "slice",
      "padStart",
      "repeat",
      "replace",
      "padEnd"], answer: "padStart"
  },
   // 8
   {
    question: "2文字に満たない場合後ろに空白を追加したい", choices: [
      "slice",
      "padStart",
      "repeat",
      "replace",
      "padEnd"], answer: "padEnd"
  },
  // 9
  {
    question: "数字を文字列に変換したい", choices: [
      "String",
      "appendChild",
      "createElement",
      "Stripe",
      "insertBefore"], answer: "String"
  },

  // 10
  {
    question: "配列の個数を表すものは?", choices: [
      "confirm",
      "length",
      "prompt",
      "scanf",
      "double"], answer: "length"
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