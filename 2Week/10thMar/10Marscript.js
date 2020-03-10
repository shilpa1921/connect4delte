// task 1
var squ = document.getElementById("squere");

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    squ.style.left = x + "px";
    squ.style.top = y + "px";
    squ.style.transform = "translate(-50%,-50%)";
});

// task 2

// task 3
var box1 = document.getElementById("box");
console.log("shilpa");
function getRandomColourNumber() {
    return Math.floor(Math.random() * 256);
}
box1.addEventListener("mouseup", function() {
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    box.style.backgroundColor = randomColour;
});

box1.addEventListener("mousedown", function() {
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    box.style.backgroundColor = randomColour;
});

// task 4
var outerbox = document.getElementById("outerbox");
var innerbox = document.getElementById("innerbox");
outerbox.addEventListener("click", function() {
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    outerbox.style.backgroundColor = randomColour;
});

innerbox.addEventListener("click", function() {
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    innerbox.style.backgroundColor = randomColour;
});
