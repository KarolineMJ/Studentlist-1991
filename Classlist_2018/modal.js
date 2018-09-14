"use strict";

// Get the modal
const modal = document.querySelector('#myModal');

// Get the button that opens the modal
let informationBTN = document.querySelectorAll(".information-svg");

informationBTN.forEach(infoBTN => {
    infoBTN.addEventListener("click", clickedOpen)
    function clickedOpen() {
        console.log("clicked");
        modal.style.display = "block";
    }

})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
informationBTN.onclick = function () {
    console.log("btn clicked");
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}