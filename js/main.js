"use strict";

//hämtar från html och lagrar i variabler
const burgerMenu = document.getElementById("burger-menu");
const navUlEl = document.getElementById("nav-ul");

//hämtar data från formuläret på kontaktsidan
const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getPhone = document.getElementById('phone');
const getMessage = document.getElementById('form-message');
const submit = document.getElementById('submit');
let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorMessasge = document.getElementById("errorMessage");

//hämtar data från galleriet på Våra tjänster-sidan
const modal = document.getElementById("gallery-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.getElementById("closeModalButton");
const galleryImages = document.querySelectorAll(".gallery img");

//läser in bläddra-pilarna för modulen och skapar ett bildindex
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let currentImageIndex = 0;

//om man klickar på ett foto i galleri
function openModal(src) {
        document.getElementById("modal-Image").src = src;
        document.getElementById("myModal").style.display = "block";
    }
function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

//visar menyfältet vid klick på hamburgerikon
function displayMenu () {
    //lägger till en klass som gör att menyn visas eller döljs med css
    navUlEl.classList.toggle("is-open");
}

//validerar inmatningen i formuläret
function validateForm(){
   //rensar gamla felmeddelanden 
    errorName.innerHTML = "";
   errorEmail.innerHTML = "";
   errorMessasge.innerHTML = "";

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

function changeImage (step){
    currentImageIndex += step;

    if (currentImageIndex >= galleryImages.length){
        currentImageIndex = 0; 
    }
    if (currentImageIndex < 0){
        currentImageIndex = galleryImages.length-1;
    }

    modalImage.src = galleryImages[currentImageIndex].src;
    modalImage.alt = galleryImages[currentImageIndex].alt;
} 

//eventlyssnare på meny-klick. if-sats för att den ska kolla om elementet finns på sidan
if (burgerMenu){
    burgerMenu.addEventListener("click", event => {
    event.preventDefault();
    displayMenu();
})
}

//loopar igenom bilderna i galleriet och lägger till en eventlyssnare
//if-sats för att alla eventlyssnare ska funka även om föregående har värde null
if (galleryImages){
    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentImageIndex = index;
            modal.style.display = "block";
            modalImage.src = image.src;
            modalImage.alt = image.alt;
    })
    })
}

//if-sats som kollar om closeButton och modal finns på sidan, om inte körs inte koden och skapar därmed inga felmeddelanden
if (closeButton && modal){
    //detta är stängningsknappen när man har en bild förstorad i galleriet
    closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    })
}

if (arrowLeft) {
    arrowLeft.addEventListener("click", () => {
        changeImage(-1);
    })
}

if (arrowRight) {
    arrowRight.addEventListener("click", () => {
        changeImage(+1);
    })
}




//eventlyssnare kontaktformulär. kollar först om submit finns på sidan
if (submit) {
    submit.addEventListener("submit", event => {
        event.preventDefault();

        validateForm();

        //gör inget med detta än så länge, mer än att skriva ut i konsollen
        const nameValue = getName.value;
        const emailValue = getEmail.value;
        const phoneValue = getPhone.value;
        const messageValue = getMessage.value;   

        console.log(`Namn: ${nameValue}. Epost: ${emailValue}. Telefonnummer: ${phoneValue}. Meddelande: ${messageValue}`);
    })
}