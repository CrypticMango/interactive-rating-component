//THIS WORKS!! YAS!!! :D

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