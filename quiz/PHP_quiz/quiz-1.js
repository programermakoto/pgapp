const questions = [
  { question: "PHPとは何の略でしょうか？", choices: ["Hypertext Preprocessor", "Pre Hypertext Processor", "Personal Home Page", "Personal Hypertext Processor"], answer: "Hypertext Preprocessor" },
  { question: "変数を定義する記号は何？", choices: ["$", "@", "#", "%"], answer: "$" },
  { question: "PHPの現在の最新バージョンはどれ？", choices: ["7.4", "8.0", "8.1", "8.2"], answer: "8.2" },
  { question: "文字列を結合する演算子は何？", choices: [".", "+", "&", "#"], answer: "." },
  { question: "使用されるデフォルトのサーバー側ポート番号は何？", choices: ["80", "443", "8080", "3306"], answer: "80" },
  { question: "変数の型を確認する関数はどれ？", choices: ["gettype()", "var_type()", "checktype()", "typeof()"], answer: "gettype()" },
  { question: "定数を定義するキーワードは何？", choices: ["define", "const", "constant", "set"], answer: "define" },
  { question: "配列の要素数を取得する関数はどれ？", choices: ["count()", "size()", "length()", "elements()"], answer: "count()" },
  { question: "ファイルを読み込む関数はどれ？", choices: ["fopen()", "fread()", "file_get_contents()", "readfile()"], answer: "file_get_contents()" },
  { question: "クラスを定義するキーワードは何？", choices: ["class", "define", "object", "struct"], answer: "class" },
  { question: "現在のスクリプトのファイル名を取得するマジック定数は何？", choices: ["__FILE__", "__DIR__", "__LINE__", "__CLASS__"], answer: "__FILE__" },
  { question: "関数を定義するキーワードは何？", choices: ["function", "def", "func", "sub"], answer: "function" },
  { question: "セッションを開始する関数はどれ？", choices: ["session_start()", "start_session()", "init_session()", "session_init()"], answer: "session_start()" },
  { question: "スーパーグローバル変数に含まれないものはどれ？", choices: ["$_POST", "$_GET", "$_SESSION", "$_REQUEST"], answer: "$_SESSION" },
  { question: "オブジェクトのメソッドを呼び出す演算子は何？", choices: ["->", ".", "::", "->>"], answer: "->" },
  { question: "例外をキャッチするキーワードは何？", choices: ["catch", "try", "throw", "exception"], answer: "catch" },
  { question: "クラスのインスタンスを作成するキーワードは何？", choices: ["new", "create", "instance", "make"], answer: "new" },
  { question: "配列の最後の要素を取得する関数はどれ？", choices: ["end()", "last()", "final()", "tail()"], answer: "end()" },
  { question: "セッションを破棄する関数はどれ？", choices: ["session_destroy()", "session_end()", "session_unset()", "session_delete()"], answer: "session_destroy()" },
  { question: "フォームデータを受け取るグローバル変数はどれ？", choices: ["$_POST", "$_DATA", "$_FORM", "$_REQUEST"], answer: "$_POST" },
  { question: "使用されるコメント記号はどれ？", choices: ["//", "##", ";;", "\\\\"], answer: "//" },
  { question: "日付と時刻を取得する関数はどれ？", choices: ["date()", "datetime()", "getdate()", "now()"], answer: "date()" },
  { question: "文字列の長さを取得する関数はどれ？", choices: ["strlen()", "strlength()", "size()", "length()"], answer: "strlen()" },
  { question: "メールを送信する関数はどれ？", choices: ["mail()", "sendmail()", "send()", "postmail()"], answer: "mail()" },
  { question: "配列を逆順に並べ替える関数はどれ？", choices: ["array_reverse()", "reverse_array()", "flip_array()", "invert_array()"], answer: "array_reverse()" },
  { question: "データベースに接続する関数はどれ？", choices: ["mysqli_connect()", "db_connect()", "connect_db()", "open_db()"], answer: "mysqli_connect()" },
  { question: "使用される演算子のうち、等価比較を行うものはどれ？", choices: ["==", "=", "===", "!="], answer: "==" },
  { question: "文字列を大文字に変換する関数はどれ？", choices: ["strtoupper()", "toUpper()", "uppercase()", "toUpperCase()"], answer: "strtoupper()" },
  { question: "配列をソートする関数はどれ？", choices: ["sort()", "array_sort()", "arrange()", "order()"], answer: "sort()" },
  { question: "HTML特殊文字をエスケープする関数はどれ？", choices: ["htmlspecialchars()", "escape_html()", "html_escape()", "encode_html()"], answer: "htmlspecialchars()" }
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
