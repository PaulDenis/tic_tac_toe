var player = 0;
var clicked = false;
var cards = [];

/* This section creates the 9 squares to play tic-tac-toe on */
for (i=0; i < 9; i++) {
  var div = document.createElement("div");
  div.className = "game_grid";
  div.setAttribute("id", "card_"+ i);
  cards.push({"clicked" : false , "card" : "card_" + i});
  document.getElementById("game").appendChild(div);
  //console.log(cards);
}

const tics = document.getElementsByClassName("game_grid") /* This is a list of the 9 squares on wich the game is played */


/* This section is the logic that allow to click
 the squares and to change them to wither X or O */
const card_pressed = e => {
  // console.log(e.target.id);
  //console.log (e.target)
  if (e.target.classList.contains("clicked") == false) { /* Here i check if the square has alredy been clicked */
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

/* Here i add a listener on all the squares, so when you click one
  it will call the card_pressed function above */
for (let tic of tics) {
  tic.addEventListener("click", card_pressed);
}





