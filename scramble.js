const gameData = [
  {
    code: "int main() { printf(\"Hello, World!\\n\"); return 0; }",
    output: "Hello, World!"
  },
  {
    code: "#include <stdio.h>\nint main() { int a = 5, b = 10; printf(\"%d\", a + b); return 0; }",
    output: "15"
  },
  {
    code: "for(int i = 0; i < 3; i++) { printf(\"%d \", i); }",
    output: "0 1 2 "
  },
  {
    code: "int factorial(int n) { return n == 0 ? 1 : n * factorial(n - 1); }\nint main() { printf(\"%d\", factorial(4)); return 0; }",
    output: "24"
  },
  {
    code: "int main() { printf(\"%d\", 10 > 5 ? 10 : 5); return 0; }",
    output: "10"
  },
  {
    code: "int main() { int arr[] = {1, 2, 3, 4}; printf(\"%d\", arr[2]); return 0; }",
    output: "3"
  },
  {
    code: "#include <math.h>\nint main() { printf(\"%.2f\", sqrt(16)); return 0; }",
    output: "4.00"
  },
  {
    code: "int main() { int x = 5; x += 10; printf(\"%d\", x); return 0; }",
    output: "15"
  },
  {
    code: "int main() { int x = 10; if (x % 2 == 0) printf(\"Even\"); else printf(\"Odd\"); return 0; }",
    output: "Even"
  },
  {
    code: "#include <string.h>\nint main() { char str[] = \"Hello\"; printf(\"%lu\", strlen(str)); return 0; }",
    output: "5"
  },
  {
    code: "int main() { printf(\"%d\", (5 > 3) && (3 < 7)); return 0; }",
    output: "1"
  },
  {
    code: "int main() { printf(\"%d\", (10 > 20) || (5 < 10)); return 0; }",
    output: "1"
  },
  {
    code: "#include <stdio.h>\nint main() { printf(\"%c\", 'A' + 2); return 0; }",
    output: "C"
  },
  {
    code: "int main() { int x = 5; printf(\"%d\", ++x); return 0; }",
    output: "6"
  },
  {
    code: "int main() { printf(\"%f\", 5.0 / 2); return 0; }",
    output: "2.500000"
  },
  {
    code: "int main() { int x = 1; while (x <= 3) { printf(\"%d\", x); x++; } return 0; }",
    output: "123"
  },
  {
    code: "int main() { for (int i = 1; i <= 5; i++) { if (i == 3) continue; printf(\"%d \", i); } return 0; }",
    output: "1 2 4 5 "
  },
  {
    code: "int main() { int sum = 0; for (int i = 1; i <= 5; i++) sum += i; printf(\"%d\", sum); return 0; }",
    output: "15"
  },
  {
    code: "int main() { int a = 10; int b = 5; printf(\"%d\", a / b); return 0; }",
    output: "2"
  },
  {
    code: "#include <stdio.h>\nint main() { char str[] = \"C Programming\"; printf(\"%s\", str); return 0; }",
    output: "C Programming"
  }
];

let currentIndex = 0;
let score = 0;
const totalQuestions = gameData.length;
const codeSnippet = document.getElementById("code-snippet");
const userAnswerInput = document.getElementById("user-answer");
const resultMessage = document.getElementById("result-message");

function loadGame(index) {
  const { code } = gameData[index];
  codeSnippet.textContent = code;
  userAnswerInput.value = "";
  resultMessage.textContent = "";
}

function checkAnswer() {
  const userAnswer = userAnswerInput.value.trim();
  const correctAnswer = gameData[currentIndex].output.trim();

  if (userAnswer === correctAnswer) {
    resultMessage.innerHTML = "<p style='color: green;'>Correct! 🎉</p>";
    score++; // Increment score
  } else {
    resultMessage.innerHTML = `
      <p style='color: red;'>Incorrect. Try again!</p>
      <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
    `;
  }

  currentIndex++;
  if (currentIndex < gameData.length) {
    setTimeout(() => loadGame(currentIndex), 1500);
  } else {
    // Display final score
    resultMessage.innerHTML = `
      <p style='color: green;'>You've completed the game! 🎉</p>
      <p><strong>Your Score:</strong> ${score} / ${totalQuestions}</p>
    `;
  }
}

document.getElementById("check-answer").addEventListener("click", checkAnswer);


document.getElementById('prev-button').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadGame(currentIndex);
  }
});

document.getElementById('next-button').addEventListener('click', () => {
  if (currentIndex < gameData.length - 1) {
    currentIndex++;
    loadGame(currentIndex);
  }
});

// Load the first game
loadGame(currentIndex);
