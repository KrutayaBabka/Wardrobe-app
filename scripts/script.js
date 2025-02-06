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