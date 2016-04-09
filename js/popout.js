//Popout.html interactivity

//For now itemData is simple URL
var itemData = null;


function save(itemData) {
	//TODO - POST the url to website specified file

	if (itemData) {
		window.alert("success" + itemData)
		document.getElementById("successBlock").innerHTML = 'You\'re item has been saved to a remote shopping cart.'
	}
}

function init() {
	//Gets to here
	// console.log("itemData: ")
	itemData = chrome.extension.getBackgroundPage().tabLink;
	// console.log("itemData: " + itemData)
  	//Add button eventListener to save itemData
	document.getElementById("submit").addEventListener("click", function() {
		//For testing
		// window.alert("Submit clicked");
		//Need to call function to write file (with proper input)
		save(itemData)
	});
}

document.addEventListener("DOMContentLoaded", init);
