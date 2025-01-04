const questions = [
  {
    question: "HTMLとは何の略？",
    choices: [
      "Hyperlink and Text Markup Language",
      "Hyper Tool Markup Language",
      "High Text Markup Language",
      "Hyper Text Markup Language",
      "High Transfer Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "見出しに使われるhタグですが、h何タグまでありますか?",
    choices: ["h5", "h6", "h10", "h4", "h16", "h7"],
    answer: "h6"
  },
  {
    question: "hは見出しに使用されますが、pタグは何に使用されますか?",
    choices: ["リンク", "見出し", "段落", "改行", "線"],
    answer: "段落"
  },
  {
    question: "この中でブロック要素はどれですか？",
    choices: ["a", "input", "img", "div", "span"],
    answer: "div"
  },
  {
    question: "この中でインライン要素はどれですか？",
    choices: ["a", "h", "p", "li", "div"],
    answer: "a"
  },
  {
    question: "HTMLで改行に用いられるタグはどれですか？",
    choices: ["mark", "iframe", "th", "br", "hr"],
    answer: "br"
  },
  {
    question: "ulタグの先頭に表示されるものは次のうちどれですか？",
    choices: ["数字(1,2,3…)", "黒丸", "白丸", "英数字", "何も表示されない"],
    answer: "黒丸"
  },
  {
    question: "HTMLのheadには以下の何を書くでしょうか？",
    choices: ["ヘッダー", "フッター", "メインの文字", "HTMLの設定", "何も書かない"],
    answer: "HTMLの設定"
  },
  {
    question: "斜体にするには以下のどのタグを使えば可能ですか？",
    choices: ["u", "s", "i", "b", "t"],
    answer: "i"
  },
  {
    question: "文中の一部を変更したいとき使うタグは？",
    choices: ["span", "mark", "spam", "iframe", "section"],
    answer: "span"
  },
  {
    question: "複数行書けるテキストボックスは？",
    choices: ["input", "mark", "textarea", "iframe", "section"],
    answer: "textarea"
  },
  {
    question: "webサイトのタイトルを書く場所はどこですか?",
    choices: ["main", "header", "footer", "head", "section"],
    answer: "head"
  },
  {
    question: "HTMLで表を書く際、何タグで全体を囲みますか?",
    choices: ["thead", "tr", "tbody", "td", "table"],
    answer: "table"
  },
  {
    question: "リンク先を別のページで開きたい時、指定する値は?",
    choices: ["blank", "submit", "_blank", "_blanch", "指定しなくてもよい"],
    answer: "_blank"
  },
  {
    question: "<!DOCTYPE html>とは何を表しているでしょうか?",
    choices: [
      "この文章はHTMLです",
      "この文章はCSSです",
      "この文章はJavaScriptです",
      "この文章はCです",
      "この文章はC++です"
    ],
    answer: "この文章はHTMLです"
  },
  {
    question: "表で横方向のセルを結合させるには?",
    choices: ["rowspan", "caption", "colspan", "span", "row"],
    answer: "colspan"
  },
  {
    question: "表で縦方向のセルを結合させるには?",
    choices: ["rowspan", "caption", "colspan", "span", "row"],
    answer: "rowspan"
  },
  {
    question: "<>を文字として入力したい場合は?",
    choices: ["&lt&gt", "&ll&gt", "&lt;&gt;", "&ll;&gt;", "&ll:&gt:"],
    answer: "&lt;&gt;"
  },
  {
    question: "そのタグ内では空白も改行も自由にできるタグは?",
    choices: ["p", "aside", "pre", "nav", "a"],
    answer: "pre"
  },
  {
    question: "広告などが書かれる時に使うタグは?",
    choices: ["a", "aside", "article", "nav", "p"],
    answer: "aside"
  },
  {
    question: "HTMLにマップやYoutubeを埋め込みたい場合使うタグは?",
    choices: ["div", "video", "iframe", "nav", "a"],
    answer: "iframe"
  },
  {
    question: "文字を太文字にする際使うタグは?",
    choices: ["c", "a", "b", "p", "d"],
    answer: "b"
  },
  {
    question: "強調したい文字にマークをつけたい時のタグは?",
    choices: ["mk", "mark", "span", "color", "red"],
    answer: "mark"
  },
  {
    question: "VSコードでインデントを整えたい場合使うコマンドは?",
    choices: ["Shift", "option", "command", "Shift+Option(Alt)+F", "tab"],
    answer: "Shift+Option(Alt)+F"
  },
  {
    question: "テキストをコピーしたい場合使うコマンドは?",
    choices: ["Command(Control)+C", "option", "command", "Shift+Option(Alt)", "tab"],
    answer: "Command(Control)+C"
  },
  {
    question: "コピーしたテキストを貼り付けたい場合使うコマンドは?",
    choices: ["Command(Control)+C", "option", "command", "Shift+Option(Alt)", "Command(Control)+V"],
    answer: "Command(Control)+V"
  },
  {
    question: "1つ前に戻りたい場合使うコマンドは?",
    choices: ["Command(Control)+C", "option", "command", "Command(Control)+Z", "Command(Control)+V"],
    answer: "Command(Control)+Z"
  },
  {
    question: "テキストをコメントにしたい場合使うコマンドは?",
    choices: ["Command(Control)+/", "option", "command", "Command(Control)+Z", "Command(Control)+V"],
    answer: "Command(Control)+/"
  },
  {
    question: "コード全体を選択したい場合使うコマンドは?",
    choices: ["Command(Control)+/", "Command(Control)+A", "Command", "Shift+Option(Alt)+矢印キー", "Command(Control)+V"],
    answer: "Command(Control)+A"
  },
  {
    question: "テキストを切り取りたい場合使うコマンドは?",
    choices: ["Command(Control)+/", "Command(Control)+A", "Command(Control)+X", "Shift+Option(Alt)+矢印キー", "Command(Control)+V"],
    answer: "Command(Control)+X"
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

  questionObj.choices.forEach((choice) => {
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
    feedbackElement.textContent = "正解です！おめでとうございます！";
    correctCount++;
  } else {
    feedbackElement.textContent = `不正解！答えは「${correct}」です。`;
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

function showResult() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解！</p><br><a class="quiz-r-btn" href="quiz-1.html">もう一度する</a>`;
}

// 初期問題表示
displayQuestion(0);
