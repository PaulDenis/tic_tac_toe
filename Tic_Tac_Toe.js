var clicked = false;
var player = 0;

var cards = [];
for (i=0; i < 9; i++) {
  var div = document.createElement("div");
  div.className = "game_grid";
  div.setAttribute("id", "card_"+ i);
  cards.push("card_" + i);
  document.getElementById("game").appendChild(div);
  // console.log(cards);
}

const tics = document.getElementsByClassName("game_grid")

const card_pressed = e => {
  console.log(e.target.id);
}

for (let tic of tics) {
  tic.addEventListener("click", card_pressed);
}





