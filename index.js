// JavaScript for Himalayan Diaries


// 1. Display a message when a destination card is clicked

let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        let placeName = card.querySelector("h3").innerText;

        let placeDescription = card.querySelector("p").innerText;

        alert("Welcome to " + placeName + "!\n\n" + placeDescription);

    });

});


// 2. Open login page when user icon is clicked

let userIcon = document.querySelector(".fa-user-lock");

userIcon.style.cursor = "pointer";

userIcon.addEventListener("click", function() {

    window.location.href = "login.html";

});


// 3. Display a welcome message when the page opens

window.addEventListener("load", function() {

    console.log("Welcome to Himalayan Diaries!");

});