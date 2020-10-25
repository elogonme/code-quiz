var correctAnswers = localStorage.getItem('correctAnswers'); // get highscore from localstorage
var highscoreEl = document.getElementById('highscore'); // highscore span Elelment

// Load correct answers number from last quiz and display as highscore
if (!correctAnswers) {
    correctAnswers = 0;
}
if (correctAnswers < 9) {
    highscoreEl.textContent = '0' + correctAnswers; // Add leading 0 if less than 9
} else highscoreEl.textContent = correctAnswers;

function clearHighscore() {
    localStorage.removeItem('correctAnswers');
    highscoreEl.textContent = '00';
}