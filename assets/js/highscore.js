var users = JSON.parse(localStorage.getItem('users')); // get user from localstorage
var userListEl = document.getElementById('user-list'); // user list Element

userListEl.innerHTML = ''; // Clear any previous list from page

// Display list of users with highscores only if there are saved users
if (users) {
    // Sort users from high to low score
    users.sort(function(a,b) {
        return b.highscore - a.highscore;
    });

    for (var i  = 0; i < users.length; i++) {
        var liElement = document.createElement('li');
        liElement.textContent = users[i].name + ' - ' + users[i].highscore;
        userListEl.appendChild(liElement);
    }
} else userListEl.innerHTML = 'No records';

function clearHighscore() {
    localStorage.removeItem('users');
    userListEl.innerHTML = ''; // Clear any previous list
}
