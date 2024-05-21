var num = 0;
const questions = [
    {
        question: "What does HTML stand for?",
        optionA: "Hyper Text Markup Language",
        optionB: "High Tech Markup Language",
        optionC: "Hyperlink and Text Markup Language",
        optionD: "High Text Markup Language",
        correct: "A"
    },    

    {
        question: "What does CSS stand for?",
        optionA: "Creative Style Sheets",
        optionB: "Cascading Style Sheets",
        optionC: "Computer Style Sheets",
        optionD: "Colorful Style Sheets",
        correct: "B"
    },

    {
        question: "How to center align text horizontally?",
        optionA: "text-align: center;",
        optionB: "align: center;",
        optionC: "horizontal-align: center;",
        optionD: "center-align: text;",
        correct: "A"
    },
    
]
var score = 0;

const attempted = document.querySelector('.attempted');
const optionA = document.querySelector('.A');
const optionB = document.querySelector('.B');
const optionC = document.querySelector('.C');
const optionD = document.querySelector('.D');
const fill = document.querySelector('.fill');
const scoreElement = document.querySelector('.score');
const endScore = document.querySelector('.end-score h2');
const playBtn = document.querySelector('.play-btn');


function loadQuestion() {
    const questionElement = document.querySelector('#question');
    const optionAElement = document.querySelector('.A .text');
    const optionBElement = document.querySelector('.B .text');
    const optionCElement = document.querySelector('.C .text');
    const optionDElement = document.querySelector('.D .text');

    questionElement.innerHTML = questions[num].question;
    optionAElement.innerHTML = questions[num].optionA;
    optionBElement.innerHTML = questions[num].optionB;
    optionCElement.innerHTML = questions[num].optionC;
    optionDElement.innerHTML = questions[num].optionD;
}

function updateQuestion() {
    num++;
    attempted.innerHTML = `${num}/3`;
    fill.style.width = `${(num / 3) * 100}%`;
    fill.style.transition = 'width 0.2s ease ';
    if (num === 3) {
        setTimeout(function () {
            window.location.href = "ending.html";
        }, 2000);

    }

    else {
        loadQuestion();
        optionA.style.backgroundColor = " rgb(140, 255, 255)";
        optionB.style.backgroundColor = " rgb(140, 255, 255)";
        optionC.style.backgroundColor = " rgb(140, 255, 255)";
        optionD.style.backgroundColor = " rgb(140, 255, 255)";
    }
}

function checkAnswer(optionElement, option) {
    if (option === questions[num].correct) {
        score+=10;
        localStorage.setItem('endScore', score);
        scoreElement.innerHTML = `Score : ${score}`;
        optionElement.style.backgroundColor = 'rgb(0, 200, 0)';
    }
    else {
        optionElement.style.backgroundColor = 'rgb(200, 0, 0)';
    }
}
optionA.addEventListener('click', function () {
    checkAnswer(optionA, 'A');
    setTimeout(function () {
        updateQuestion();
    }, 1000);
});
optionB.addEventListener('click', function () {
    checkAnswer(optionB, 'B');
    setTimeout(function () {
        updateQuestion();
    }, 1000);
});
optionC.addEventListener('click', function () {
    checkAnswer(optionC, 'C');
    setTimeout(function () {
        updateQuestion();
    }, 1000);
});
optionD.addEventListener('click', function () {
    checkAnswer(optionD, 'D');
    setTimeout(function () {
        updateQuestion();
    }, 1000);
});

loadQuestion();



