import { showCertificate } from "./certificate.js";

const questions = [

{
question: "जीव की संरचनात्मक एवं क्रियात्मक इकाई क्या है?",
options: ["ऊतक", "कोशिका", "अंग", "नाभिक"],
answer: 1
},
{
question: "पौधों में भोजन बनाने की प्रक्रिया कहलाती है?",
options: ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
answer: 1
},

{
question: "प्रकाश संश्लेषण के लिए कौन-सा वर्णक आवश्यक है?",
options: ["हीमोग्लोबिन", "क्लोरोफिल", "मेलानिन", "इंसुलिन"],
answer: 1
},

{
question: "मानव शरीर में रक्त का लाल रंग किसके कारण होता है?",
options: ["प्लाज्मा", "हीमोग्लोबिन", "WBC", "प्लेटलेट्स"],
answer: 1
},

{
question: "रक्त का तरल भाग क्या कहलाता है?",
options: ["RBC", "WBC", "प्लाज्मा", "प्लेटलेट"],
answer: 2
},

{
question: "हृदय में कितने कक्ष होते हैं?",
options: ["2", "3", "4", "5"],
answer: 2
},

{
question: "मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?",
options: ["यकृत", "अग्न्याशय", "थायरॉयड", "प्लीहा"],
answer: 0
},

{
question: "वृक्क का मुख्य कार्य क्या है?",
options: ["भोजन पचाना", "रक्त शुद्ध करना", "ऑक्सीजन पहुँचाना", "हार्मोन बनाना"],
answer: 1
},

{
question: "मनुष्य में श्वसन का मुख्य अंग कौन-सा है?",
options: ["हृदय", "फेफड़ा", "यकृत", "आमाशय"],
answer: 1
},

{
question: "DNA का पूरा नाम क्या है?",
options: [
"डीऑक्सीराइबोन्यूक्लिक अम्ल",
"राइबोन्यूक्लिक अम्ल",
"डाइऑक्साइड न्यूक्लिक अम्ल",
"डबल न्यूक्लियर अम्ल"
],
answer: 0
}

];
// ===============================
// MCQ System - Part 2
// ===============================

// Question दिखाने का Function
function loadQuestion() {

    const q = questions[currentQuestion];

    questionBox.innerHTML =
        `<h3>प्रश्न ${currentQuestion + 1}: ${q.question}</h3>`;

    optionsBox.innerHTML = "";

    q.options.forEach((option, index) => {

        optionsBox.innerHTML += `
            <button class="optionBtn"
                onclick="selectOption(${index})">
                ${option}
            </button>
        `;

    });

}

// Option Select
window.selectOption = function(index) {

    selectedAnswer = index;

    const buttons = document.querySelectorAll(".optionBtn");

    buttons.forEach((btn) => {
        btn.style.background = "#ffffff";
        btn.style.color = "#000000";
    });

    buttons[index].style.background = "#0A3D91";
    buttons[index].style.color = "#ffffff";

}
// ===============================
// MCQ System - Part 3
// ===============================

// Next Button
nextBtn.addEventListener("click", () => {

    // Answer Check
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    // Reset Selection
    selectedAnswer = -1;

    // Next Question
    currentQuestion++;

    // Quiz End
    if (currentQuestion >= questions.length) {

        questionBox.innerHTML = `
            <h2>🎉 टेस्ट पूरा हुआ!</h2>
            <h3>आपका स्कोर: ${score} / ${questions.length}</h3>
        `;
        // Certificate Show

import { showCertificate } from "./certificate.js";

showCertificate(
    studentName,
    "Biology",
    "Chapter 1 Test",
    score,
    questions.length
);

        optionsBox.innerHTML = "";
        nextBtn.style.display = "none";

        return;
    }

    // Load Next Question
    loadQuestion();

});

// पहला Question दिखाओ
loadQuestion();
