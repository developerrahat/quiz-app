

const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { options: "A programming language", correct: true },
      { options: "A type of coffee", correct: false },
      { options: "A car model", correct: false },
      { options: "A web browser", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { options: "Hyperlinks and Text Markup Language", correct: false },
      { options: "Home Tool Markup Language", correct: false },
      { options: "Hyper Text Markup Language", correct: true },
      { options: "Hyper Text Machine Language", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { options: "String", correct: false },
      { options: "Boolean", correct: false },
      { options: "Number", correct: false },
      { options: "Float", correct: true },
    ],
  },
  {
    question: "What is the purpose of CSS?",
    answers: [
      { options: "To structure web content", correct: false },
      { options: "To add interactivity to web pages", correct: false },
      { options: "To style web pages", correct: true },
      { options: "To manage server-side logic", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { options: "var", correct: false },
      { options: "let", correct: false },
      { options: "const", correct: false },
      { options: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    answers: [
      { options: "null", correct: false },
      { options: "undefined", correct: false },
      { options: "object", correct: true },
      { options: "number", correct: false },
    ],
  },
  {
    question: "Which of the following is a front-end framework?",
    answers: [
      { options: "React", correct: true },
      { options: "Node.js", correct: false },
      { options: "Django", correct: false },
      { options: "Laravel", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `addEventListener` method in JavaScript?",
    answers: [
      { options: "To create a new HTML element", correct: false },
      { options: "To attach an event handler to an element", correct: true },
      { options: "To remove an element from the DOM", correct: false },
      { options: "To style an element", correct: false },
    ],
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { options: "//", correct: true },
      { options: "/*", correct: false },
      { options: "#", correct: false },
      { options: "--", correct: false },
    ],
  },
  {
    question: "What is the result of `2 + '2'` in JavaScript?",
    answers: [
      { options: "4", correct: false },
      { options: "22", correct: true },
      { options: "NaN", correct: false },
      { options: "Error", correct: false },
    ],
  },
];



const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer_buttons')
const nextButton = document.getElementById('nextBtn')


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}



function showQuestion() {
  removeAllChild(answerButton)
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.options
    button.classList.add('ans_btn')
    answerButton.appendChild(button)
    if(answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    
  })
  
  
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === 'true'
  if(isCorrect) {
    selectBtn.classList.add('correct')
    score++
  }else{
    selectBtn.classList.add('incorrect')

  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct')
    }
    button.disabled = true;
  })
  nextButton.style.display = 'block'

}

function showScore() {
  removeAllChild(answerButton)
  questionElement.innerHTML = `You scored ${score}&#128525  out of ${questions.length}!`;
nextButton.innerHTML = 'Play Again'
nextButton.style.display = 'block'

}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    nextButton.style.display = 'none'
    showQuestion()
  }else{
    showScore()
  }
}

nextButton.addEventListener('click', function() {
  if(currentQuestionIndex < questions.length) {
    handleNextButton()
  }else{
    startQuiz()
  }
})

startQuiz()


function removeAllChild(parent) {
  while(parent.firstChild) {
    parent.firstChild.remove()
  }
}