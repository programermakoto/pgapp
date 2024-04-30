const questions = [
  { question: "インライン要素をブッロク要素にするには?", choices: ["display",
  "block",
  "center",
  "margin",
  "underline"], answer: "display" },

  { question: "クラス名をつけたい場合は何属性?", choices: ["id",
  "class",
  "type",
  "margin",
  "value"], answer: "class" },

  { question: "要素をずらしたい場合のプロパティは?", choices: ["absolute",
  "static",
  "relative",
  "fixed",
  "value"], answer: "reartive" },

  { question: "要素を絶対値指定してずらしたい場合のプロパティは?", choices: ["absolute",
  "static",
  "relative",
  "fixed",
  "value"], answer: "absolute" },

  { question: "主にrelativeプロパティとセットで使われるプロパティは?", choices: ["absolute",
  "static",
  "relative",
  "fixed",
  "value"], answer: "absolute" },

  { question: "スクロールしてもその場に固定しておきたい時、何プロパティ?", choices: ["absolute",
  "static",
  "relative",
  "fixed",
  "value"], answer: "fixed" },

  { question: "後ろにある要素を一番前に配置したい時、何プロパティ?", choices: ["z-index",
  "static",
  "relative",
  "fixed",
  "value"], answer: "z-index" },

  { question: "あるimgの縦横比を保つには何プロパティ?", choices: ["z-index",
  "static",
  "relative",
  "fixed",
  "object-fit"], answer: "object-fit" },

  { question: "要素を少し透明にしたい時、何プロパティ?", choices: ["z-index",
  "static",
  "relative",
  "opacity",
  "object-fit"], answer: "opacity" },

  { question: "imgの下の余白を消したい時、何プロパティ?", choices: ["z-index",
  "static",
  "relative",
  "opacity",
  "vertical-align"], answer: "vertical-align" },

  { question: "imgの下の余白を消したい時、vertical-alignの値は?", choices: ["z-index",
  "bottom",
  "relative",
  "opacity",
  "vertical-align"], answer: "bottom" },

  { question: "imgを右側に寄せたい場合、何プロパティ?", choices: ["z-index",
  "bottom",
  "relative",
  "float",
  "vertical-align"], answer: "float" },

  { question: "imgを右側に寄せたい場合、floatプロパティの値は?", choices: ["right",
  "bottom",
  "left",
  "float",
  "vertical-align"], answer: "right" },

  { question: "高さが160pxの時テキストを中間に配置するline-hieghtの値は?", choices: ["40px",
  "60px",
  "auto",
  "80px",
  "160px"], answer: "160px" },

  { question: "デフォルトのスタイリングを取り消すには何プロパティ?", choices: ["all",
  "bottom",
  "auto",
  "float",
  "160px"], answer: "all" },

  { question: "デフォルトのスタイリングを取り消すにはallプロパティの値は?", choices: ["all",
  "bottom",
  "auto",
  "unset",
  "160px"], answer: "unset" },

  { question: "マウスホバーした時カーソルを変えたい場合、何プロパティ?", choices: ["all",
  "bottom",
  "cursor",
  "unset",
  "160px"], answer: "cursor" },

  { question: "ホバーした時カーソルを変えたい、cursorプロパティの値は?", choices: ["all",
  "bottom",
  "cursor",
  "pointer",
  "160px"], answer: "pointer" },

  { question: "ulリストを作りliの先頭の黒丸を消したい場合、何プロパティ?", choices: ["text-decoration",
  "bottom",
  "cursor",
  "pointer",
  "list-style"], answer: "list-style" },

  { question: "100%から32px引いた幅にしたい、widthプロパティは何の値?", choices: ["text-decoration",
  "calc",
  "cursor",
  "pointer",
  "list-style"], answer: "calc" },

  { question: "テキストの何文字分だけの幅にしたい場合、widthの値は?", choices: ["em",
  "calc",
  "cursor",
  "pointer",
  "list-style"], answer: "em" },

  { question: "文章全体に設定された文字のサイズを基準にするwidthの値は?", choices: ["em",
  "calc",
  "rem",
  "pointer",
  "list-style"], answer: "rem" },

  { question: "カラーを指定できるrgbですが、rgbのrは何ですか?", choices: ["red",
  "read",
  "rem",
  "pointer",
  "reach"], answer: "red" },

  { question: "カラーを指定できるrgbですが、rgbのgは何ですか?", choices: ["red",
  "read",
  "rem",
  "green",
  "great"], answer: "green" },

  { question: "カラーを指定できるrgbですが、rgbのbは何ですか?", choices: ["red",
  "read",
  "rem",
  "green",
  "blue"], answer: "blue" },

  { question: "videoを配置したい時、使用するタグはなんですか?", choices: ["img",
  "video",
  "background",
  "p",
  "background-imeage"], answer: "video" },

  { question: "CSS変数を作りたい時、使用するセレクタはなんですか?", choices: [":img",
  ":video",
  "background",
  ":p",
  ":root"], answer: ":root" },

  { question: "CSS変数を使いたい時、使用する値はなんですか?", choices: ["img",
  "var",
  "background",
  "p",
  "root"], answer: "var" },

  { question: "CSS変数を使いたい時、var()の中身は何から始めますか?", choices: ["//",
  "||",
  "&&",
  "--",
  "$$"], answer: "--" },

  { question: "CSS変数を使用するプロパティは何から書き始めればいい?", choices: ["//",
  "||",
  "&&",
  "--",
  "$$"], answer: "--" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-4.html">もう一度する</a>`;
}

displayQuestion(0);