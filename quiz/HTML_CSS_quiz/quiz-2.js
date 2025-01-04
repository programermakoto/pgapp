const questions = [
  { question: "改行を含まない一行だけのテキストボックスを配置するタグは?", choices: ["div",
  "a",
  "input",
  "table",
  "section"], answer: "input" },

  { question: "改行を含む複数行あるテキストボックスを配置するタグは?", choices: ["div",
  "a",
  "input",
  "table",
  "textarea"], answer: "textarea" },

  { question: "クリックで同じ要素内のBOXにフォーカス当てるタグは?", choices: ["label",
  "a",
  "input",
  "table",
  "textarea"], answer: "label" },

  { question: "labelタグと入力部品を紐付ける属性は?", choices: ["id",
  "type",
  "for",
  "disable",
  "required"], answer: "for" },

  { question: "labelタグと入力部品を属性を使わずに紐付けたい", choices: ["divで入力部品を囲う",
  "pで入力部品を囲む",
  "aで入力部品を囲む",
  "labelで入力部品を囲む",
  "hで入力部品を囲む"], answer: "labelで入力部品を囲む" },

  { question: "入力されていないものにアラートを出したい", choices: ["id",
  "type",
  "for",
  "disable",
  "required"], answer: "required" },

  { question: "入力部品に予め書いてほしいものを表示させたい時の属性?", choices: ["type",
  "id",
  "for",
  "target",
  "placeholder"], answer: "placeholder" },

  { question: "checkboxを作るにはinputタグには何属性?", choices: ["type",
  "id",
  "for",
  "type",
  "placeholder"], answer: "type" },

  { question: "checkboxを作るにはinputタグのtype属性の値は?", choices: ["checkbox",
  "radio",
  "id",
  "type",
  "placeholder"], answer: "checkbox" },

  { question: "checkboxの全体をグループ化したい時のタグは?", choices: ["p",
  "code",
  "a",
  "input",
  "fieldset"], answer: "fieldset" },

  { question: "checkboxをグループ化したものに説明を加えたい場合のタグは?", choices: ["p",
  "code",
  "legend",
  "input",
  "fieldset"], answer: "legend" },

  { question: "radioボタンを配置したい時inputタグ内の属性は?", choices: ["type",
  "name",
  "id",
  "disable",
  "required"], answer: "type" },

  { question: "radioボタンを配置したい時inputタグ内のtype属性は?", choices: ["checkbox",
  "submit",
  "radio",
  "disable",
  "required"], answer: "radio" },

  { question: "ボタンを複数選択できなくする時inputタグ内の属性は?", choices: ["一つだけname属性をつける",
  "全てに同じname属性をつける",
  "radioなら元々一つしか選択できない",
  "最初と最後にだけname属性をつける",
  "特に何もしない"], answer: "全てに同じname属性をつける" },

  { question: "ドロップダウンリストを作りたい時何のタグは?", choices: ["select",
  "option",
  "a",
  "p",
  "table"], answer: "select" },

  { question: "ドロップダウンリストを作りたい時selectタグの中のタグは?", choices: ["select",
  "option",
  "a",
  "p",
  "table"], answer: "option" },


  { question: "ドロップダウンリストを複数選択したい時、属性の値は?", choices: ["name",
  "type",
  "id",
  "size",
  "multiple"], answer: "multiple" },

  { question: "属性と属性の値が同じの時省略できますか?", choices: ["できる",
  "できない",
  "*",
  "*",
  "*"], answer: "できる" },

  { question: "ボタンを作るときinputタグを使用せず作るには?", choices: ["input",
  "button",
  "div",
  "a",
  "p"], answer: "button" },

  { question: "ボタンを配置したいときbottonタグを使用せず作るには?", choices: ["input",
  "button",
  "div",
  "a",
  "p"], answer: "input" },

  { question: "ボタンでinputタグを使用した時type属性の値は?", choices: ["input",
  "button",
  "div",
  "submit",
  "p"], answer: "submit" },

  { question: "ボタンでinputタグを使用した時テキストを変更する際の属性は?", choices: ["input",
  "button",
  "value",
  "submit",
  "p"], answer: "value" },

  { question: "inputタグに最初からテキストを指定したい時の属性は?", choices: ["input",
  "button",
  "value",
  "submit",
  "p"], answer: "value" },

  { question: "checkboxに最初から選択済みにする時の属性は?", choices: ["input",
  "button",
  "value",
  "submit",
  "checked"], answer: "checked" },

  { question: "ドロップダウンリストに最初から選択済みにする時の属性は?", choices: ["input",
  "button",
  "value",
  "selected",
  "checked"], answer: "selected" },

  { question: "buttonを無効化したい時何属性を指定すればいいですか?", choices: ["disabled",
  "button",
  "value",
  "selected",
  "checked"], answer: "disabled" },

  { question: "パスワードを入力する部品を書きたい時inputタグのtype属性は?", choices: ["password",
  "button",
  "value",
  "selected",
  "checked"], answer: "password" },

  { question: "数値を入力する部品を書きたい時inputタグのtype属性は?", choices: ["password",
  "button",
  "value",
  "number",
  "checked"], answer: "number" },

  { question: "日付を入力する部品を書きたい時inputタグのtype属性は?", choices: ["password",
  "button",
  "value",
  "number",
  "date"], answer: "date" },
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
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-2.html">もう一度する</a>`;
}

displayQuestion(0);
