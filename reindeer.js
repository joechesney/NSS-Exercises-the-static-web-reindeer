var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
var combo = "<ul><h2>List of 'lists'</h2>";
for (var i = 0; i < reindeer.length; i++) { // only loops for length of reindeer array, even though the colors array is longer
    combo += "<li>" + colors[i] + " " + reindeer[i] + "</li>"; // makes each concat into a separate list element
}
combo += "</ul>"; //closes the list element

hohohoElement.innerHTML = combo; //adds first list to 'reindeer' div

var comboDiv = "<div><h2>List of Divs</h2>";
for (var i = 0; i < reindeer.length; i++) { // only loops for length of reindeer array, even though the colors array is longer
    comboDiv += "<div>" + colors[i] + " " + reindeer[i] + "</div>"; // makes each concat into a separate div element
}
combo += "</div>"; //closes the div element

hohohoElement.innerHTML += comboDiv; // adds second list to reindeer div