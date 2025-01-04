const questions = [
  // 1
  {
    question: "配列の最初の要素を取得する際、添字 [i] は何番ですか?", 
    choices: ["0", "1", "2", "3", "4"], 
    answer: "0"
  },
  // 2
  {
    question: "配列の末尾に値を追加するメソッドはどれですか?", 
    choices: ["pop", "unshift", "shift", "push", "pull"], 
    answer: "push"
  },
  // 3
  {
    question: "オブジェクトを定義する際に使用する括弧はどれですか?", 
    choices: ["{}", "[]", "()", "<>", "**"], 
    answer: "{}"
  },
  // 4
  {
    question: "オブジェクトから特定のプロパティを削除するには、どのキーワードを使用しますか?", 
    choices: ["remove", "delete", "add", "return", "-"], 
    answer: "delete"
  },
  // 5
  {
    question: "オブジェクトをキーと値の配列に変換するメソッドはどれですか?", 
    choices: ["Object.entries", "object.entries", "object", "o.e", "entries"], 
    answer: "Object.entries"
  },
  // 6
  {
    question: "配列の途中に要素を追加または削除するメソッドはどれですか?", 
    choices: ["space", "split", "splice", "shift", "sheet"], 
    answer: "splice"
  },
  // 7
  {
    question: "配列の要素を区切り文字（例: '|') で連結するメソッドはどれですか?", 
    choices: ["add", "push", "!", "join", "pull"], 
    answer: "join"
  },
  // 8
  {
    question: "配列の各要素を処理して新しい配列を生成するメソッドはどれですか?", 
    choices: ["map", "pop", "scanf", "push", "pull"], 
    answer: "map"
  },
  // 9
  {
    question: "配列から条件に合致する要素だけを抽出するメソッドはどれですか?", 
    choices: ["splice", "filter", "add", "delete", "colmon"], 
    answer: "filter"
  },
  // 10
  {
    question: "配列の中に別の配列の要素を一つずつ展開して追加する際に使用する記号はどれですか?", 
    choices: ["...", "***", "^^^", "+++", "~~~"], 
    answer: "..."
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