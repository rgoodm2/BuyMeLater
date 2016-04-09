//Popout.html interactivity
var recipeURL = null;


function save(recipeData) {
	//TODO - POST the url to website specified file

	if (recipeURL) {
		window.alert("success")
		document.getElementById("successBlock").innerHTML = '<h3>You\'re recipe has been uploaded successfully</h3>'
	}
}

function init() {
	//Gets to here
	// console.log("recipeData: ")
	recipeURL = chrome.extension.getBackgroundPage().selectedRecipe;
	// console.log("recipeData: " + recipeData)
  	//Add button eventListener to save recipeData
	document.getElementById("submit").addEventListener("click", function() {
		//For testing
		// window.alert("Submit clicked");
		//Need to call function to write file (with proper input)
		save(recipeURL)
	});
}

document.addEventListener("DOMContentLoaded", init);