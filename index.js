
const container = document.getElementById("chessboard");
const nameInput = document.querySelector(".nameInput");
const nameInput2 = document.querySelector(".nameInput2")
const player =  document.querySelector(".playerName");
const player2 = document.querySelector(".playerName1")
const player1S = document.querySelector(".item");
const players2S = document.querySelector(".item1");
const playerWin = document.querySelector(".leader");
var round = document.querySelector(".gameRound");
var roundIn = document.querySelector(".roundInput");
var square;
var result = []
var result2 = []
var leaderBoard = [];
var leaderBoard2 = [];
var score;
var score2;
var interId;
var interId2;

function roundEnter(){
  round.innerHTML = `Round: ${roundIn.value}`
  roundIn.value = ""
}

function submitName(){
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
  player2.innerHTML =`Player name2:${str[0].toUpperCase()+str.slice(1)}` ;
    if(!interId2){
      interId2 = setInterval(cheeseBoard1, 1000)
    }
}

function cheeseBoard(){
    // happy creating random number out of 0 - 3, floor use to round down so can count index
    // 0 to 3
    let numberOfRound = round.innerHTML;
  console.log(Number(numberOfRound.slice(7)))
    if(Number(numberOfRound.slice(7)) === 0){
      Number(numberOfRound.slice(7)) = 1
    }else{
      Number(numberOfRound.slice(7))
    }
    let happy = Math.floor(Math.random() * 3);
    const colors = ["red", "yellow", "blue", "green"]
    for (let row = 0; row < 1; row++) {
      if(result.length === Number(numberOfRound.slice(7))){
        clearInterval(interId)
      }else{
        for (let col = 0; col < 1; col++) {
          square = document.createElement("div");
          // set the class of the square to indicate its position on the board
          square.className = `square ${row}-${col}`;
          // set the background color of the square based on its position
          if ((row + col) % 2 === 0) {
            //sending color to the result 
              result.push(colors[happy])
            square.style.backgroundColor = colors[happy];
            square.innerText = `${nameInput.value[0].toUpperCase()}`
          } 
          console.log(result)
            container.appendChild(square); 
          }
      }      
      }
}

function cheeseBoard1(){
  let numberOfRound = round.innerHTML;
  console.log(Number(numberOfRound.slice(7)))
  if(Number(numberOfRound.slice(7)) === 0){
    Number(numberOfRound.slice(7)) = 1
  }else{
    Number(numberOfRound.slice(7))
  }
 
    let happy = Math.ceil(Math.random() * 3);
    const colors = ["red", "yellow", "blue", "green"]
    for (let row = 0; row < 1; row++) {
      if(result2.length === Number(numberOfRound.slice(7))){
        clearInterval(interId2)
      }else{
        for (let col = 0; col < 1; col++) {
          square = document.createElement("div")
            // set the class of the square to indicate its position on the board
            square.className = `square ${row}-${col}`;
            // set the background color of the square based on its position
            if ((row + col) % 2 === 0) {
                result2.push(colors[happy])
                square.style.backgroundColor = colors[happy];
              square.innerText = `${nameInput2.value[0].toUpperCase()}`
            } 
           console.log(result2)
              container.appendChild(square);
          
          }
      }
      
    }
}

function gameScore1(){
  for(let i = 0; i < result.length; i++){
    if(result[i] === "red"){
      leaderBoard.push(10)
    }
    if(result[i] === "green"){
      leaderBoard.push(20)
    }

    if(result[i] === "yellow"){
      leaderBoard.push(30)
    }
    if(result[i] === "blue"){
      leaderBoard.push(40)
    }
  }
  score = leaderBoard.reduce((acc, curr)=> acc + curr, 0);
  player1S.innerHTML= `Player one score: ${score}`
  console.log(leaderBoard2)
}
function gameScore2(){
  for(let i = 0; i < result2.length; i++){
    if(result2[i] === "red"){
      leaderBoard2.push(10)
    }
    if(result2[i] === "green"){
      leaderBoard2.push(20)
    }

    if(result2[i] === "yellow"){
      leaderBoard2.push(30)
    }
    if(result2[i] === "blue"){
      leaderBoard2.push(40)
    }
  }
  score2 = leaderBoard2.reduce((acc, curr)=> acc + curr, 0);
  players2S.innerHTML = `Player two score: ${score2}`
  console.log(leaderBoard2)
}
function leader(){
  gameScore1()
  gameScore2()
    if(score > score2){
      playerWin.innerHTML = `Winner: Player1`
    }else{
      playerWin.innerHTML = `Winner: Player2`
    }   
}



function reset(){
  player.innerHTML = "Player name1:";
  player2.innerHTML = "Player name2:";
  player1S.innerHTML= `Player one score: 0`
  players2S.innerHTML= `Player two score: 0`;
  round.innerHTML = "Round: 1"
  leader.innerHTML = "";
  container.innerHTML = "";
  document.querySelector(".nameInput").value = "";
  document.querySelector(".nameInput2").value = "";
  document.querySelector(".leader").innerHTML = "Winner: ";

}


const roundBtn = document.querySelector(".roundCount")
const btn = document.querySelector(".btn");
const calculateWinner = document.querySelector(".result");
const submit = document.querySelector(".nameSub");
const submit2 = document.querySelector(".nameSub2");
const re = document.querySelector(".reset");
roundBtn.addEventListener("click", roundEnter);
calculateWinner.addEventListener("click", leader);
submit.addEventListener("click", submitName )
submit2.addEventListener("click", submitName1 )
re.addEventListener("click", reset)

