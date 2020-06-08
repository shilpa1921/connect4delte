// task 1
// var squ = document.getElementById("squere");

// document.addEventListener("mousemove", function(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     squ.style.left = x + "px";
//     squ.style.top = y + "px";
//     squ.style.transform = "translate(-50%,-50%)";
// });

// task 2
// var address =
//     "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\nBut, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.";

// document
//     .getElementsByTagName("TEXTAREA")[0]
//     .addEventListener("input", function(e) {
//         var targ = e.target;
//         targ.value = address.slice(0, targ.value.length);
//     });

// task 3
var box1 = document.getElementById("box");

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

// box1.addEventListener("mousedown", function() {
//     var r = getRandomColourNumber();
//     var g = getRandomColourNumber();
//     var b = getRandomColourNumber();
//     var randomColour = "rgb(" + r + "," + g + "," + b + ")";
//     box.style.backgroundColor = randomColour;
// });

// // task 4
// var outerbox = document.getElementById("outerbox");
// var innerbox = document.getElementById("innerbox");
// outerbox.addEventListener("click", function() {
//     var r = getRandomColourNumber();
//     var g = getRandomColourNumber();
//     var b = getRandomColourNumber();
//     var randomColour = "rgb(" + r + "," + g + "," + b + ")";
//     outerbox.style.backgroundColor = randomColour;
// });

// innerbox.addEventListener("click", function() {
//     var r = getRandomColourNumber();
//     var g = getRandomColourNumber();
//     var b = getRandomColourNumber();
//     var randomColour = "rgb(" + r + "," + g + "," + b + ")";
//     innerbox.style.backgroundColor = randomColour;
// });
