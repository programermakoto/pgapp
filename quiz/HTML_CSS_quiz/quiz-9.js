const questions = [
  {
    question: "GitHubでプルリクエストを作成する目的は何ですか？",
    choices: [
      "SSHキーを追加する",
      "変更を提案する",
      "新しいリポジトリを作成する",
      "リポジトリを削除する",
      "リポジトリをフォークする",
    ],
    answer: "変更を提案する",
  },
  {
    question:
      "リポジトリを他のユーザーと共有するために使用する機能は？",
    choices: ["ブランチ", "フォーク", "コミット", "プッシュ", "コラボレーター"],
    answer: "コラボレーター",
  },
  {
    question:
      "新しい機能を独立して開発するために作成するものは？",
    choices: ["ブランチ", "ルリクエスト", "コミット", "イシュー", "フォーク"],
    answer: "ブランチ",
  },
  {
    question:
      "他人のリポジトリを自分のアカウントにコピーすることを？",
    choices: ["フォーク", "プッシュ", "コミット", "ブランチ", " イシュー"],
    answer: "フォーク",
  },
  {
    question:
      "GitHubのプルリクエスト機能でできることはどれですか？",
    choices: ["コードのマージ", "リポジトリの削除", "ローカルリポジトリの作成", "SSHキーの追加", "コミット履歴の編集"],
    answer: "コードのマージ",
  },
  {
    question:
      "GitHubのプロジェクトボード機能の主な用途は何ですか？",
    choices: ["タスク管理", "コードレビュー", "プルリクエスト作成", "コミットの管理", "リポジトリのフォーク"],
    answer: "タスク管理",
  },
  {
    question:
      "プルリクエストを作成する際に必要な手順は?",
    choices: ["リポジトリをクローンする", "ブランチを作成する", "プッシュする", "イシューを作成する", "コミットする"],
    answer: "ブランチを作成する",
  },
  {
    question:
      "プルリクエストを作成する際に必要な手順は?",
    choices: ["リポジトリをクローンする", "ブランチを作成する", "プッシュする", "イシューを作成する", "コミットする"],
    answer: "ブランチを作成する",
  },
];
let currentQuestionIndex = 0;
let correctCount = 0;

function displayQuestion(questionIndex) {
  const questionObj = questions[questionIndex];
  const questionElement = document.getElementById("question");
  questionElement.textContent = questionObj.question;

  const choicesElement = document.getElementById("choices");
  choicesElement.innerHTML = "";

  questionObj.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => checkAnswer(choice, questionObj.answer);
    li.appendChild(button);
    choicesElement.appendChild(li);
  });
}

function checkAnswer(selected, correct) {
  const feedbackElement = document.getElementById("feedback");
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
    feedbackElement.textContent = "";
    displayQuestion(currentQuestionIndex);
  }, 2000);
}

function nextQuestion() {
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = "";

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `<h1>結果発表</h1><p>${questions.length}問中<span>${correctCount}問</span>正解!!</p><br><a class="quiz-r-btn" href="quiz-9.html">もう一度する</a>`;
}

displayQuestion(0);
