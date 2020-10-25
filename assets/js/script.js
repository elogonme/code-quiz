// Main code
var quiz = [
    {
        id: 1,
        question:  'Why so JavaScript and Java have similar name?',
        1:  'JavaScript is a stripped-down version of Java',
        2:  `JavaScript's syntax is loosely based on Java's`,
        3:  `They both originated on the island of Java`,
        4:  'None of the above',
        ans: 2
    },

    {
        id: 2,
        question: `When a user views a page containing a JavaScript program, which machine actually executes the script?`,
        1:  `The User's machine running a Web browser`,
        2:  `The Web server`,
        3:  `A central machine deep within Netscape's corporate offices`,
        4:  `None of the above`,
        ans:  1
    },

    {
        id: 3,
        question:  'What are variables used for in JavaScript Programs?',
        1:  `Storing numbers, dates, or other values`,
        2:  `Varying randomly`,
        3:  `Causing high-school algebra flashbacks`,
        4:  `None of the above`,
        ans: 1
    },

    {
        id: 4,
        question:  'What should appear at the very end of your JavaScript?',
        1:  'The </script>',
        2:  'The <script>',
        3:  'The END statement',
        4:  'None of the above',
        ans: 1
    },

    {
        id: 5,  
        question: 'Which of the following are capabilities of functions in JavaScript?',
        1:  'Return a value',
        2:  'Accept parameters and Return a value',
        3:  'Accept parameters',
        4:  'None of the above',
        ans: 3
    },

    {
        id: 6,
        question:  'Which of the following is not a valid JavaScript variable name?',
        1:  '2names',
        2:  '_first_and_last_names',
        3:  'FirstAndLast',
        4:  'None of the above',
        ans: 1
    }
];


// Elements on page
var totalTime = 30;
var numberOfQuiz = quiz.length;
var correctAnswers = 0;
var timerEl = document.getElementById('timer'); // timer Element
var quizEl = document.getElementById('question'); // question Element
var ansListEl = document.getElementById('answers'); // question Element
var finalScoreEl = document.getElementById('highscore');
var quizPage = document.querySelector('.quiz-page');
var donePage = document.getElementById('done-page');
var msgEl = document.querySelector('.msg') // Correct or Wrong answer message Element
var quizNumber;
pickQuestion(); // Pick first question
// start timer
time = setInterval(function() {
    
    timer(totalTime);   
    if (totalTime <= 0) {
        clearInterval(time); // Stop timer
        localStorage.setItem('correctAnswers', correctAnswers); // Save number of correct answers to Local storage
        if (correctAnswers < 9) {
            correctAnswers = '0' + correctAnswers; // Add leading 0 if less than 9
        };
        finalScoreEl.textContent = correctAnswers; // Display final highscore
        quizPage.setAttribute('class', 'd-none');
        donePage.setAttribute('class', 'd-block');
        // window.location.href="highscores.html";
    };
    totalTime--;
}, 1000);

// pick random question functon
function pickQuestion(){
    // pick rundom number from 1 to total number of quiz
    quizNumber = Math.floor(Math.random() * numberOfQuiz);
    // output question and answers on page
    quizOutput(quizNumber); 
}

// wait on input from user
// output correct or wrong message
ansListEl.addEventListener('click', checkAnswer);
// if timer runs out or all questions anwered - display end of quiz message and score

// Enter initials and store name and score

// Timer function
function timer(sec){
    if (sec < 10) {
        sec = '0' + sec
    } else sec = sec.toString()
    timerEl.textContent = sec;
}

// Function to output Question and answers on page based on id number
function quizOutput(id) {
    quizEl.textContent = quiz[id].question;
    ansListEl.innerHTML = ''; // Clear all answers first
    for (var i = 1; i < 5; i++) {
        var ansEl = document.createElement('li');
        ansEl.textContent = i + '. ' + quiz[id][i];
        ansEl.setAttribute('data-index', i);
        ansListEl.appendChild(ansEl);
    }
};

// Function to handle checks on selected answer
function checkAnswer(event) {
    var element = event.target;
    if (!element.matches('li')) return; // guard if not li element is clicked
    var index = element.getAttribute('data-index'); // Get id of selected answer
    // compare input with correct answer
    if (index == quiz[quizNumber].ans) {
        displayMessage(true);
        correctAnswers++; // Increment correct answers count
        pickQuestion(); // Pick new Question
    } else {
        displayMessage(false);
        if ((totalTime - 10) > 0) {
            totalTime -= 10; // Subtract timer by 10 sec because wrong answer was selected
        } else totalTime = 0;
        pickQuestion(); // Pick new Question
    }
};

// Function to display message about correct or wrong answer
function displayMessage(msg) {
    if (msg) {
        msgEl.textContent = 'Correct'; // Displey "Correct" message
    } else {
        msgEl.textContent = 'Wrong!'; // Displey "Wrong" message
    }
    setTimeout(function() {msgEl.textContent = '';}, 1000); // Display message for 1 sec and then remove
}


