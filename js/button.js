var changeBg = document.querySelector("#change-bg");
var colors = ["pink", "green","blue","yellow","red"];
var clicks = 0;

function changeBtncolor() {
document.querySelector("body").style.backgroundColor = colors[clicks];
clicks++;
if(clicks === colors.length){
clicks = 0;
}
}
