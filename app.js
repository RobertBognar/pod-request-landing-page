//Importing from html through querySelector
const form = document.querySelector("form");
const input = document.querySelector(".submitInfo");
const error = document.querySelector(".errorMessage");
//Adding event listeners to add & remove error message
input.addEventListener("invalid", () => {
    error.classList.add("showErrorMessage");
})
input.addEventListener("input", () => {
    error.classList.remove("showErrorMessage");
})
//Submiting form through html form, prevent default for not refreshing list & reseting the value to the blank and showing successfuly submited form via alert
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert('Thank you for submitting the form!');
    input.value = "";
})