var x = 50;
var doublex;

function timesTwo(num) {
    return num * 2;
}

doublex = timesTwo(x);
var numbers = [x, doublex];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
var numbers = {};
numbers.y = doublex;
