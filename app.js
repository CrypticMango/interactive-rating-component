//TO DO
//-insert rating number into thank you page when submit is pressed
//-when submit is pressed, show thank you page and hide rating page ✔
//-bring user back to main page after thank you page has been shown
//-when rating button is clicked, should be light grey before submitting

let submitButton = document.getElementById("submit-button");
let placeholderNumber = 3;
let ratingNumber = document.querySelector(".rating-number");

//handles submit button----------------------------------

function pressedSubmit() {
	let thanksPage = document.getElementById("thank-you-page");
	thanksPage.style.display = "block";
	let ratingPage = document.getElementById("rating-start");
	ratingPage.style.display = "none";
}

//handles rating buttons --------------------------------

let button = document.getElementById("button1");
button.addEventListener("click", chosenRating);

function chosenRating() {
	document.getElementById("button1").style.background = "#FFC0CB";
}

console.log(button);
console.log(placeholderNumber);
console.log(ratingNumber);

//function pressedRating() {
//let buttonColor = document.getElementById//('rating-button');
//buttonColor.style.backgroundColor = '#D3D3D3';
//}

//ratingButton.addEventListener('click'), handleButtonColor();

//function handleButtonColor() {
// ratingButton.style.color = 'rgb(255,192,203)';
//};
