// document. querySelector will return a single element maching the criteria withiinthe '
var header =  document.querySelector("#header");
header.textContent = "Hello world";


var pStyles = document.querySelectorAll(".p-styles");

for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm p-styles" + (x + 1);
}

var lis = document.querySelectorAll("li");

for (var x = 0; x < lis.length; x++ ){
  lis[x].textContent = x + 1;
}


// another way to selecht an element by its ID is a document .getElementbyId
document.getElementById("second-header").textContent = "something";

var awesomes = document.getElementsbyClassName("awesome");

for (var x = 0;x < awesomes.length; x++){
  awesomes[x].textContent = x + 1;
}

var h3s = document.getElementsByTagname("h3");

for (var x = 0; x <h3s.length; x++) {
  h3s[x].textContent + "that is it"
}
