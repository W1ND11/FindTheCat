let randomIndex;
let gameFinished = false;
let attemptCount = 0;
let clickCount = 0;
let lineElements;
let catRow;
let score = 0;
let scoreElement = document.getElementById("score");
let codeElement = document.getElementsByClassName("box");
let points = 0;
let hintPenalty = 30;
let sCounter = 0;


function secretCode() {
   sCounter++;
   if(sCounter === 10) {
      for (var i = 0; i < codeElement.length; i++) {
         codeElement[i].classList.add("changedBoxes");
       }
   sCounter = 0;
   }
      // setTimeout(function() {
      //    for (var i = 0; i < codeElement.length; i++) {
      //    codeElement[i].classList.remove("changedBoxes");
      // }}, 2000);
}


function showSquare(event) {
   if (gameFinished) {
      return;
   }


   let clickedEl = event.target;
   if (!clickedEl.classList.contains("square")){
      return;
   }


// extragem sunetele din HTMl
   function playCatSound() {
      var catSound = document.getElementById("catSound");
      catSound.play();
    }


   function playFallSound() {
      var fallSound = doucment.getElementById("fallSound");
      fallSound.play()
   }


let myId = clickedEl.id;
// transformam din string in number
let myIdNo = parseInt(myId.substring(1));


// cream un random pentru sunetele de pisica
var sounds = ["cat1Sound", "cat2Sound", "cat3Sound", "cat4Sound"];
var indexAleatoriu = Math.floor(Math.random() * sounds.length);
var soundAleatoriu = document.getElementById(sounds[indexAleatoriu]);


function hintGame() {
   if (gameFinished) {
     return;
   }
   let squareRight = document.getElementsByClassName("hint"+ catRow);
   squareRight[0].classList.add("squareHint");

      let scoreElement = document.getElementById("score");
  
      score -= hintPenalty;
      scoreElement.innerHTML = score + " score";
 }
   
//verifica daca pisica e in elementul curent
   if (randomIndex == myIdNo) {
      let h1Element = document.querySelector("h1");
      soundAleatoriu.play();
      clickedEl.classList.add("cat");
      gameFinished = true;
      h1Element.innerHTML = "You Won!";
      let points = 0;
      let scoreElement = document.getElementById("score");
    if (clickCount === 0 && !hintGame()) {
      points = 100;
    } else if (clickCount === 1 && !hintGame()) {
      points = 66;
    } else if (clickCount === 2 && !hintGame()) {
      points = 33;
    }

    score += points;
    scoreElement.innerHTML = score + " score +" + points;
   }else {
      clickedEl.classList.add("lose");
      fallSound.play();
      attemptCount++;
      clickCount++;
      
      
      if (attemptCount >= 3) {
         let h1Element = document.querySelector("h1");
         gameFinished = true;
         h1Element.innerHTML = "You lose!";
      }
   }
   let counterElement = document.getElementById("counter");
   

   // facem ca contorul sa afiseze ceea ce este
   switch (clickCount) {
      case 1:
      return counterElement.innerHTML = "1";
      break;
      case 2:
      return counterElement.innerHTML = "2";
      break;
      case 3:
      return counterElement.innerHTML = "3";
      break;
   }

}


// adaugam functia 
 function hintGame() {
   if (gameFinished) {
     return;
   }
   let squareRight = document.getElementsByClassName("hint"+ catRow);
   squareRight[0].classList.add("squareHint");

      let scoreElement = document.getElementById("score");
  
      score -= hintPenalty;
      scoreElement.innerHTML = score + " score";
 }


// resetam tot la 0 pentru a incepe jocul din nou
function resetGame() {
   gameFinished = false;
   attemptCount = 0;
   clickCount = 0;
   hintCount = 0;
   let h1Element = document.querySelector("h1");
   h1Element.innerHTML = "Find The Cat"; 
   let counterElement = document.getElementById("counter");
   counterElement.innerHTML = "0"; 
   let squareElements = document.getElementsByClassName("square");
   let squareRight = document.getElementsByClassName("hint"+ catRow);
   let scoreElement = document.getElementById("score");
   scoreElement.innerHTML = score + " score";
   for (let i = 0; i < squareElements.length; i++) {
      squareElements[i].classList.remove("cat", "lose");
      squareRight[0].classList.remove("squareHint");
  }
  generateRandomIndex();
}


window.addEventListener("DOMContentLoaded", function () {
   let squares = document.getElementsByClassName("square");
   let scoreElement = document.getElementById("score");
   scoreElement.innerHTML = score + " score";
   generateRandomIndex()
 });


 function generateRandomIndex() {
   let squares = document.getElementsByClassName("square");
   randomIndex = Math.floor(Math.random() * squares.length) + 1;
   lineElements = Math.sqrt(squares.length);
   catRow = Math.floor(randomIndex / lineElements);
   let reminder = randomIndex % lineElements;
   if(reminder) {
      catRow++;
   }
}



 
 