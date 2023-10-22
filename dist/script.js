"use strict";
const submit_btn = document.querySelector("#submit_btn");
const dismiss_btn = document.querySelector("#dismiss_btn");
const formPage = document.querySelector(".root");
const successPage = document.querySelector(".success");
const email_input = document.querySelector("#email_input");
const email_span = document.querySelector("#email_addres");
const error_span = document.querySelector("#error");
function handleSubmit(e) {
    e.preventDefault();
    if (!emailValidate(email_input.value)) {
        error_span.classList.remove("hide");
        email_input.classList.add("error_email");
        return emailValidate(email_input.value);
    }
    formPage.classList.toggle("hide");
    successPage.classList.toggle("hide");
    email_span.innerHTML = email_input.value;
}
function handleInput(e) {
    return emailValidate(e.target.value);
}
function handleDismss() {
    window.location.reload();
}
function emailValidate(mail) {
    const reqex = /([a-zA-Z0-9]+)(\@)([a-zA-Z]+)(\.)([a-zA-Z.]+)/;
    const result = reqex.test(mail);
    if (result) {
        email_input.classList.add("validate_email");
        error_span.classList.add("hide");
        email_input.classList.remove("error_email");
    }
    else {
        email_input.classList.remove("validate_email");
    }
    return result;
}
email_input.addEventListener("input", handleInput);
submit_btn.addEventListener("click", handleSubmit);
dismiss_btn.addEventListener("click", handleDismss);
