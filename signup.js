const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const signupBtn = document.getElementById("signupBtn");

function checkForm() {

    const isValid =
        fullName.value.trim() !== "" &&
        email.value.trim() !== "" &&
        mobile.value.trim().length === 10 &&
        password.value.length >= 6 &&
        password.value === confirmPassword.value &&
        terms.checked;

    if (isValid) {
        signupBtn.disabled = false;
        signupBtn.classList.add("active");
    } else {
        signupBtn.disabled = true;
        signupBtn.classList.remove("active");
    }
}

fullName.addEventListener("input", checkForm);
email.addEventListener("input", checkForm);
mobile.addEventListener("input", checkForm);
password.addEventListener("input", checkForm);
confirmPassword.addEventListener("input", checkForm);
terms.addEventListener("change", checkForm);

checkForm();
