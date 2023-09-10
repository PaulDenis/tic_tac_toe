var player = 0;
var clicked = false;
var cards = [];


for (i=0; i < 9; i++) {
  var div = document.createElement("div");
  div.className = "game_grid";
  div.setAttribute("id", "card_"+ i);
  cards.push({"clicked" : false , "card" : "card_" + i});
  document.getElementById("game").appendChild(div);
  //console.log(cards);
}

const tics = document.getElementsByClassName("game_grid")

const card_pressed = e => {
  // console.log(e.target.id);
  //console.log (e.target)
  if (e.target.classList.contains("clicked") == false) {
    if (player == false) {
      e.target.className = e.target.classList + " pressed clicked";
      player = !player;
    } 
    else {
      e.target.className = e.target.classList + " pressed_enemy clicked";
      player = !player;
    }
  }
}

for (let tic of tics) {
  tic.addEventListener("click", card_pressed);
}





