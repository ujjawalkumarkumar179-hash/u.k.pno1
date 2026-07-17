// ===============================
// U.K.P NO1 EDUCATION
// Certificate System - Part 1
// ===============================

export function showCertificate(studentName, subject, testName, score, total) {

    const percentage = Math.round((score / total) * 100);

    let title = "";
    let grade = "";

    if (percentage >= 90) {
        title = "🥇 GOLD CERTIFICATE";
        grade = "A+";
    } else if (percentage >= 75) {
        title = "🥈 SILVER CERTIFICATE";
        grade = "A";
    } else if (percentage >= 60) {
        title = "🥉 BRONZE CERTIFICATE";
        grade = "B";
    } else {
        title = "📚 KEEP PRACTICING";
        grade = "C";
    }

    document.getElementById("certificateSection").style.display = "block";

    document.getElementById("certificateTitle").textContent = title;
    document.getElementById("studentName").textContent = studentName;
    document.getElementById("studentSubject").textContent = subject;
    document.getElementById("studentTest").textContent = testName;
    document.getElementById("studentScore").textContent = `${score} / ${total}`;
    document.getElementById("studentPercentage").textContent = percentage + "%";
    document.getElementById("studentGrade").textContent = grade;
}
