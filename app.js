//THIS WORKS!! YAS!!! :D

//TO DO
//-insert rating number into thank you page when submit is pressed
//-when submit is pressed, show thank you page and hide rating page ✔
//-bring user back to main page after thank you page has been shown
//-when rating button is clicked, should be light grey before submitting

'use strict';

let submitButton = document.getElementById('submit-button');
let ratingButton = document.querySelectorAll(".rating-button");

//handles submit button----------------------------------

function pressedSubmit() {
    //alert('you have pressed submit');
    //document.getElementById("selected-rating").innerHTML = "You selected 20 out of 5";
    let thanksPage = document.getElementById('thank-you-page');
    thanksPage.style.display = "block";
    let ratingPage = document.getElementById('rating-start');
    ratingPage.style.display = "none";
    let selectedRating = document.getElementById('selected-rating');
    selectedRating.innerHTML = "YAY";
}

//handles rating buttons --------------------------------

function pressedRatingOne() {
    let buttonColorOne = document.getElementById('rating-button-one');
    buttonColorOne.style.backgroundColor = '#D3D3D3';
}

function pressedRatingTwo() {
    let buttonColorTwo = document.getElementById('rating-button-two');
    buttonColorTwo.style.backgroundColor = '#D3D3D3';
}

function pressedRatingThree() {
    let buttonColorThree = document.getElementById('rating-button-three');
    buttonColorThree.style.backgroundColor = '#D3D3D3';
}

function pressedRatingFour() {
    let buttonColorFour = document.getElementById('rating-button-four');
    buttonColorFour.style.backgroundColor = '#D3D3D3';
}

function pressedRatingFive() {
    let buttonColorFive = document.getElementById('rating-button-five');
    buttonColorFive.style.backgroundColor = '#D3D3D3';
}


//ratingButton.addEventListener('click'), handleButtonColor();

//function handleButtonColor() {
   // ratingButton.style.color = 'rgb(255,192,203)';
//};
