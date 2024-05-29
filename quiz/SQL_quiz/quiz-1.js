const questions = [
  { question: "SQLとは何の略でしょうか？", choices: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"], answer: "Structured Query Language" },
  { question: "データベースからすべてのデータを取得するコマンドはどれ？", choices: ["SELECT *", "GET ALL", "FETCH *", "RETRIEVE *"], answer: "SELECT *" },
  { question: "新しいテーブルを作成するコマンドはどれ？", choices: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "BUILD TABLE"], answer: "CREATE TABLE" },
  { question: "テーブルにデータを挿入するコマンドはどれ？", choices: ["INSERT INTO", "ADD INTO", "PUT INTO", "UPDATE INTO"], answer: "INSERT INTO" },
  { question: "特定の条件に基づいてデータを取得するキーワードは何？", choices: ["WHERE", "IF", "WHEN", "CONDITION"], answer: "WHERE" },
  { question: "データベースからデータを削除するコマンドはどれ？", choices: ["DELETE FROM", "REMOVE FROM", "DROP FROM", "ERASE FROM"], answer: "DELETE FROM" },
  { question: "テーブルの構造を変更するコマンドはどれ？", choices: ["ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE", "ADJUST TABLE"], answer: "ALTER TABLE" },
  { question: "データベースの構造全体を削除するコマンドはどれ？", choices: ["DROP DATABASE", "REMOVE DATABASE", "DELETE DATABASE", "ERASE DATABASE"], answer: "DROP DATABASE" },
  { question: "重複したデータを削除するキーワードは何？", choices: ["DISTINCT", "UNIQUE", "FILTER", "REMOVE"], answer: "DISTINCT" },
  { question: "データを昇順に並べ替えるキーワードは何？", choices: ["ASC", "UP", "INCREASE", "ASCEND"], answer: "ASC" },
  { question: "データを降順に並べ替えるキーワードは何？", choices: ["DESC", "DOWN", "DECREASE", "DESCEND"], answer: "DESC" },
  { question: "列の名前を変更するコマンドはどれ？", choices: ["RENAME COLUMN", "ALTER COLUMN", "CHANGE COLUMN", "MODIFY COLUMN"], answer: "RENAME COLUMN" },
  { question: "使用される論理演算子はどれ？", choices: ["AND, OR, NOT", "IF, ELSE, NOT", "WHEN, THEN, ELSE", "FOR, WHILE, DO"], answer: "AND, OR, NOT" },
  { question: "NULL値を確認するキーワードは何？", choices: ["IS NULL", "EQUALS NULL", "IS NOT NULL", "CHECK NULL"], answer: "IS NULL" },
  { question: "主キーを設定するキーワードは何？", choices: ["PRIMARY KEY", "MAIN KEY", "UNIQUE KEY", "FOREIGN KEY"], answer: "PRIMARY KEY" },
  { question: "外部キーを設定するキーワードは何？", choices: ["FOREIGN KEY", "EXTERNAL KEY", "OUTSIDE KEY", "REFERENCE KEY"], answer: "FOREIGN KEY" },
  { question: "テーブルに既に存在するデータを更新するコマンドはどれ？", choices: ["UPDATE", "MODIFY", "CHANGE", "ADJUST"], answer: "UPDATE" },
  { question: "特定の列だけを選択するキーワードは何？", choices: ["SELECT column_name", "PICK column_name", "CHOOSE column_name", "GET column_name"], answer: "SELECT column_name" },
  { question: "新しいデータベースを作成するコマンドはどれ？", choices: ["CREATE DATABASE", "NEW DATABASE", "BUILD DATABASE", "MAKE DATABASE"], answer: "CREATE DATABASE" },
  { question: "テーブルの名前を変更するコマンドはどれ？", choices: ["RENAME TABLE", "ALTER TABLE NAME", "CHANGE TABLE NAME", "MODIFY TABLE NAME"], answer: "RENAME TABLE" },
  { question: "データベースに接続するコマンドはどれ？", choices: ["CONNECT TO", "ATTACH TO", "LINK TO", "JOIN TO"], answer: "CONNECT TO" },
  { question: "特定の行を取得するキーワードは何？", choices: ["WHERE", "SELECT ROW", "FETCH ROW", "PICK ROW"], answer: "WHERE" },
  { question: "文字列を連結する演算子はどれ？", choices: ["||", "&&", "++", "=="], answer: "||" },
  { question: "グループ化されたデータを取得するキーワードは何？", choices: ["GROUP BY", "GROUP WITH", "COLLECT BY", "AGGREGATE BY"], answer: "GROUP BY" },
  { question: "カウントを取得する関数はどれ？", choices: ["COUNT()", "SUM()", "AVG()", "TOTAL()"], answer: "COUNT()" },
  { question: "データの合計を計算する関数はどれ？", choices: ["SUM()", "COUNT()", "TOTAL()", "ADD()"], answer: "SUM()" },
  { question: "データの平均を計算する関数はどれ？", choices: ["AVG()", "MEAN()", "MEDIAN()", "AVERAGE()"], answer: "AVG()" },
  { question: "条件に合致する最初の行を取得するキーワードは何？", choices: ["LIMIT 1", "FIRST 1", "FETCH 1", "GET 1"], answer: "LIMIT 1" },
  { question: "サブクエリを表すキーワードは何？", choices: ["SUBQUERY", "INNER QUERY", "NESTED QUERY", "INLINE QUERY"], answer: "SUBQUERY" },
  { question: "テーブルを削除するコマンドはどれ？", choices: ["DROP TABLE", "REMOVE TABLE", "DELETE TABLE", "ERASE TABLE"], answer: "DROP TABLE" }
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
