var user = JSON.parse(localStorage.getItem('user')); // get user from localstorage
var highscoreEl = document.getElementById('highscore'); // highscore span Elelment
var highscore;
// Load correct answers number from last quiz and display as highscore
if (!user) {
    user = {};
    user.highscore = 0;
}
highscoreEl.textContent = user.highscore;

function clearHighscore() {
    localStorage.removeItem('correctAnswers');
    localStorage.removeItem('user');
    highscoreEl.textContent = '00';
}