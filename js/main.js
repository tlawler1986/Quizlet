  /*----- constants -----*/


  
  
  
  
  
  /*----- state variables -----*/
let questions;
let score;
let questionIdx;


 
 /*----- cached elements  -----*/
const questionEl = document.querySelector('#question');
const answerEls = document.querySelectorAll('.answer');
const scoreEl = document.querySelector('#score');   
const submitBtn = document.querySelector('#submit');

 
 
 
 
 
 
  /*----- event listeners -----*/
document.querySelector("btn").addEventListener("click", handleAnswer);
document.querySelector("#submit").addEventListener("click", handleSubmit);

 
 
 
 
 
 
  /*----- functions -----*/
  init();

function init() {
    questions = [
        {
            question: "To shoot safely you must know",
            answers: ['Your target', 'You target\'s surroundings', 'Your target\'s target', 'All of the above'],
            correctAnswer: 3,
            choosenAnswer: null
        },
        {
            question: "What is not a part of a crtridge or a shotgun shell?",
            answers: ['Slug', 'Choke', 'Primer', 'Wad'],
            correctAnswer: 1,
            choosenAnswer: null
        },
        {
            question: "What types of sights do handgun shooters use?",
            answers: ['Iron sights', 'Red dot sights', 'Telescopic sights', 'All of the above'],
            correctAnswer: 3,
            choosenAnswer: null
        },
        {
            question: "What is a shotgun choke?",
            answers: ['A device that controls the spread of shot', 'A type of shotgun shell', 'A type of shotgun', 'A type of shotgun sight'],
            correctAnswer: 0,
            choosenAnswer: null
        },
        {
            question: "The first cartidge loaded into a magazine presses against the?",
            answer: ['Spring', 'Follower', 'Bolt', 'Chamber'],
            correctAnswer: 1,
            choosenAnswer: null
        },
        {
            question: "The part of the gun which strikes the primer is called the?",
            answers: ['Hammer', 'Firing pin', 'Breech', 'Chamber'],
            correctAnswer: 1,
            choosenAnswer: null
        },
        {
            question: "The part of the gun which holds the cartridge is called the?",
            answers: ['Barrel', 'Breech', 'Chamber', 'Receiver'],
            correctAnswer: 0,
            choosenAnswer: null
        },
        {
            question: "What action type cannot have a magazine?",
            answers: ['Revolver', 'Semi-automatic', 'Bolt-action', 'Pump-action'],
            correctAnswer: 0,
            choosenAnswer: null
        },
        {
            question: "What is the maximum dangrous range of handgun ammunition, according to manufacturer?",
            answers: ['1000yds', '1500yds', '2500yds', '3000yds'],
            correctAnswer: 2,
            choosenAnswer: null
        },
        {
            question: "Whats not a component of the lower receiver?",
            answers: ['Trigger', 'Hammer', 'Bolt carrier group', 'Safety selector'],
            correctAnswer: 2,
            choosenAnswer: null
        }   
    ];
    questionIdx = 0;
    score = 0;
    render();
}



    


    //Question/answer sources quizlet.com