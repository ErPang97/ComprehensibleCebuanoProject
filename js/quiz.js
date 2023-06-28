const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["A. Paris", "B. London", "C. Rome", "D. Berlin"],
    answer: "A. Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["A. Mars", "B. Jupiter", "C. Earth", "D. Saturn"],
    answer: "B. Jupiter"
  }
];

// Initial state
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Function to show the question and answer fields
function showQuestion() {

  // Get the current question item
  const currentQuestionItem = quizData[currentQuestionIndex];

  // Extract the question and answer data from the current question item
  const question = currentQuestionItem.question;

  // Display the current question
  questionElement.textContent = question;

  answerButtons.replaceChildren();

  // Loop to display answer choices:
  currentQuestionItem.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerHTML = choice;
    answerButtons.appendChild(button);
  });

}

// Function to handle next button click
function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Function to handle previous button click
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}


// Attach event listeners to the buttons
document.getElementById("next").addEventListener("click", nextQuestion);
document.getElementById("previous").addEventListener("click", previousQuestion);

// Call the function to start the quiz
startQuiz();



