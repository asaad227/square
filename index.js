var result = []
var result2 = []
var leaderBoard = []

const nameInput = document.querySelector(".nameInput");
const nameInput2 = document.querySelector(".nameInput2")
const player =  document.querySelector(".playerName");


function submitName(){
    cheeseBoard()
    player.innerHTML =`Player name1: ${nameInput.value}` ;
    
}

function submitName1(){
    cheeseBoard1()
    document.querySelector(".playerName1").innerHTML =`Player name2: ${nameInput2.value}` ;
    
}

function cheeseBoard(){
    const container = document.getElementById("chessboard");
    let happy = Math.ceil(Math.random() * 3);
    const colors = ["red", "yellow", "blue", "green"]
    for (let row = 0; row < 1; row++) {
      for (let col = 0; col < 1; col++) {
        const square = document.createElement("div");
        // set the class of the square to indicate its position on the board
        square.className = `square ${row}-${col}`;
        // set the background color of the square based on its position
        if ((row + col) % 2 === 0) {
            result.push(colors[happy])
          square.style.backgroundColor = happy%2 === 0? colors[happy] : colors[happy];
        } 
        container.appendChild(square);
      }
    }



}

function cheeseBoard1(){
    const container = document.getElementById("chessboard");
    let happy = Math.ceil(Math.random() * 3);
    const colors = ["red", "yellow", "blue", "green"]
    for (let row = 0; row < 1; row++) {
      for (let col = 0; col < 1; col++) {
        const square = document.createElement("div");
        // set the class of the square to indicate its position on the board
        square.className = `square ${row}-${col}`;
        // set the background color of the square based on its position
        if ((row + col) % 2 === 0) {
            result2.push(colors[happy])
          square.style.backgroundColor = happy%2 === 0? colors[happy] : colors[happy];
        } 
        container.appendChild(square);
      }
    }



}

function winner(){
const yellow = result.filter(x => x === "yellow");
const green = result.filter(x=> x=== "green");
const blue = result.filter(x=> x === "blue");
const red = result.filter(x=> x === "red");
const yellow2 = result2.filter(x => x === "yellow");
const green2 = result2.filter(x=> x=== "green");
const blue2 = result2.filter(x=> x === "blue");
const red2 = result2.filter(x=> x === "red");
var re = ""


if(yellow.length > green.length && yellow.length > red.length && yellow.length > blue.length||yellow2.length > green2.length && yellow2.length > red2.length && yellow2.length > blue2.length){
  re = "Yellow"
} 
if(blue.length  > green.length  && blue.length  > yellow.length  && blue.length  > red.length|| blue2.length  > green2.length  && blue2.length  > yellow2.length  && blue2.length  > red2.length){
    re = "Blue"
}
if(green.length  > blue.length  && green.length  > yellow.length  && green.length  > red.length||green2.length  > blue2.length  && green2.length  > yellow2.length  && green2.length  > red2.length){
    re = "Green"
} 
if(red.length  > green.length  && red.length  > yellow.length  && red.length  > blue.length||red2.length  > green2.length  && red2.length  > yellow2.length  && red2.length  > blue2.length){
    re = "Red"
}
//here we store the name into variable 
const namel = player.innerHTML;
const name2 = document.querySelector(".playerName1").innerHTML;
const user1 = { 
    // as we going to send name only nothing else so we slice first 12 character from 
    // the player innerHTML only name sent to localstorage
    name: `${namel.slice(13)}`,
    score: `${re}`,
  };

  const user2 = { 
    // as we going to send name only nothing else so we slice first 12 character from 
    // the player innerHTML only name sent to localstorage
    name:`${name2.slice(13)}`,
    score: `${re}`,
  };
  
  localStorage.setItem("user1", JSON.stringify(user1));
  localStorage.setItem("user2", JSON.stringify(user2));
   leaderBoard.push(re)
   document.querySelector(".win").value = `${re}`
}

function leader(){
    winner()
    const storedUser = JSON.parse(localStorage.getItem("user1"));
document.querySelector(".playerName").innerHTML = `Player name1: ${storedUser.name}`;
document.querySelector(".item").innerHTML = `Player score1: ${storedUser.score}`;
const storedUser1 = JSON.parse(localStorage.getItem("user2"));
document.querySelector(".playerName1").innerHTML = `Player name2:${storedUser1.name}`;
document.querySelector(".item1").innerHTML = `Player score2:${storedUser1.score}`;

   
}


const btn = document.querySelector(".btn");
const calculateWinner = document.querySelector(".result");
const submit = document.querySelector(".nameSub");
const submit2 = document.querySelector(".nameSub2");

// btn.addEventListener("click", cheeseBoard)
calculateWinner.addEventListener("click", leader);
submit.addEventListener("click", submitName )
submit2.addEventListener("click", submitName1 )

