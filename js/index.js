// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the values of email and password inputs
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        // Print the values to the console
        console.log("Email:", emailValue);
        console.log("Password:", passwordValue);
    });
});
