"use strict";

//hämtar från html och lagrar i variabler
const burgerMenu = document.getElementById("burger-menu");
const navUlEl = document.getElementById("nav-ul");

const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getPhone = document.getElementById('phone');
const getMessage = document.getElementById('message');
const submit = document.getElementById('submit');

//visar menyfältet vid klick på hamburgerikon
function displayMenu () {
    //lägger till en klass som gör att menyn visas eller döljs med css
    navUlEl.classList.toggle("is-open");
}

//eventlyssnare på meny-klick
burgerMenu.addEventListener("click", event => {
    event.preventDefault();
    displayMenu();
})

//eventlyssnare kontaktformulär
submit.addEventListener("submit", event => {
    event.preventDefault();

    const nameValue = getName.value;
    const emailValue = getEmail.value;
    const phoneValue = getPhone.value;
    const messageValue = getMessage.value;   

    console.log(`Namn: ${nameValue}. Epost: ${emailValue}. Telefonnummer: ${phoneValue}. Meddelande: ${messageValue}`);
})