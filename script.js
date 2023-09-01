const downArrow = document.querySelector(".down-arrow-container");
const phoneNum = document.querySelector("#phone");
const submitBtn = document.querySelector(".submit-btn");

downArrow.onclick = () => document.querySelector(".form-container").scrollIntoView();

// Phone number input validation
const constraint = new RegExp("[0-9]{10}");
phoneNum.oninput = () => phoneNum.setCustomValidity("");
submitBtn.onclick = () => {
    if (constraint.test(phoneNum.value)) {
        phoneNum.setCustomValidity("");
    } else {
        phoneNum.setCustomValidity("Enter a 10-digit number.");
    }
};