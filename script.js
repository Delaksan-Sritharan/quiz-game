// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions
const quizQuestions = [
    {
        question: "What is the SI unit of force?",
        answers: [
            { text: "Joule", correct: false },
            { text: "Watt", correct: false },
            { text: "Newton", correct: true },
            { text: "Pascal", correct: false },
        ],
    },
    {
        question: "Which of the following describes the relationship between force, mass, and acceleration?",
        answers: [
            { text: "Ohm's Law", correct: false },
            { text: "Newton's First Law", correct: false },
            { text: "Newton's Second Law", correct: true },
            { text: "Law of Conservation of Energy", correct: false },
        ],
    },
    {
        question: "What is the speed of light in a vacuum (approximately)?",
        answers: [
            { text: "3 x 10^5 m/s", correct: false },
            { text: "3 x 10^8 km/s", correct: false },
            { text: "3 x 10^8 m/s", correct: true },
            { text: "3 x 10^10 m/s", correct: false },
        ],
    },
    {
        question: "What phenomenon occurs when a wave changes direction upon entering a new medium?",
        answers: [
            { text: "Diffraction", correct: false },
            { text: "Interference", correct: false },
            { text: "Refraction", correct: true },
            { text: "Reflection", correct: false },
        ],
    },
    {
        question: "Which type of energy is stored in an object due to its position or state?",
        answers: [
            { text: "Kinetic energy", correct: false },
            { text: "Thermal energy", correct: false },
            { text: "Potential energy", correct: true },
            { text: "Electrical energy", correct: false },
        ],
    },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length
maxScoreSpan.textContent = quizQuestions.length;

// event listeners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    // reset vars

    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()

}

function showQuestion() {
    //reset state
    answerDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    // explain this in a second
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        // what is dataset? it's a property of the buttomm element that allows you to store custom data
        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersContainer.appendChild(button);
    }
    )
}

function selectAnswer(event) {
    // optimization cehck
    if (answerDisabled) return

    answerDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // todo: explain this in a sec
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    })
    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(
        () => {
            currentQuestionIndex++;

            //check if there are more questions or if the quiz is over
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, 1000)
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Perfect Score! You are a genius!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You have a strong understanding of physics.";
    }
    else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! You have a decent understanding of physics.";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Keep trying! You can improve your physics knowledge.";
    } else {
        resultMessage.textContent = "Don't give up! Practice makes perfect.";
    }

}

function restartQuiz() {
    resultScreen.classList.remove("active");
    startQuiz();
}