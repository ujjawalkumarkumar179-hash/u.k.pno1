import { showCertificate } from "./certificate.js";
import { biologyChapter1 } from "./questions/biology-ch1.js";
import { biologyChapter2 } from "./questions/biology-ch2.js";
let questions = [];

const chapter = new URLSearchParams(window.location.search).get("chapter");

if (chapter === "1") {
    questions = biologyChapter1;
} else if (chapter == "2" || chapter == 2) {
    
    questions = biologyChapter2;
} else {
    questions = biologyChapter1; // Default
}
let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");


// ===============================
// Question दिखाने का Function
// ===============================

function loadQuestion() {

    const q = questions[currentQuestion];

    questionBox.innerHTML =
        `<h3>प्रश्न ${currentQuestion + 1}: ${q.question}</h3>`;

    optionsBox.innerHTML = "";

    q.options.forEach((option, index) => {

        const btn = document.createElement("button");
        btn.className = "optionBtn";
        btn.innerText = option;

        btn.onclick = () => {

            selectedAnswer = index;

            document.querySelectorAll(".optionBtn").forEach((b) => {
                b.style.background = "#ffffff";
                b.style.color = "#000000";
            });

            btn.style.background = "#0A3D91";
            btn.style.color = "#ffffff";
        };

        optionsBox.appendChild(btn);

    });

}

// ===============================
// Next Button
// ===============================

nextBtn.addEventListener("click", () => {

    if (selectedAnswer === -1) {
        alert("पहले एक उत्तर चुनें।");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    selectedAnswer = -1;
    currentQuestion++;

    if (currentQuestion >= questions.length) {

        questionBox.innerHTML = `
        <h2>🎉 टेस्ट पूरा हुआ!</h2>
        <h3>आपका स्कोर : ${score} / ${questions.length}</h3>
        `;

        optionsBox.innerHTML = "";
        nextBtn.style.display = "none";

    const studentName = localStorage.getItem("studentName") || "Student";

showCertificate(
    studentName,
    "Biology",
    "Chapter 1 Test",
    score,
    questions.length
);
        

        return;
    }

    loadQuestion();

});

// पहला प्रश्न दिखाओ
loadQuestion();
