const questions = [
  { question: "htmlにcssを書きたい場合head内のタグは?", choices: ["style",
  "button",
  "value",
  "number",
  "date"], answer: "style" },

  { question: "cssで背景色を変えたい時どのプロパティ?", choices: ["background-color",
  "padding",
  "margin",
  "text-align",
  "display"], answer: "background-color" },

  { question: "cssを別ページで開くときのタグは?", choices: ["p",
  "h",
  "link",
  "section",
  "a"], answer: "link" },

  { question: "画面を広げたときこれ以上広がって欲しくない要素がある時", choices: ["min-width",
  "max-width",
  "margin",
  "padding",
  "background"], answer: "max-width" },

  { question: "画面を広げたときこれ以上縮まって欲しくない要素がある時", choices: ["min-width",
  "max-width",
  "margin",
  "padding",
  "background"], answer: "min-width" },

  { question: "ボーダーの内側に余白が欲しい時のプロパティ?", choices: ["min-width",
  "max-width",
  "margin",
  "padding",
  "background"], answer: "padding" },

  { question: "ボーダーの外側に余白が欲しい時のプロパティ", choices: ["min-width",
  "max-width",
  "margin",
  "padding",
  "background"], answer: "margin" },

  { question: "要素の大きさをボーダーも全て含めたものにするには?", choices: ["min-width",
  "max-width",
  "box-sizing",
  "padding",
  "background"], answer: "box-sizing" },

  { question: "要素からテキストがはみ出た部分を消したい時のプロパティ", choices: ["min-width",
  "max-width",
  "box-sizing",
  "padding",
  "overflow"], answer: "overflow" },

  { question: "はみ出た部分を消したい時overflowプロパティの値は?", choices: ["min-width",
  "100px",
  "border-box",
  "hidden",
  "overflow"], answer: "hidden" },

  { question: "はみ出た部分を消したがスクロールして見たい時の値は?", choices: ["scroll",
  "100px",
  "border-box",
  "hidden",
  "overflow"], answer: "hidden" },

  { question: "要素の角を丸めたい時、何プロパティを使用すればいいですか?", choices: ["scroll",
  "100px",
  "border-box",
  "border-radius",
  "overflow"], answer: "border-radius" },

  { question: "要素に影を作りたい時、何プロパティを使用すればいいですか?", choices: ["scroll",
  "box-shadow",
  "border-box",
  "border-radius",
  "overflow"], answer: "box-shadow" },

  { question: "フォントの太さを変更したい時のプロパティ", choices: ["font-weight",
  "box-shadow",
  "border-box",
  "border-radius",
  "overflow"], answer: "font-weight" },

  { question: "フォントの太さを太くしたい時、font-weightプロパティの値は?", choices: ["normal",
  "box-shadow",
  "border-box",
  "px",
  "bold"], answer: "bold" },

  { question: "フォントの太さを細くしたい時、font-weightプロパティの値は?", choices: ["normal",
  "box-shadow",
  "border-box",
  "px",
  "bold"], answer: "normal" },

  { question: "フォントの太さを細くしたい時、font-weightプロパティの値は?", choices: ["normal",
  "box-shadow",
  "border-box",
  "px",
  "bold"], answer: "normal" },

  { question: "行間を変更したい場合、何プロパティを使用すればいいですか?", choices: ["width",
  "height",
  "border",
  "line-height",
  "bold"], answer: "line-height" },

  { question: "本来継承されないプロパティを継承させたい場合に使う値は?", choices: ["inherit",
  "height",
  "border",
  "line-height",
  "bold"], answer: "inherit" },

  { question: "フォントを指定したい時のプロパティは?", choices: ["inherit",
  "height",
  "border",
  "line-height",
  "font-family"], answer: "font-family" },

  { question: "spanタグで囲んだテキストだけ修正線を引きたい", choices: ["text-decoration",
  "height",
  "border",
  "line-height",
  "font-family"], answer: "text-decoration" },

  { question: "修正線を引きたい場合、text-decorationプロパティの値は?", choices: ["text-decoration",
  "height",
  "border",
  "line-through",
  "font-family"], answer: "line-through" },

  { question: "あるテキストだけ下線を引きたい時のタグ?", choices: ["u",
  "height",
  "border",
  "line-through",
  "font-family"], answer: "u" },

  { question: "要素の背景に画像を配置したい時のプロパティ", choices: ["img",
  "background-color",
  "background-image",
  "backgroundimage",
  "font-family"], answer: "background-image" },

  { question: "borderを破線にしたい時、borderプロパティの値は?", choices: ["double",
  "dashed",
  "hasen",
  "solid",
  "border"], answer: "dashed" },

  { question: "borderを二重線にしたい時、borderプロパティの値は?", choices: ["double",
  "dashed",
  "hasen",
  "solid",
  "border"], answer: "double" },

  { question: "テキストだけ下線を引きたい場合、uタグ以外で何がある?", choices: ["double",
  "dashed",
  "text-decoration",
  "solid",
  "border"], answer: "text-decoration" },

  { question: "テキストに下線を引きたい時text-decorationプロパティの値は?", choices: ["double",
  "dashed",
  "text-decoration",
  "solid",
  "underline"], answer: "underline" },

  { question: "要素を中央寄せしたい場合、左右のmarginプロパティの値は?", choices: ["auto",
  "0",
  "center",
  "solid",
  "underline"], answer: "auto" },

  { question: "テキストを中央寄せしたい場合、text-alignプロパティの値は?", choices: ["auto",
  "0",
  "center",
  "solid",
  "underline"], answer: "center" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-3.html">もう一度する</a>`;
}

displayQuestion(0);
