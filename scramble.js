const gameData = [
  {
    scrambled: ["int", "main()", "{", "printf(", "'Hello, World!'", ");", "}"],
    correct: "int main() { printf('Hello, World!'); }",
    output: "Hello, World!",
  },
  {
    scrambled: ["#include", "<stdio.h>", "int", "sum(int", "a,", "int", "b)", "{", "return", "a", "+", "b;", "}"],
    correct: "#include <stdio.h> int sum(int a, int b) { return a + b; }",
    output: "The sum of two numbers is returned.",
  },
  {
    scrambled: ["for(int", "i=0;", "i<10;", "i++)", "{", "printf(", "'%d\\n',", "i);", "}"],
    correct: "for(int i=0; i<10; i++) { printf('%d\\n', i); }",
    output: "Prints numbers from 0 to 9, each on a new line.",
  },
];

let currentIndex = 0;
let userAnswer = [];

const gameContainer = document.getElementById("game");
const clueBox = document.getElementById("clue");
const userCodeBox = document.getElementById("user-code");
const resultBox = document.getElementById("result-box");
const correctCode = document.getElementById("correct-code");

function loadGame(index) {
  gameContainer.innerHTML = "";
  resultBox.style.display = "none";
  clueBox.textContent = gameData[index].output;
  userAnswer = [];
  userCodeBox.textContent = "";

  const { scrambled } = gameData[index];
  scrambled.sort(() => Math.random() - 0.5);

  scrambled.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.classList.add("scramble-item");
    span.dataset.index = i;
    span.addEventListener("click", () => selectWord(word, i));
    gameContainer.appendChild(span);
  });
}

function selectWord(word, index) {
  const selectedIndex = userAnswer.indexOf(index);

  if (selectedIndex === -1) {
    // Word is not yet selected; add it to the answer
    userAnswer.push(index);
    document.querySelector(`.scramble-item[data-index='${index}']`).style.visibility = "hidden";
  } else {
    // Word is already selected; remove it from the answer
    userAnswer.splice(selectedIndex, 1);
    document.querySelector(`.scramble-item[data-index='${index}']`).style.visibility = "visible";
  }

  // Update the user's code display
  const selectedWords = userAnswer.map((i) => gameData[currentIndex].scrambled[i]);
  userCodeBox.textContent = selectedWords.join(" ");
}

function checkAnswer() {
  const { correct } = gameData[currentIndex];
  const selectedWords = userAnswer.map((i) => gameData[currentIndex].scrambled[i]);
  const userCode = selectedWords.join(" ");

  resultBox.style.display = "block";

  if (userCode === correct) {
    resultBox.innerHTML = `<p style="color: green;">Congratulations! You got it right! 🎉</p>`;
    currentIndex++;
    if (currentIndex < gameData.length) {
      setTimeout(() => loadGame(currentIndex), 1500);
    } else {
      resultBox.innerHTML += `<p style="color: green;">You've completed the game! 🎉</p>`;
    }
  } else {
    resultBox.innerHTML = `
      <p style="color: red;">Oops! That's incorrect.</p>
      <p><strong>Correct Code:</strong></p>
      <pre>${correct}</pre>
    `;
  }
}

document.getElementById("check-answer").addEventListener("click", checkAnswer);

// Load the first game
loadGame(currentIndex);
