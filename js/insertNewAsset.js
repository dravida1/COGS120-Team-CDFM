// code taken from: http://jsfiddle.net/s8HaQ/
var start = 1900;
var end = new Date().getFullYear();
var options = "<option></option>";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("year").innerHTML = options;
