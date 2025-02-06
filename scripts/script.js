const loginButton = document.querySelector("#login")
const registerButton = document.querySelector("#register")
const loginForm = document.querySelector(".login-form")
const registerForm = document.querySelector(".register-form")

loginButton.addEventListener("click", () => {
    loginButton.style.backgroundColor = "#21264D";
    registerButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
})

registerButton.addEventListener("click", () => {
    loginButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerButton.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
})

// View Password Functions

const loginInputField = document.getElementById("loginPassword");
const loginInputIcon = document.getElementById("login-password-icon");

const registerInputField = document.getElementById("registerPassword");
const registerInputIcon = document.getElementById("register-password-icon");

function myLoginPassword() {
    if(loginInputField.type === "password") {
        loginInputField.type = "text";

        loginInputIcon.name = "eye-off-outline";
        loginInputIcon.style.cursor = "pointer";
    } else {
        loginInputField.type = "password";

        loginInputIcon.name = "eye-outline";
        loginInputIcon.style.cursor = "pointer";
    }
}

function myRegisterPassword() {
    if(registerInputField.type === "password") {
        registerInputField.type = "text";

        registerInputIcon.name = "eye-off-outline";
        registerInputIcon.style.cursor = "pointer";
    } else {
        registerInputField.type = "password";

        registerInputIcon.name = "eye-outline";
        registerInputIcon.style.cursor = "pointer";
    }
}

// Chanhe icon

function changeIcon(value) {
    if(value.length > 0) {
        loginInputIcon.name = "eye-outline";
        registerInputIcon.name = "eye-outline";
    } else {
        loginInputIcon.name = "lock-closed-outline";
        registerInputIcon.name = "lock-closed-outline";
    }
}