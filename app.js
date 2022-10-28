//TO DO
//-insert rating number into thank you page when submit is pressed
//-when submit is pressed, show thank you page and hide rating page ✔
//-bring user back to main page after thank you page has been shown ✔
//-when rating button is clicked, should be light grey before submitting ✔

const submitButton = document.getElementById("submit-button");
let ratingNumber = document.getElementById("rating-number")

//handles submit button----------------------------------

submitButton.addEventListener("click", pressedSubmit);

function pressedSubmit() {
	let thanksPage = document.getElementById("thank-you-page");
	thanksPage.style.display = "block";
	let ratingPage = document.getElementById("rating-start");
	ratingPage.style.display = "none";
	return true;
}

//page timeout

function returnToMain() {
	if (pressedSubmit() === true) {
		location.reload();
	}
}

setTimeout(returnToMain, 25000);

//insert rating number

const ratings = document.querySelectorAll('.rating-button')

ratings.forEach ((rating) => { 
	rating.addEventListener('click', () => {ratingNumber.innerHTML = rating.innerHTML})
});