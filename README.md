# Quiz Game

This is a simple web-based quiz game that tests your knowledge of physics.

---

## Features

* **Multiple-choice questions:** Each question comes with several answer options.
* **Instant feedback:** See if your answer is correct or incorrect immediately.
* **Score tracking:** Your score is updated as you play.
* **Progress bar:** Visualize your progress through the quiz.
* **Result screen:** Get a summary of your performance at the end.
* **Responsive design:** Play seamlessly on various screen sizes.

---

## Website

---
## Start Screen

<img width="1440" alt="Screenshot 2025-05-21 at 9 39 47 PM" src="https://github.com/user-attachments/assets/5f87587a-270d-41ff-83a3-f1a84d4054e1" />

---
## Correct Answer

<img width="1440" alt="Screenshot 2025-05-21 at 9 44 36 PM" src="https://github.com/user-attachments/assets/94348f9a-40ba-4e6f-8875-126a3cf500f6" />

---
## Wrong Answer

<img width="1440" alt="Screenshot 2025-05-21 at 9 41 24 PM" src="https://github.com/user-attachments/assets/eec8dafc-a7ac-4571-bb7d-268499de3a27" />

---
## Results Screen

<img width="1440" alt="Screenshot 2025-05-21 at 9 41 43 PM" src="https://github.com/user-attachments/assets/0252cb9e-2e00-4c27-8fbc-c876993cac3a" />

---

## Technologies Used

* **HTML5:** For the basic structure of the web pages.
* **CSS3:** For styling and layout.
* **JavaScript (ES6+):** For game logic and interactivity.

---

## How to Play

1.  **Start the Quiz:** Click the "Start Quiz" button on the initial screen.
2.  **Answer Questions:** Read the question and click on the answer you believe is correct.
3.  **View Results:** After answering all questions, you'll see your final score and a personalized message based on your performance.
4.  **Restart:** Click the "Restart Quiz" button to play again.

---

## Project Structure

* `index.html`: The main HTML file containing the structure of the quiz game.
* `style.css`: The CSS file for styling the quiz interface.
* `script.js`: The JavaScript file containing the quiz logic, question data, and event handling.

---

## Customization

You can easily customize the quiz by modifying the `quizQuestions` array in the `script.js` file. Each question object should have:

* `question`: The text of the question.
* `answers`: An array of answer objects, where each object has:
    * `text`: The text of the answer option.
    * `correct`: A boolean indicating whether the answer is correct (`true`) or incorrect (`false`).

---

## Getting Started (Local Development)

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Delaksan-Sritharan/quiz-game.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd quiz-game
    ```
3.  **Open `index.html`:** Simply open the `index.html` file in your web browser.
