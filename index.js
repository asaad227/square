var result = []
var result2 = []
var leaderBoard = [];
var leaderBoard2 = [];
var score;
var score2;
var interId;
var interId2;

const nameInput = document.querySelector(".nameInput");
const nameInput2 = document.querySelector(".nameInput2")
const player =  document.querySelector(".playerName");


function submitName(){
    // cheeseBoard()
    var str = nameInput.value;
    //multiple replace in a string 
    str = str.replace(/[aA]/gi, "4");
    str = str.replace(/[eE]/gi, "3");
    str = str.replace(/[iI]/gi, "1");
    //capitalize first letter 
    player.innerHTML =`Player name1: ${str[0].toUpperCase()+str.slice(1)}` ;
    if(!interId){
      interId = setInterval(cheeseBoard, 1000)
    }
    
}

function submitName1(){
   
    var str = nameInput2.value;
    str = str.replace(/[aA]/gi, "4");
    str = str.replace(/[eE]/gi, "3");
    str = str.replace(/[iI]/gi, "1");
    document.querySelector(".playerName1").innerHTML =`Player name2:${str[0].toUpperCase()+str.slice(1)}` ;
    if(!interId){
      interId = setInterval(cheeseBoard1, 1000)
    }
}

function cheeseBoard(){
    const container = document.getElementById("chessboard");
    // happy creating random number out of 0 - 3, floor use to round down so can count index
    // 0 to 3
    let happy = Math.floor(Math.random() * 3);
    const colors = ["red", "yellow", "blue", "green"]
    for (let row = 0; row < 1; row++) {
      for (let col = 0; col < 1; col++) {
        const square = document.createElement("div");
        // set the class of the square to indicate its position on the board
        square.className = `square ${row}-${col}`;
        // set the background color of the square based on its position
        if ((row + col) % 2 === 0) {
          //sending color to the result 
            result.push(colors[happy])
          square.style.backgroundColor = colors[happy];
          square.innerText = `${nameInput.value[0].toUpperCase()}`
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
            square.style.backgroundColor = colors[happy];
          square.innerText = `${nameInput2.value[0].toUpperCase()}`
        } 
        container.appendChild(square);
      }
    }



}
// function winner2(){
// const yellow2 = result2.filter(x => x === "yellow");
// const green2 = result2.filter(x=> x=== "green");
// const blue2 = result2.filter(x=> x === "blue");
// const red2 = result2.filter(x=> x === "red");
// var re = ""

// if(blue2.length  > green2.length  && blue2.length  > yellow2.length  && blue2.length  > red2.length){
//   re = "Blue";
// }
// if(yellow2.length > green2.length && yellow2.length > red2.length && yellow2.length > blue2.length){
//   re = "Yellow";
// }

// if(green2.length  > blue2.length  && green2.length  > yellow2.length  && green2.length  > red2.length){
//   re = "Green";
// }
// if(red2.length  > green2.length  && red2.length  > yellow2.length  && red2.length  > blue2.length){
//   re = "Red"
// }
// const name2 = document.querySelector(".playerName1").innerHTML;

// const user2 = { 
//   // as we going to send name only nothing else so we slice first 12 character from 
//   // the player innerHTML only name sent to localstorage
//   name:`${name2.slice(13)}`,
//   score: `${re}`,
// };
// localStorage.setItem("user2", JSON.stringify(user2));
// leaderBoard2.push(re);
// // document.querySelector(".win2").value = `${re}`
// }
// function winner(){
// const yellow = result.filter(x => x === "yellow");
// const green = result.filter(x=> x=== "green");
// const blue = result.filter(x=> x === "blue");
// const red = result.filter(x=> x === "red");


// var re = ""


// if(yellow.length > green.length && yellow.length > red.length && yellow.length > blue.length){
//   re = "Yellow"
// } 
// if(blue.length  > green.length  && blue.length  > yellow.length  && blue.length  > red.length){
//     re = "Blue"
// }
// if(green.length  > blue.length  && green.length  > yellow.length  && green.length  > red.length){
//     re = "Green"
// } 
// if(red.length  > green.length  && red.length  > yellow.length  && red.length  > blue.length){
//     re = "Red"
// }
// //here we store the name into variable 
// const namel = player.innerHTML;

// const user1 = { 
//     // as we going to send name only nothing else so we slice first 12 character from 
//     // the player innerHTML only name sent to localstorage
//     name: `${namel.slice(13)}`,
//     score: `${re}`,
//   };

 
  
//   localStorage.setItem("user1", JSON.stringify(user1));
 
//    leaderBoard.push(re)
//   //  document.querySelector(".win").value = `${re}`
// }
function gameScore1(){
  for(let i = 0; i < result.length; i++){
    if(result[i] === "red"){
      leaderBoard.push(-20)
    }
    if(result[i] === "green"){
      leaderBoard.push(40)
    }

    if(result[i] === "yellow"){
      leaderBoard.push(10)
    }
    if(result[i] === "blue"){
      leaderBoard.push(10)
    }
  }
  score = leaderBoard.reduce((acc, curr)=> acc + curr, 0);
  document.querySelector(".win").value = `${score}`
}
function gameScore2(){
  for(let i = 0; i < result2.length; i++){
    if(result2[i] === "red"){
      leaderBoard2.push(-20)
    }
    if(result2[i] === "green"){
      leaderBoard2.push(40)
    }

    if(result2[i] === "yellow"){
      leaderBoard2.push(10)
    }
    if(result2[i] === "blue"){
      leaderBoard2.push(-15)
    }
  }
  score2 = leaderBoard2.reduce((acc, curr)=> acc + curr, 0);
  document.querySelector(".win2").value = `${score2}`
}
function leader(){
  gameScore1()
  gameScore2()
    // winner()
    // winner2()
    if(score > score2){
      document.querySelector(".leader").innerHTML = `Winner: Player1`
    }else{
      document.querySelector(".leader").innerHTML = `Winner: Player2`
    }
const storedUser = JSON.parse(localStorage.getItem("user1"));
document.querySelector(".playerName").innerHTML = `Player name1: ${storedUser.name}`;
document.querySelector(".item").innerHTML = `Player score1: ${storedUser.score}`;
const storedUser1 = JSON.parse(localStorage.getItem("user2"));
document.querySelector(".playerName1").innerHTML = `Player name2:${storedUser1.name}`;
document.querySelector(".item1").innerHTML = `Player score2:${storedUser1.score}`;

   
}

function clear(){
  clearInterval(interId);
  interId = null
  clearInterval(interId2);
  interId2 = null
}



const btn = document.querySelector(".btn");
const calculateWinner = document.querySelector(".result");
const submit = document.querySelector(".nameSub");
const submit2 = document.querySelector(".nameSub2");

btn.addEventListener("click", clear)
calculateWinner.addEventListener("click", leader);
submit.addEventListener("click", submitName )
submit2.addEventListener("click", submitName1 )

