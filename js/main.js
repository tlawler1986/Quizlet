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

const sound1 = document.querySelector('#sound1');

 
/*----- event listeners -----*/
answersEls.forEach(btn => { 
    btn.addEventListener("click", handleAnswer);
});

submitBtn.addEventListener("click", handleSubmit);
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
    questionIdx = 0; 
    score = 0;
    answersEls.forEach(btn => btn.style.display = 'inline-block'); 
    submitBtn.style.display = "inline-block"; 
    render();
}
//Question/answer sources quizlet.com

function handleAnswer(evt) { 
    selectedBtn = evt.target; 
    selectedIdx = parseInt(selectedBtn.id.replace("btn","")) -1;
    questions[questionIdx].chosenAnswer = selectedIdx; 
    answersEls.forEach(btn => btn.classList.remove("selected"));
    selectedBtn.classList.add("selected"); 
    submitBtn.disabled = false; 
}

function handleSubmit() {
   currentQuestion = questions[questionIdx]; 
   if(currentQuestion.chosenAnswer === null) { 
    return;
   }
    if(currentQuestion.chosenAnswer === currentQuestion.correctAnswer) { 
          score++; 
    }
    questionIdx++;
    if (questionIdx === questions.length) { 
        renderResults();
    } else {
        render();
        sound1.play();
    }
}

function render() {
    currentQuestion = questions[questionIdx]; 
    questionEl.textContent = currentQuestion.question; 
    answersEls.forEach((btn, idx) => { 
        btn.textContent = currentQuestion.answers[idx]; 
        btn.classList.remove("selected"); 
        btn.style.display = 'inline-block'; 
    });
    scoreEl.textContent = `Score: ${score}`; 
    submitBtn.disabled = true; 
    submitBtn.style.display = "inline-block"; 
}

function renderResults() {
    questionEl.textContent = "Can I trust you on the Range?"; 
    answersEls.forEach(btn => btn.style.display = 'none'); 
    submitBtn.style.display = "none"; 
    scoreEl.textContent = `Final Score: ${score} / ${questions.length}`; 
}