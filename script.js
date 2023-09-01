const downArrow = document.querySelector(".down-arrow-container");
const phoneNum = document.querySelector("#phone");
const submitBtn = document.querySelector(".submit-btn");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

downArrow.addEventListener("click", scrollToFormContainer)
phoneNum.addEventListener("input", clearCustomValidity);
password.addEventListener("input", clearCustomValidity);
confirmPassword.addEventListener("input", clearCustomValidity);
submitBtn.addEventListener("click", validatePhoneNum);
submitBtn.addEventListener("click", validateMatchingPasswords);

// ------------------------------ Callbacks ------------------------------

function scrollToFormContainer() {
    document.querySelector(".form-container").scrollIntoView();
}

function clearCustomValidity() {
    this.setCustomValidity("");
}

function validatePhoneNum() {
    const constraint = new RegExp("[0-9]{10}");
    if (constraint.test(phoneNum.value)) {
        phoneNum.setCustomValidity("");
    } else {
        phoneNum.setCustomValidity("Enter a 10-digit number.");
    }
}

function validateMatchingPasswords() {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords must match!");
    }
}