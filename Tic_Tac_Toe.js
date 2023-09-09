var clicked = false;
var player = 0;

document.getElementById("card_1").onclick = function() {
    clicked = true;
    document.getElementById("card_1").style.backgroundColor = "red";
    console.log("Yes");
};