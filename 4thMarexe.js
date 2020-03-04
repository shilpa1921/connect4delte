function sum() {
    var sumOfArg = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumOfArg = sumOfArg + arguments[i];
    }
    console.log("sum of the arguments is: " + sumOfArg);
}

sum(10, 20, 40);

function toCheckNumber(num) {
    if (num <= 0 || isNaN(NaN) == Number.isNaN(num)) {
        console.log("ERROR");
    } else if (num >= 1000000) {
        console.log(num);
    } else {
        num = num * 10;
        return toCheckNumber(num);
    }
}

toCheckNumber(10);

setTimeout(function() {
    console.log("Hello!");
    setTimeout(function() {
        console.log("Goodbye");
    }, 1500);
}, 1500);
