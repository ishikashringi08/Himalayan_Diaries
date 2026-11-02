// JAVASCRIPT FOR HIMALAYAN DIARIES


// 1. SEARCH DESTINATIONS

function searchPlaces() {

    // Get the search input
    let searchInput = document.getElementById("searchInput").value;

    // Convert input into lowercase
    searchInput = searchInput.toLowerCase().trim();

    // Get all destination cards
    let cards = document.querySelectorAll(".place-card");

    let found = false;

    // Check every destination card
    cards.forEach(function(card) {

        // Get destination name
        let placeName = card.querySelector("h2").innerText.toLowerCase();

        // Check whether destination matches search
        if (placeName.includes(searchInput)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    // Display message if destination is not found
    if (!found) {

        alert("Sorry! Destination not found. Please try another place.");

    }

}


// 2. SEARCH WHEN ENTER KEY IS PRESSED

let searchBox = document.getElementById("searchInput");

searchBox.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchPlaces();

    }

});


// 3. OPEN LOGIN PAGE WHEN USER ICON IS CLICKED

let userIcon = document.querySelector(".fa-user-lock");

userIcon.style.cursor = "pointer";

userIcon.addEventListener("click", function() {

    window.location.href = "login.html";

});


// 4. DISPLAY WELCOME MESSAGE IN CONSOLE

window.addEventListener("load", function() {

    console.log("Welcome to Himalayan Diaries!");

});