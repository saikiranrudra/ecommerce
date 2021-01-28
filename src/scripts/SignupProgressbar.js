// Progressbar for Signup Page
const DataClass = require("./DataClass");
const {progressCalculate, progressUI} = require("./progress");

let email = document.getElementById("signup-email");
let username = document.getElementById("signup-username");
let password = document.getElementById("signup-password");
let street = document.getElementById("signup-street");
let landmark = document.getElementById("signup-landmark");
let pincode = document.getElementById("signup-pincode");
let city = document.getElementById("signup-city");
let state = document.getElementById("signup-state");
let mobilenumber = document.getElementById("signup-mobilenumber");

let progress = document.querySelector(".progress");


let data = {
    email: email.value,
    username: username.value,
    password: password.value,
    street: street.value,
    landmark: landmark.value,
    pincode: pincode.value,
    city: city.value,
    state: state.value,
    mobilenumber: mobilenumber.value
}


let dataObj = new DataClass(data);

function updateProgressBar(data) {
    const percentage = progressCalculate(data);
    progressUI(progress, percentage);
}

// Update progressBar on value change
email.addEventListener('input', (e) => dataObj.set("email", e.target.value, updateProgressBar));
username.addEventListener('input', (e) => dataObj.set("username", e.target.value, updateProgressBar));
password.addEventListener('input', (e) => dataObj.set("password", e.target.value, updateProgressBar));
street.addEventListener('input', (e) => dataObj.set("street", e.target.value, updateProgressBar));
landmark.addEventListener('input', (e) => dataObj.set("landmark", e.target.value, updateProgressBar));
pincode.addEventListener('input', (e) => dataObj.set("pincode", e.target.value, updateProgressBar));
city.addEventListener('input', (e) => dataObj.set("city", e.target.value, updateProgressBar));
state.addEventListener('input', (e) => dataObj.set("state", e.target.value, updateProgressBar));
mobilenumber.addEventListener('input', (e) => dataObj.set("mobilenumber", e.target.value, updateProgressBar));