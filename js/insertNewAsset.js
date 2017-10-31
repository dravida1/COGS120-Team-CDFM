// Populates options for the "Year of Purchase" field
// code taken from: http://jsfiddle.net/s8HaQ/
let start = new Date().getFullYear();
let end = 1900;
let options = "<option></option>";
for(let year = start ; year >=end; year--){
  options += "<option>"+ year +"</option>";
}
document.getElementById("year").innerHTML = options;

$(document).ready(function(){
	// When the submit button is clicked
	$("#submitButton").click(function(){
		let itemNameField = $("#itemNameField").val();
		let itemPriceField = $('#itemPriceField').val();

		console.log("itemNameField: " + itemNameField);
		console.log("itemPriceField: " + itemPriceField);

		// check if all forms filled out here...

		// If an item name is not given
		if(itemNameField == ""){
			// Give input box a red border
			$("#itemNameSection").addClass("has-error");
			// Error Message
			$("#itemNameError").text("Please specify an item name");
		}
		else{
			$("#itemNameSection").addClass("has-success");
		}

		if(itemPriceField == ""){
			// Give input box a red border
			$('#itemPriceSection').addClass("has-error");
			// Error message
			$("#priceValueError").text("Please specify the item's price");
		}
		else{
			$('#itemPriceSection').addClass("has-success");
		}
	});
});