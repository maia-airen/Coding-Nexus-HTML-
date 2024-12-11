document.getElementById('checkAnswers').addEventListener('click', function () {
    const cells = document.querySelectorAll('.crossword input');
    let totalQuestions = 0;
    let correctAnswers = 0;
  
    cells.forEach(cell => {
      if (cell.dataset.letter) {
        totalQuestions++; // Count only the cells with letters as questions
        if (cell.value.toUpperCase() === cell.dataset.letter) {
          cell.style.backgroundColor = '#d4edda'; // Highlight correct answers in green
          correctAnswers++;
        } else {
          cell.style.backgroundColor = '#f8d7da'; // Highlight incorrect answers in red
        }
      }
    });
  
    // Calculate the score
    const score = Math.round((correctAnswers / totalQuestions) * 100);
  
    // Display the result and score
    const result = document.getElementById('result');
    if (correctAnswers === totalQuestions) {
      result.textContent = `Congratulations! All answers are correct! Your score: ${score}%`;
      result.style.color = 'green';
    } else {
      result.textContent = `Some answers are incorrect. Your score: ${score}%`;
      result.style.color = 'red';
    }
  });
  
  const crosswordItems = [
    {
        clues: {
            across: ["for (int i = 0; i &lt; _____; i++)", "if (_____ == true)"],
            down: ["System.out.println('Hello, _____!')"]
        },
        grid: [
            ["N", "U", "M", ""],
            ["", "O", "", ""],
            ["C", "O", "N", "D"],
            ["W", "O", "R", "L"]
        ]
    },
    {
        clues: {
            across: ["A data type for true or false: _____", "To loop a block of code repeatedly: _____"],
            down: ["An ordered collection of elements: _____"]
        },
        grid: [
            ["B", "O", "O", "L"],
            ["", "", "F", ""],
            ["A", "R", "R", "A"],
            ["Y", "", "", ""]
        ]
    },
    {
        clues: {
            across: ["A block of code that performs a specific task: _____", "Used to declare a variable: _____"],
            down: ["A collection of key-value pairs: _____"]
        },
        grid: [
            ["F", "U", "N", "C"],
            ["", "T", "I", "O"],
            ["D", "E", "C", "L"],
            ["", "", "", "A"]
        ]
    },
    {
        clues: {
            across: ["To stop a loop prematurely: _____", "The opposite of true: _____"],
            down: ["A conditional statement: _____"]
        },
        grid: [
            ["B", "R", "E", "A"],
            ["", "K", "", ""],
            ["F", "A", "L", "S"],
            ["E", "", "", ""]
        ]
    },
    {
        clues: {
            across: ["A value that doesn't change: _____", "To output text to the console: _____"],
            down: ["A method without a return value: _____"]
        },
        grid: [
            ["C", "O", "N", "S"],
            ["", "T", "", ""],
            ["P", "R", "I", "N"],
            ["T", "", "", ""]
        ]
    },
    {
        clues: {
            across: ["A blueprint for creating objects: _____", "An individual instance of a class: _____"],
            down: ["A function that initializes an object: _____"]
        },
        grid: [
            ["C", "L", "A", "S"],
            ["", "S", "", ""],
            ["O", "B", "J", "E"],
            ["C", "T", "", ""]
        ]
    },
    {
        clues: {
            across: ["To handle errors: _____", "To repeat a block of code while a condition is true: _____"],
            down: ["A keyword to define a variable: _____"]
        },
        grid: [
            ["T", "R", "Y", ""],
            ["", "", "W", ""],
            ["H", "I", "L", "E"],
            ["V", "A", "R", ""]
        ]
    },
    {
        clues: {
            across: ["An array method to remove the last element: _____", "To add an element to an array: _____"],
            down: ["A data type for decimal numbers: _____"]
        },
        grid: [
            ["P", "O", "P", ""],
            ["", "", "P", "U"],
            ["S", "H", "", "F"],
            ["L", "O", "A", "T"]
        ]
    },
    {
        clues: {
            across: ["A way to access a property of an object: _____", "To combine two strings: _____"],
            down: ["A loop that iterates over an array: _____"]
        },
        grid: [
            ["D", "O", "T", ""],
            ["", "", "C", "O"],
            ["N", "C", "A", "T"],
            ["F", "O", "R", ""]
        ]
    },
    {
        clues: {
            across: ["A data structure for unique values: _____", "A type of loop with a fixed number of iterations: _____"],
            down: ["To stop a function and return a value: _____"]
        },
        grid: [
            ["S", "E", "T", ""],
            ["", "", "F", ""],
            ["O", "R", "", "L"],
            ["O", "O", "P", ""]
        ]
    }
];

let currentItemIndex = 0;

function loadCrossword(index) {
    const cluesContainer = document.getElementById("cluesList");
    const crosswordTable = document.getElementById("crosswordTable");

    // Clear existing clues and table
    cluesContainer.innerHTML = `
        <li><strong>Across:</strong></li>
        ${crosswordItems[index].clues.across.map(clue => `<li>${clue}</li>`).join("")}
        <li><strong>Down:</strong></li>
        ${crosswordItems[index].clues.down.map(clue => `<li>${clue}</li>`).join("")}
    `;

    crosswordTable.innerHTML = crosswordItems[index].grid
        .map(
            row => `<tr>${row
                .map(
                    cell =>
                        `<td><input type="text" maxlength="1" data-letter="${cell || ""}" ${
                            cell ? "" : 'disabled'
                        }></td>`
                )
                .join("")}</tr>`
        )
        .join("");
}

// Event listeners for navigation buttons
document.getElementById("prevItem").addEventListener("click", () => {
    if (currentItemIndex > 0) {
        currentItemIndex--;
        loadCrossword(currentItemIndex);
    }
});

document.getElementById("nextItem").addEventListener("click", () => {
    if (currentItemIndex < crosswordItems.length - 1) {
        currentItemIndex++;
        loadCrossword(currentItemIndex);
    }
});

// Initialize the first crossword
loadCrossword(currentItemIndex);
