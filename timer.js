let timeLeft = 600; // 10 मिनट

const timer = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let timerBox = document.getElementById("timer");

    if (timerBox) {
        timerBox.innerHTML =
        "Time Left: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);

        alert("Time Over!");

        if(typeof nextBtn !== "undefined"){
            nextBtn.disabled = true;
        }
    }

}, 1000);
