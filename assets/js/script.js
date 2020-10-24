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
var totalTime = 10;
var numberOfQuiz = quiz.length;
var timerEl = document.getElementById('timer'); // timer Element
var quizEl = document.getElementById('question'); // question Element
var ansListEl = document.getElementById('answers'); // question Element
// start timer
time = setInterval(function() {
    totalTime--;
    timer(totalTime);   
    if (totalTime === 0) {
        clearInterval(time);
        console.log('time is up!');
        // End dialog
    }
}, 1000);
// pick random question
// pick rundom number from 1 to total number of quiz
var quizNumber = Math.floor(Math.random() * numberOfQuiz);
quizOutput(quizNumber);


// output question and answers on page
// wait on input from user
// compare input with correct answer
// output correct or wrong message
// subtract timer if message is wrong
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
    
    for (var i = 1; i < 5; i++) {
        var ansEl = document.createElement('li');
        ansEl.textContent = quiz[id][i];
        ansListEl.appendChild(ansEl);
    }
    
}

// Main code
