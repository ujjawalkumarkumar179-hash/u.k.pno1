<button onclick="loadQuestion()">Start Test</button>
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");

function loadQuestion() {
    let q = questions[currentQuestion];

    questionBox.innerHTML = 
    (currentQuestion + 1) + ". " + q.question;

    optionsBox.innerHTML = "";

    q.options.forEach(option => {
        let button = document.createElement("button");
        button.innerHTML = option;

        button.onclick = function () {
            checkAnswer(option);
        };

        optionsBox.appendChild(button);
    });
}

function checkAnswer(selected) {

    let correct = questions[currentQuestion].answer;

    if(selected === correct){
        score++;
    }

    nextBtn.style.display = "block";
}

nextBtn.onclick = function(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
        nextBtn.style.display = "none";
    }
    else{
        questionBox.innerHTML = "Test Complete";
        optionsBox.innerHTML = "";
        resultBox.innerHTML = 
        "आपका स्कोर: " + score + "/" + questions.length;
        nextBtn.style.display = "none";
    }
};


loadQuestion();
