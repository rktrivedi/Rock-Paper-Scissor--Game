let userImage = document.getElementById("user_img");
let computerImage = document.getElementById("comp_img");
let comSelected = document.getElementById("comp_text");
let userSelected = document.getElementById("user_text");
let win_image = document.getElementById("win_img");
let win_text = document.getElementById("win_txt");

//Computer Selection
function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  computerImage.src = `./Img/${randomNum}.png`;
  if (randomNum === 1) {
    comSelected.innerHTML = `Computer Selected-Rock`;

    // return;
  }
  if (randomNum === 2) {
    comSelected.innerHTML = `Computer Selected-Paper`;
    // return;
  }
  if (randomNum === 3) {
    comSelected.innerHTML = `Computer Selected-Scissor`;
    // return;
  }
  return randomNum;
}

//User Selection Paper
let userClickedPaper = function (id) {
  userSelection = id;
  userImage.src = `./Img/2.png`;
  userSelected.innerHTML = "You Selected Paper";

  let computerSelection = computerChoice();

  if (computerSelection == 1) {
    win_image.src = "./Img/2.png";
    win_text.innerHTML = "User Selected-Paper -USER WON";
    console.log("User Won the Match ");

    // return;
  }
  if (computerSelection == 2) {
    console.log("Match  Tie");
    win_image.src = "./Img/2.png";
    win_text.innerHTML = "Both Selected-Paper -Match Tie";
    console.log(computerSelection);
    // return;
  }
  if (computerSelection == 3) {
    console.log("Computer Won the Match ");
    win_image.src = "./Img/3.png";
    win_text.innerHTML = "Computer Selected-Scissor -Computer Won";
    console.log(computerSelection);
    // return;
  }
};

// User Selected Rock
let userClickedRock = function (id) {
  userSelection = id;
  userImage.src = `./Img/1.png`;
  userSelected.innerHTML = "You Selected Rock";
  let computerSelection = computerChoice();

  if (computerSelection == 1) {
    console.log("Match  Tie");
    win_image.src = "./Img/1.png";
    win_text.innerHTML = "Both Selected-Rock -Match Tie";
    console.log(computerSelection);
    // return;
  }
  if (computerSelection == 2) {
    console.log("Computer Won the Match  ");
    win_image.src = "./Img/2.png";
    win_text.innerHTML = "Computer Selected-Paper-Computer Won";
    console.log(computerSelection);
    // return;
  }
  if (computerSelection == 3) {
    console.log("User Won the Match");
    win_image.src = "./Img/1.png";
    win_text.innerHTML = "User Selected-Rock -USER WON";
    console.log(computerSelection);
    // return;
  }
};

//User Selected Scissor
let userClickedScissor = function (id) {
  userSelected.innerHTML = "You Selected Scissor";
  userSelection = id;
  userImage.src = `./Img/3.png`;
  let computerSelection = computerChoice();

  if (computerSelection == 1) {
    console.log("Computer Won the Match ");
    win_image.src = "./Img/1.png";
    win_text.innerHTML = "Computer Selected-Rock -Computer Won";
    console.log(computerSelection);
    // return;
  }
  if (computerSelection == 2) {
    console.log("User Won the Match");
    win_image.src = "./Img/1.png";
    win_text.innerHTML = "User Selected-Scissor -USER WON";
    console.log(computerSelection);
    // return;
  }
  if (computerSelection == 3) {
    console.log("Match  Tie");
    win_image.src = "./Img/3.png";
    win_text.innerHTML = "Both Selected-Scissor -Match Tie";
    console.log(computerSelection);
    // return;
  }
};

// BETWEEN ROCK AND PAPER - PAPER WINS.   1 = rock  2 = paper 3 = scissor
// BETWEEN PAPER AND SCISSOR - SCISSOR WINS.
//BETWEEN ROCK AND SCISSOR- ROCK WINS .
// // Game Logic

// Function Implementation

// function getResult(userMove, computerMove) {

// }
