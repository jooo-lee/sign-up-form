const downArrow = document.querySelector(".down-arrow-container");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector(".submit-btn");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

downArrow.addEventListener("click", scrollToFormContainer);
firstName.addEventListener("input", showCat);
lastName.addEventListener("input", showCat);
email.addEventListener("input", showCat);
phone.addEventListener("input", clearCustomValidity);
phone.addEventListener("input", validatePhone);
password.addEventListener("input", clearCustomValidity);
confirmPassword.addEventListener("input", clearCustomValidity);
confirmPassword.addEventListener("input", validatePasswords);
submitBtn.addEventListener("click", displayPhoneMsg);
submitBtn.addEventListener("click", displayPasswordsMsg);

// ------------------------------ Callbacks ------------------------------

function scrollToFormContainer() {
    document.querySelector(".form-container").scrollIntoView();
}

function showCat(e) {
    e.target.classList.add("showCat");
}

function validatePhone(e) {
    const constraint = new RegExp("^[0-9]{10}$");
    if (constraint.test(phone.value)) {
        if (e.target.classList.contains("invalidPhone")) {
            e.target.classList.remove("invalidPhone");
        }
        e.target.classList.add("validPhone");    
    } else {
        if (e.target.classList.contains("validPhone")) {
            e.target.classList.remove("validPhone");
        }
        e.target.classList.add("invalidPhone");
    }
}

function validatePasswords(e) {
    if (password.value === confirmPassword.value && password.value !== "") {
        if (
            password.classList.contains("notMatching") && 
            confirmPassword.classList.contains("notMatching")
        ) {
            password.classList.remove("notMatching");
            confirmPassword.classList.remove("notMatching");
        }
        password.classList.add("matching");
        confirmPassword.classList.add("matching");
    } else {
        if (
            password.classList.contains("matching") && 
            confirmPassword.classList.contains("matching")
        ) {
            password.classList.remove("matching");
            confirmPassword.classList.remove("matching");
        }
        password.classList.add("notMatching");
        confirmPassword.classList.add("notMatching");
    }
}

function clearCustomValidity() {
    this.setCustomValidity("");
}

function displayPhoneMsg() {
    const constraint = new RegExp("^[0-9]{10}$");
    if (constraint.test(phone.value)) {
        phone.setCustomValidity("");
    } else {
        phone.setCustomValidity("Enter a 10-digit number, no dashes or spaces.");
    }
}

function displayPasswordsMsg() {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords must match!");
    }
}