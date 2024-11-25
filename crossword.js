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
  