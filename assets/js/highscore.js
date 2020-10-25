var users = JSON.parse(localStorage.getItem('users')); // get user from localstorage
var userListEl = document.getElementById('user-list'); // user list Element

console.log(users);
userListEl.innerHTML = ''; // Clear any previous list
// Display list of users with highscores
for (var i  = 0; i < users.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = users[i].name + ' - ' + users[i].highscore;
    userListEl.appendChild(liElement);
}

function clearHighscore() {
    localStorage.removeItem('users');
    userListEl.innerHTML = ''; // Clear any previous list
}
