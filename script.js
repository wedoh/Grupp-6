var links = [
  '<a href="#">News</a>',
  '<a href="#">About us</a>',
  '<a href="#">Press</a>',
  '<a href="#">Careers</a>',
  '<a href="#">Contact</a>'
];
var arrayLength = links.length;
var myList = "<ul>";

for (var i = 0; i < arrayLength; i++)
{
  myList += "<li>" + links[i] + "</li>";
}
myList += "</ul>";

document.getElementById("navbarLinks").innerHTML = myList;
