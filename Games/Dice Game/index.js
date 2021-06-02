var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomImg1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomImg2 = "images/dice" + randomNumber2 + ".png";

var imageOne = document.querySelectorAll("img")[0];
var imageTwo = document.querySelectorAll("img")[1];

imageOne.setAttribute("src", randomImg1);
imageTwo.setAttribute("src", randomImg2);

// Get Winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is the Winner! 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 is the Winner! 🚩";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}