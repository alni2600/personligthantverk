"use strict";

//hämtar från html och lagrar i variabler
const burgerMenu = document.getElementById("burger-menu");
const navUlEl = document.getElementById("nav-ul");

//hämtar data från formuläret på kontaktsidan
const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getPhone = document.getElementById('phone');
const getMessage = document.getElementById('message');
const submit = document.getElementById('submit');
let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorMessasge = document.getElementById("errorMessage");

//hämtar data från galleriet på Våra tjänster-sidan
const modal = document.getElementById("gallery-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("closeModalButton");
const galleryImages = document.querySelectorAll(".gallery img");

//om man klickar på ett foto i galleri
function openModal(src) {
        document.getElementById("modalImage").src = src;
        document.getElementById("myModal").style.display = "block";
    }
function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }


//loopar igenom bilderna i galleriet och lägger till en eventlyssnare
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = image.src;
})
})

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
})

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

function validateForm(){
    if (getName.value.trim() === ""){
        errorName.innerHTML = "Fyll i ditt namn";
    }
    if (getEmail.value.trim() === ""){
        errorEmail.innerHTML = "Fyll i din epost";
    } 
    if (getMessage.value.trim() === ""){
        errorMessasge.innerHTML = "Skriv ett meddelande";
    }

}

//eventlyssnare kontaktformulär
submit.addEventListener("submit", event => {
    event.preventDefault();

    validateForm();

    const nameValue = getName.value;
    const emailValue = getEmail.value;
    const phoneValue = getPhone.value;
    const messageValue = getMessage.value;   

    console.log(`Namn: ${nameValue}. Epost: ${emailValue}. Telefonnummer: ${phoneValue}. Meddelande: ${messageValue}`);
})

