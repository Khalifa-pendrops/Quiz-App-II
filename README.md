# Quiz App

---

## Description

This is a mini quiz application built with HTML, CSS and JavaScript. The questions are stored in a array of objects containing options to each question in the questions.js file, which is imported into the script.js file that has the logic for the quiz application. The application has a progress indicator which increments when a question has been answered and the next button is clicked, indicating the progress of the user. There is a previuos button that takes the user back to the previous question, deactivating the active state of the previous answer and allowing the user to answer that question once again, while updating the progress indicator. A score is displayed as an alert message at the end of the quiz.

---

## Technologies used

1. HTML
2. CSS
3. JavaScript

---

## How to use system

1. fork this repository

2. naviagte to the file directory

3. open the HTML file on the browser via live server and test the application

---

## Key features

1. Stores selected answers

- a selectedAnswer object keeps track of the user's selections

2. Unselect previous answers when selecting a new one

- unselectAnswer() removes the .active class from the previously selected buttons

3. Re-answer prompt when going back

- if the user goes back to a question without an answer, the next button remains hidden until they select an answer again.

---

## Contribution

Contributions are welcome. Please make changes, push and create PR, and wait for feedback.
