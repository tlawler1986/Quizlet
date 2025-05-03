/*----- constants -----*/


  
/*----- state variables -----*/
let questions; 
let score;
let questionIdx;


 
 /*----- cached elements  -----*/
const questionEl = document.querySelector('.question');
const answersEls = document.querySelectorAll('.btn');
const scoreEl = document.querySelector('#score');   
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');

 
/*----- event listeners -----*/
answersEls.forEach(btn => { // add event listener to all answer buttons
    btn.addEventListener("click", handleAnswer);
});

submitBtn.addEventListener("click", handleSubmit); // add event listener to submit button
resetBtn.addEventListener("click", init);
 
/*----- functions -----*/
init();

function init() {
    questions = [
        {
            question: "To shoot safely you must know",
            answers: ['Your target', 'Your target\'s surroundings', 'Your target\'s target', 'All of the above'],
            correctAnswer: 3,
            chosenAnswer: null
        },
        {
            question: "What is not a part of a cartridge or a shotgun shell?",
            answers: ['Slug', 'Choke', 'Primer', 'Wad'],
            correctAnswer: 1,
            chosenAnswer: null
        },
        {
            question: "What types of sights do handgun shooters use?",
            answers: ['Iron sights', 'Red dot sights', 'Telescopic sights', 'All of the above'],
            correctAnswer: 3,
            chosenAnswer: null
        },
        {
            question: "What is a shotgun choke?",
            answers: ['A device that controls the spread of shot', 'A type of shotgun shell', 'A type of shotgun', 'A type of shotgun sight'],
            correctAnswer: 0,
            chosenAnswer: null
        },
        {
            question: "The first cartidge loaded into a magazine presses against the?",
            answers: ['Spring', 'Follower', 'Bolt', 'Chamber'],
            correctAnswer: 1,
            chosenAnswer: null
        },
        {
            question: "The part of the gun which strikes the primer is called the?",
            answers: ['Hammer', 'Firing pin', 'Breech', 'Chamber'],
            correctAnswer: 1,
            chosenAnswer: null
        },
        {
            question: "The part of the gun which holds the cartridge is called the?",
            answers: ['Pistol Assembly', 'Breech', 'Chamber', 'Receiver'],
            correctAnswer: 2,
            chosenAnswer: null
        },
        {
            question: "What action type cannot have a magazine?",
            answers: ['Revolver', 'Semi-automatic', 'Bolt-action', 'Pump-action'],
            correctAnswer: 0,
            chosenAnswer: null
        },
        {
            question: "What is the maximum dangerous range of handgun ammunition, according to manufacturer?",
            answers: ['1000yds', '1500yds', '2500yds', '3000yds'],
            correctAnswer: 2,
            chosenAnswer: null
        },
        {
            question: "What's not a component of the lower receiver?",
            answers: ['Trigger', 'Hammer', 'Bolt carrier group', 'Safety selector'],
            correctAnswer: 2,
            chosenAnswer: null
        }   
    ];
    questionIdx = 0; //
    score = 0;
    answersEls.forEach(btn => btn.style.display = 'inline-block'); // show all answer buttons
    submitBtn.style.display = "inline-block"; // show submit button
    render();
}
//Question/answer sources quizlet.com

function handleAnswer(evt) { // handle answer button click
    selectedBtn = evt.target; // get the button that was clicked
    selectedIdx = parseInt(selectedBtn.id.replace("btn","")) -1; // get the index of the answer
    questions[questionIdx].chosenAnswer = selectedIdx; // set the choosen answer in the questions array
    answersEls.forEach(btn => btn.classList.remove("selected"));// remove selected class from all buttons
    selectedBtn.classList.add("selected"); // add selected class to the clicked button
    submitBtn.disabled = false; // enable submit button
}

function handleSubmit() {
   currentQuestion = questions[questionIdx]; // get the current question
   if(currentQuestion.chosenAnswer === null) { // check if an answer was selected
    return;
   }
    if(currentQuestion.chosenAnswer === currentQuestion.correctAnswer) { // check if the answer is correct
          score++; // increment score
    }
    questionIdx++;
    if (questionIdx === questions.length) { // check if all questions have been answered
        renderResults();
    } else {
        render();
    }
}

function render() {
    currentQuestion = questions[questionIdx]; // get the current question
    questionEl.textContent = currentQuestion.question; // set the question text
    answersEls.forEach((btn, idx) => { // loop through all answer buttons
        btn.textContent = currentQuestion.answers[idx]; // set the button text to the answer
        btn.classList.remove("selected"); // remove selected class from all buttons
        btn.style.display = 'inline-block'; // show all answer buttons
    });
    scoreEl.textContent = `Score: ${score}`; // set the score text
    submitBtn.disabled = true; // disable submit button
    submitBtn.style.display = "inline-block"; // show submit button
}

function renderResults() {
    questionEl.textContent = "Can I trust you on the Range?"; // set the question text to results
    answersEls.forEach(btn => btn.style.display = 'none'); // clear the answers
    submitBtn.style.display = "none"; // hide the next button
    scoreEl.textContent = `Final Score: ${score} / ${questions.length}`; // set the final score text
}