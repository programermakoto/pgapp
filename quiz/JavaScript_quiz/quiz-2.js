const questions = [
  // 1
  {
    question: "関数を書く際どう定義しますか?", choices: [
      "action",
      "()",
      "function",
      "string",
      "section"], answer: "function"
  },
  // 2
  {
    question: "例外もあるがfunctionの後は何を書きますか?", choices: [
      "関数名",
      "変数名",
      "定数名",
      "HTML",
      "何も書かない"], answer: "関数名"
  },
  // 3
  {
    question: "一部では省略できますが関数の結果は?", choices: [
      "let",
      "return",
      "prompt",
      "scanf",
      "console.log"], answer: "return"
  },
  // 4
  {
    question: "仮引数は関数側でしようするものですか?", choices: [
      "yes",
      "no",
      "*",
      "*",
      "*"], answer: "yes"
  },
  // 5
  {
    question: "関数式の末尾につける記号は?", choices: [
      ";",
      ":",
      ".",
      "`",
      "*"], answer: ";"
  },
  // 6
  {
    question: "定義した関数を使う時関数名の後ろは?", choices: [
      "{}",
      "[]",
      "()",
      "<>",
      "**"], answer: "()"
  },
  // 7
  {
    question: "仮引数を複数定義したい時どの記号で区切りますか?", choices: [
      "+",
      "*",
      "!",
      "@",
      ","], answer: ","
  },
   // 8
   {
    question: "引数として関数を指定したい場合関数名の後ろは?", choices: [
      "()",
      "[]",
      "{}",
      "<>",
      "何もつけない"], answer: "何もつけない"
  },
  // 9
  {
    question: "関数で=>が付くものは何関数ですか?", choices: [
      "アロー関数",
      "アホー関数",
      "セル関数",
      "矢関数",
      "弓関数"], answer: "アロー関数"
  },

  // 10
  {
    question: "引数にデフォルト値を設定するには?", choices: [
      "=",
      "!",
      "^",
      "e",
      "~"], answer: "="
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