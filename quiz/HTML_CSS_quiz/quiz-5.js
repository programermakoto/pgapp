const questions = [
  { question: "h1の要素セレクターはどれですか?", choices: ["div",
  "p",
  "h1",
  "a",
  "input"], answer: "h1" },

  { question: "全称セレクターはどれですか?", choices: ["div",
  "*",
  "h1",
  "a",
  "input"], answer: "*" },

  { question: "name-1というクラスがある時、クラスセレクターは?", choices: ["div",
  "*",
  "h1",
  ".name-1",
  "input"], answer: ".name-1" },

  { question: "id属性をつけた要素がある場合、idセレクターはどれですか?", choices: ["#",
  "*",
  "&",
  "|",
  "+"], answer: "#" },

  { question: "target属性をつけた要素がある、属性セレクターはどれですか?", choices: ["#target",
  ".target",
  "[target]",
  "*target",
  "(target)"], answer: "[target]" },

  { question: "type属性をつけた要素が複数ある値がtextの属性セレクターは?", choices: ["#target”text”",
  ".target=”text”",
  "[target=”text”]",
  "*target",
  "(target)"], answer: "[target=”text”]" },

  { question: "h1とp両方にスタイリングする、セレクターの区切り文字は?", choices: [".",
  ",",
  ":",
  ";",
  "()"], answer: "," },

  { question: "divの中にp要素がある場合、divの子要素は何ですか?", choices: ["a",
  "div",
  "input",
  "u",
  "p"], answer: "p" },

  { question: "divの中にul要素、ul要素の下liがある、ulの子要素は?", choices: ["a",
  "div",
  "li",
  "u",
  "p"], answer: "li" },

  { question: "divの中にul要素、ul要素の下liがある、divの孫要素は?", choices: ["a",
  "div",
  "li",
  "u",
  "p"], answer: "li" },

  { question: "divの中にul要素、a要素がある、ulの兄弟要素は?", choices: ["a",
  "div",
  "li",
  "u",
  "p"], answer: "a" },

  { question: "li要素の間だけにborderを引きたい、セレクターは?", choices: ["li * li",
  "li / li",
  "li + li",
  "lili",
  "li * 2"], answer: "li + li" },

  { question: "li要素の2番目だけにborderを引きたい、擬似クラスは?", choices: [":nth-child()",
  ";nthchild",
  "nthchild",
  ":nth",
  ":"], answer: ":nth-child()" },

  { question: "li要素の奇数番目だけにborderを引きたい、:nth-childの値は?", choices: ["odd",
  "even",
  "first",
  "last",
  ":"], answer: "odd" },

  { question: "li要素の偶数番目だけにborderを引きたい、:nth-childの値は?", choices: ["odd",
  "even",
  "first",
  "last",
  ":"], answer: "even" },

  { question: "li要素の1番目だけにborderを引きたい、:nth-childの値は?", choices: ["odd",
  "even",
  "first",
  "last",
  ":"], answer: "first" },

  { question: "li要素の最後だけにborderを引きたい、:nth-childの値は?", choices: ["odd",
  "even",
  "first",
  "last",
  ":"], answer: "last" },

  { question: "cursorを当てた時に変化を表したい場合、擬似クラスは?", choices: [":nth-child",
  ":hover",
  ":focus",
  ":active",
  ":"], answer: ":hover" },

  { question: "フォーカスを当てた時に変化を表したい、擬似クラスは?", choices: [":nth-child",
  ":hover",
  ":focus",
  ":active",
  ":"], answer: ":focus" },

  { question: "クリックした時に変化を表したい、擬似クラスは?", choices: [":nth-child",
  ":hover",
  ":focus",
  ":active",
  ":"], answer: ":active" },

  { question: "クラスがないものだけにスタイルをつけたい、擬似クラスは?", choices: [":nth-child",
  ":hover",
  ":focus",
  ":not",
  ":"], answer: ":not" },

  { question: "p要素の中身の前に要素をつけたい、複合セレクターは?", choices: [":nth-child",
  ":hover",
  ":before",
  ":not",
  "::after"], answer: "::before" },

  { question: "p要素の中身の後に要素をつけたい、複合セレクターは?", choices: [":nth-child",
  ":hover",
  ":before",
  ":not",
  "::after"], answer: "::after" },

  { question: "p要素の中身の後に要素をつけたい、複合セレクターの中身は?", choices: [":nth-child",
  ":hover",
  ":before",
  "content:'';",
  "::after"], answer: "content:'';" },

  { question: "セレクターの優先度を関係なしに適応させたい、値の後は?", choices: ["important",
  ":hover",
  "!important",
  "import",
  "::after"], answer: "!important" },

  { question: "section > p{}の>記号は何要素ですか?", choices: ["子",
  "子孫",
  "兄弟",
  "孫",
  "*"], answer: "子" },

  { question: "section p{}の空白は何要素を表していますか?", choices: ["子",
  "子孫",
  "兄弟",
  "孫",
  "*"], answer: "子孫" },

  { question: "CSSで同じプロパティを指定、前と後ではどちらが適応する？", choices: ["前",
  "後",
  "*",
  "*",
  "*"], answer: "後" },

  { question: "中にh1,p,p,pがある、div p: first-child{}だとうまく作動しない", choices: [":first-child",
  ":nthchild",
  ":first-of-type",
  "last-of-type",
  "last-child"], answer: ":first-of-type" },

  { question: "一般的兄弟結合子の記号は?", choices: ["*",
  "+",
  "&",
  "|",
  "~"], answer: "~" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-5.html">もう一度する</a>`;
}

displayQuestion(0);