
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
var score = 0;
var score2 = 0;
var interId;
var interId2;

function roundEnter(){
  round.innerHTML = `Round: ${roundIn.value}`
 
  // alert the user to enter there name 
  alert("Player1 please enter your name and hit play button!")
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
        interId = null;
        // when round finished alert the next player
        alert("Player 2 enter your name and hit play button!")
      }else{
        for (let col = 0; col < 1; col++) {
          square = document.createElement("div");
          // set the class of the square to indicate its position on the board
          square.className = `square ${row}-${col}`;
          // set the background color of the square based on its position
          if ((row + col) % 2 === 0) {
            //sending color point to the result 
            if(colors[happy] === "red"){
              result.push(10)
             }
             if(colors[happy] === "green"){
              result.push(20)
             }if(colors[happy] === "yellow"){
              result.push(30)
             }if(colors[happy] === "blue"){
              result.push(40)
             }
            square.style.backgroundColor = colors[happy];
            square.innerText = `${nameInput.value[0].toUpperCase()}`
          } 
          console.log(result)
            container.appendChild(square); 
          }
      }      
      }
      // counting total and sending to score array
      score = result.reduce((acc, curr)=> acc + curr,0);
      console.log(score)
      player1S.innerHTML= `Player one score: ${score}`
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
    const colors = ["red", "green", "yellow", "blue"]
    for (let row = 0; row < 1; row++) {
      if(result2.length === Number(numberOfRound.slice(7))){
        clearInterval(interId2)
        interId2 = null;
        // as both player completed round so winner function called here
        leader()
      }else{
        for (let col = 0; col < 1; col++) {
          square = document.createElement("div")
            // set the class of the square to indicate its position on the board
            square.className = `square ${row}-${col}`;
            // set the background color of the square based on its position
            if ((row + col) % 2 === 0) {
              //sending colour point to the result2 array 
              if(colors[happy] === "red"){
                result2.push(10)
               }
               if(colors[happy] === "green"){
                result2.push(20)
               }if(colors[happy] === "yellow"){
                result2.push(30)
               }if(colors[happy] === "blue"){
                result2.push(40)
               }
                square.style.backgroundColor = colors[happy];
              square.innerText = `${nameInput2.value[0].toUpperCase()}`
            } 
           console.log(result2)
              container.appendChild(square);
          
          }
      }
      // sending total of the array score to score2
  score2 = result2.reduce((acc, curr)=> acc + curr,0);
  console.log(score2)
  players2S.innerHTML= `Player two score: ${score2}`
    }
 
}


function leader(){
  var str = nameInput.value;
  var str2 = nameInput2.value;
  // compare the two player score and decide the winner 
    if(score > score2){
    alert(  playerWin.innerHTML = `Congratulation you are the Winner ????: ${str[0].toUpperCase()+str.slice(1)}`)
    }
    if(score2 > score){
     alert( playerWin.innerHTML = `Congratulation you are the Winner ????: ${str2[0].toUpperCase()+str2.slice(1)}`)
    }
    
    if(score === score2){
      alert("Game tie");
    }
}



function reset(){
  // this function reset the game 
  location.reload();

}

// all these button control the event
const roundBtn = document.querySelector(".roundCount")
const btn = document.querySelector(".btn");
const submit = document.querySelector(".nameSub");
const submit2 = document.querySelector(".nameSub2");
const re = document.querySelector(".reset");
roundBtn.addEventListener("click", roundEnter);
submit.addEventListener("click", submitName )
submit2.addEventListener("click", submitName1 )
re.addEventListener("click", reset)

