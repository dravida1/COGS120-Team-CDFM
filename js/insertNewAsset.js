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
		let itemNameField  = $("#itemNameField").val();
		let itemPriceField = $("#itemPriceField").val();
		let itemYearField  = $("#year").val();

		console.log("itemNameField: " + itemNameField);
		console.log("itemPriceField: " + itemPriceField);
		console.log("itemYearField: " + itemYearField);

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

		// if an item price is not given
		if(itemPriceField == ""){
			// Give input box a red border
			$('#itemPriceSection').addClass("has-error");
			// Error message
			$("#priceValueError").text("Please specify the item's price");
		}
		else{
			$('#itemPriceSection').addClass("has-success");
		}

		// if an item year is not given
		if(itemYearField == ""){
			// give input box a red border
			$('#itemYearSection').addClass("has-error");
			// Error message
			$("#yearValueError").text("Please specify the year of purchase");
		}
		else{
			$('#itemYearSection').addClass("has-success");
		}
		// Please specify year of purchase
	});
});