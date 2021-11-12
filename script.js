var ux = ["User research", "Information architecture", "Interaction design", "Interface design"];
var arrayLength = ux.length;
var myList = "<ul>";
for (var i = 0; i < arrayLength; i++) {
myList += "<li>" + ux[i] + "</li>";
}
myList += "</ul>";
document.getElementById("minArrayDiv").innerHTML = myList;
