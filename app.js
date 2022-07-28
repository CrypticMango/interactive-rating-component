//THIS WORKS!! YAS!!! :D

//TO DO
//-insert rating number into thank you pages when submit is pressed
//-when submit is pressed, show thank you page and hide rating page
//-bring user back to main page after thank you page has been shown
//-when rating button is clicked, should be light grey before submitting

let submitButton = document.getElementById('submit-button');
let ratingButton = document.getElementById('rating-button')

function pressedSubmit() {
    alert('you have pressed submit');
}

function pressedRating() {
    alert('you have pressed a rating button')
}

submitButton.onclick = pressedSubmit();
submitButton.onclick = pressedRating();
