//console.log("Sanity check!!!");
// var btn = document.getElementById("btn");
// var inputField = document.querySelector("input");
// console.log("btn:", btn);
// btn.addEventListener("click", function() {
//     //console.log("I clicked on the button");
//     document.body.style.backgroundColor = "blue";
// });

// document.addEventListener("keydown", function(event) {
//     if (event.keyCode === 66) {
//         console.log("Keydown event happend", event);
//         document.body.style.backgroundColor = "hotpink";
//     }
// });

// inputField.addEventListener("input", function(e) {
//     console.log("input events happened", e.target.value);
//     e.target.value = "MSG";
// });

var board = document.getElementsByClassName("board")[0];
var racers = document.getElementsByClassName("racer");

console.log("board:", board);
console.log("racers:", racers);
var leftRacingCar = 0;
var leftMotorbike = 0;
var leftPoliceCar = 0;
var leftTractor = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 51);
}

board.addEventListener("click", function() {
    console.log("clicked on board");
    leftRacingCar += getRandomNumber();
    leftMotorbike += getRandomNumber();
    leftPoliceCar += getRandomNumber();
    leftTractor += getRandomNumber();
    console.log("leftRacingCar", leftRacingCar);
    console.log("leftMotorbike", leftMotorbike);
    racers[0].style.left = leftRacingCar + "px";
    racers[1].style.left = leftMotorbike + "px";
    racers[2].style.left = leftPoliceCar + "px";
    racers[3].style.left = leftTractor + "px";
});

document.getElementById("boost-button").addEventListener("clicl", function(e) {
    leftRacingCar += 100;
    e.stopPropagation();
    racers[0].style.left = leftRacingCar = "px";
});

function getRandomColorNumber() {
    return Math.random(Math.random() * 255);
}
document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 32) {
        var r = getRandomColorNumber();
        var g = getRandomColorNumber();
        var b = getRandomColorNumber();
        var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
        console.log("randomColor", randomColor);
        board.style.backgroundColor = randomColor;
    }
});
