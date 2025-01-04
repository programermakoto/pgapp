const questions = [
  // 1
  {
    question: "button 要素を取得したい場合、どのメソッドを使用しますか?",
    choices: [
      "querySelector",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"
    ],
    answer: "querySelector"
  },
  // 2
  {
    question: "クリック時にイベントを追加したい場合、どのメソッドを使用しますか?",
    choices: [
      "querySelector",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"
    ],
    answer: "addEventListener"
  },
  // 3
  {
    question: "要素のテキストを変更したい場合、どのプロパティを使用しますか?",
    choices: [
      "querySelector",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"
    ],
    answer: "textContent"
  },
  // 4
  {
    question: "要素にクラスを追加したい場合、どのメソッドを使用しますか?",
    choices: [
      "querySelector",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"
    ],
    answer: "classList.add"
  },
  // 5
  {
    question: "要素からクラスを削除したい場合、どのメソッドを使用しますか?",
    choices: [
      "classList.remove",
      "addEventListener",
      "createElement",
      "classList.add",
      "textContent"
    ],
    answer: "classList.remove"
  },
  // 6
  {
    question: "複数の要素をすべて取得したい場合、どのメソッドを使用しますか?",
    choices: [
      "classList.remove",
      "addEventListener",
      "createElement",
      "classList.add",
      "querySelectorAll"
    ],
    answer: "querySelectorAll"
  },
  // 7
  {
    question: "新しい要素を作成したい場合、どのメソッドを使用しますか?",
    choices: [
      "classList.remove",
      "addEventListener",
      "createElement",
      "classList.add",
      "querySelectorAll"
    ],
    answer: "createElement"
  },
  // 8
  {
    question: "作成した li 要素を末尾に追加したい場合、どのメソッドを使用しますか?",
    choices: [
      "classList.remove",
      "appendChild",
      "createElement",
      "classList.add",
      "querySelectorAll"
    ],
    answer: "appendChild"
  },
  // 9
  {
    question: "作成した li 要素を特定の位置に挿入したい場合、どのメソッドを使用しますか?",
    choices: [
      "classList.remove",
      "appendChild",
      "createElement",
      "classList.add",
      "insertBefore"
    ],
    answer: "insertBefore"
  },
  // 10
  {
    question: "ユーザーに確認用のメッセージを表示したい場合、どのメソッドを使用しますか?",
    choices: [
      "confirm",
      "insertBefore",
      "prompt",
      "alert", // "scanf" の代わりに "alert" を追加
      "console.log" // "double" の代わりに "console.log" を追加
    ],
    answer: "confirm"
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