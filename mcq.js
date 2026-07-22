import { showCertificate } from "./certificate.js";

let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const nextBtn = document.getElementById("nextBtn");

const questions = [

{
question:"जीव की संरचनात्मक एवं क्रियात्मक इकाई क्या है?",
options:["ऊतक","कोशिका","अंग","नाभिक"],
answer:1
},
{
question:"पौधों में भोजन बनाने की प्रक्रिया कहलाती है?",
options:["श्वसन","प्रकाश संश्लेषण","वाष्पोत्सर्जन","पाचन"],
answer:1
},
{
question:"प्रकाश संश्लेषण के लिए कौन-सा वर्णक आवश्यक है?",
options:["हीमोग्लोबिन","क्लोरोफिल","मेलानिन","इंसुलिन"],
answer:1
},
{
question:"प्रकाश संश्लेषण के लिए आवश्यक गैस कौन-सी है?",
options:["ऑक्सीजन","कार्बन डाइऑक्साइड","नाइट्रोजन","हाइड्रोजन"],
answer:1
},
{
question:"मानव शरीर में रक्त का लाल रंग किसके कारण होता है?",
options:["प्लाज्मा","हीमोग्लोबिन","WBC","प्लेटलेट"],
answer:1
},
{
question:"रक्त का तरल भाग क्या कहलाता है?",
options:["RBC","WBC","प्लाज्मा","प्लेटलेट"],
answer:2
},
{
question:"हृदय में कितने कक्ष होते हैं?",
options:["2","3","4","5"],
answer:2
},
{
question:"मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?",
options:["यकृत","अग्न्याशय","थायरॉयड","प्लीहा"],
answer:0
},
{
question:"वृक्क का मुख्य कार्य क्या है?",
options:["भोजन पचाना","रक्त शुद्ध करना","ऑक्सीजन पहुँचाना","हार्मोन बनाना"],
answer:1
},
{
question:"मनुष्य में श्वसन का मुख्य अंग कौन-सा है?",
options:["हृदय","फेफड़ा","यकृत","आमाशय"],
answer:1
},
{
question:"DNA का पूरा नाम क्या है?",
options:[
"डीऑक्सीराइबोन्यूक्लिक अम्ल",
"राइबोन्यूक्लिक अम्ल",
"डाइऑक्साइड न्यूक्लिक अम्ल",
"डबल न्यूक्लियर अम्ल"
],
answer:0
},
{
question:"RNA का पूरा नाम क्या है?",
options:[
"राइबोन्यूक्लिक अम्ल",
"डीऑक्सीराइबोन्यूक्लिक अम्ल",
"न्यूक्लिक प्रोटीन",
"इनमें से कोई नहीं"
],
answer:0
},
{
question:"श्वसन के दौरान कौन-सी गैस बाहर निकलती है?",
options:["ऑक्सीजन","कार्बन डाइऑक्साइड","नाइट्रोजन","हाइड्रोजन"],
answer:1
},
{
question:"मनुष्य में पाचन कहाँ से शुरू होता है?",
options:["मुख","आमाशय","छोटी आंत","बड़ी आंत"],
answer:0
},
{
question:"लार में कौन-सा एंजाइम पाया जाता है?",
options:["एमाइलेज","पेप्सिन","ट्रिप्सिन","लाइपेज"],
answer:0
},
{
question:"सबसे बड़ी कोशिका कौन-सी है?",
options:["अंडाणु","RBC","WBC","शुक्राणु"],
answer:0
},
{
question:"मानव शरीर में कितनी हड्डियाँ होती हैं?",
options:["206","208","210","212"],
answer:0
},
{
question:"फेफड़ों की कार्यात्मक इकाई क्या है?",
options:["एल्विओलाई","नेफ्रॉन","न्यूरॉन","विली"],
answer:0
},
{
question:"वृक्क की कार्यात्मक इकाई क्या है?",
options:["न्यूरॉन","नेफ्रॉन","एल्विओलाई","विली"],
answer:1
},
{
question:"सबसे बड़ा अंग कौन-सा है?",
options:["त्वचा","यकृत","हृदय","मस्तिष्क"],
answer:0
},
  {
question:"मानव शरीर में रक्त का शुद्धिकरण कहाँ होता है?",
options:["हृदय","यकृत","वृक्क","फेफड़ा"],
answer:2
},
{
question:"तंत्रिका तंत्र की मूल इकाई क्या है?",
options:["न्यूरॉन","नेफ्रॉन","कोशिका","ऊतक"],
answer:0
},
{
question:"मानव शरीर की सबसे बड़ी हड्डी कौन-सी है?",
options:["फीमर","टिबिया","ह्यूमरस","रीढ़"],
answer:0
},
{
question:"मानव शरीर की सबसे छोटी हड्डी कौन-सी है?",
options:["स्टेप्स","फीमर","रेडियस","अल्ना"],
answer:0
},
{
question:"रक्त में ऑक्सीजन का परिवहन कौन करता है?",
options:["हीमोग्लोबिन","प्लाज्मा","WBC","प्लेटलेट"],
answer:0
},
{
question:"शरीर में रोग प्रतिरोधक क्षमता किससे जुड़ी है?",
options:["RBC","WBC","प्लेटलेट","प्लाज्मा"],
answer:1
},
{
question:"पौधों में जल का परिवहन कौन करता है?",
options:["फ्लोएम","जाइलम","क्लोरोफिल","रंध्र"],
answer:1
},
{
question:"पौधों में भोजन का परिवहन कौन करता है?",
options:["जाइलम","फ्लोएम","रंध्र","जड़"],
answer:1
},
{
question:"रंध्र (Stomata) कहाँ पाए जाते हैं?",
options:["जड़","तना","पत्ती","फूल"],
answer:2
},
{
question:"मनुष्य के हृदय में कितने आलिंद होते हैं?",
options:["1","2","3","4"],
answer:1
},
{
question:"मनुष्य के हृदय में कितने निलय होते हैं?",
options:["1","2","3","4"],
answer:1
},
{
question:"पाचन का अधिकांश भाग कहाँ होता है?",
options:["मुख","आमाशय","छोटी आंत","बड़ी आंत"],
answer:2
},
{
question:"पित्त रस किस अंग में बनता है?",
options:["अग्न्याशय","यकृत","आमाशय","छोटी आंत"],
answer:1
},
{
question:"इंसुलिन हार्मोन किस ग्रंथि से निकलता है?",
options:["थायरॉयड","अग्न्याशय","पिट्यूटरी","एड्रिनल"],
answer:1
},
{
question:"शरीर की ऊर्जा का मुख्य स्रोत क्या है?",
options:["प्रोटीन","कार्बोहाइड्रेट","विटामिन","खनिज"],
answer:1
},
{
question:"श्वसन की क्रिया कोशिका के किस भाग में होती है?",
options:["माइटोकॉन्ड्रिया","नाभिक","राइबोसोम","गोल्जी बॉडी"],
answer:0
},
{
question:"कोशिका का नियंत्रण केंद्र क्या कहलाता है?",
options:["राइबोसोम","नाभिक","माइटोकॉन्ड्रिया","वैक्यूल"],
answer:1
},
{
question:"पौधों की कोशिका में कोशिका भित्ति किसकी बनी होती है?",
options:["सेल्यूलोज","काइटिन","प्रोटीन","वसा"],
answer:0
},
{
question:"मानव शरीर में सबसे अधिक मात्रा में कौन-सा तत्व पाया जाता है?",
options:["ऑक्सीजन","कार्बन","नाइट्रोजन","कैल्शियम"],
answer:0
},
{
question:"जीवन प्रक्रमों के लिए ऊर्जा किस प्रक्रिया से प्राप्त होती है?",
options:["प्रकाश संश्लेषण","श्वसन","वाष्पोत्सर्जन","उत्सर्जन"],
answer:1
},];

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
