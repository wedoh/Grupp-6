var links = [
  '<a class="nav-link" href="#">News</a>',
  '<a class="nav-link" href="#">About us</a>',
  '<a class="nav-link" href="#">Press</a>',
  '<a class="nav-link" href="#">Careers</a>',
  '<a class="nav-link" href="#">Contact</a>'
];
var arrayLength = links.length;
var myList="";

for (var i = 0; i < arrayLength; i++)
{
  myList += "<li class='nav-item'>" + links[i] + "</li>";
}

document.getElementById("navbarLinks").innerHTML = myList;
