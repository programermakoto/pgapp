const questions = [
    // 1
    {
      question: "HTMLにjsを読み込むには何タグをしようすればいいでしょうか?", choices: [
        "stylesheet",
        "css",
        "script",
        "string",
        "strict"], answer: "script"
    },
    // 2
    {
      question: "コンソールにて処理を表示させたい", choices: [
        "string",
        "prompt",
        "printf",
        "scanf",
        "console.log"], answer: "console.log"
    },
    // 3
    {
      question: "コンソールにて処理を表示させたい", choices: [
        "string",
        "prompt",
        "printf",
        "scanf",
        "console.log"], answer: "console.log"
    },
    // 4
    {
      question: "演算にて余を出したい時の演算子は?", choices: [
        "+",
        "*",
        "%",
        "/",
        "-"], answer: "%"
    },
    // 5
    {
      question: "定数を定義したい", choices: [
        "console",
        "let",
        "const",
        "prompt",
        "scanf"], answer: "const"
    },
    // 6
    {
      question: "変数を定義したい", choices: [
        "console",
        "let",
        "const",
        "prompt",
        "scanf"], answer: "let"
    },
    // 7
    {
      question: "条件分岐をしたい", choices: [
        "if",
        "for",
        "while",
        "prompt",
        "scanf"], answer: "if"
    },
     // 8
     {
      question: "繰り返し処理をしたい", choices: [
        "if",
        "for",
        "let",
        "prompt",
        "scanf"], answer: "for"
    },
    // 9
    {
      question: "否定を意味する論理演算子は?", choices: [
        "&&",
        "||",
        "!=",
        "==",
        "*"], answer: "!="
    },
  
    // 10
    {
      question: "否定を意味する論理演算子は?", choices: [
        "&&",
        "||",
        "!=",
        "==",
        "*"], answer: "!="
    },


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