//const BASE_URL = `http://localhost:8080`;

var username_element = document.getElementById("username - field");
var password_element = document.getElementById("password-field");

function formTest() {
    if (username_element == password_element) {
        console.log("Wow it is working")
    }
};

document.getElementById("login-form-submit").addEventListener("click", formTest);

