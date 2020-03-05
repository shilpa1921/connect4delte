function sum() {
    var sumOfArg = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumOfArg = sumOfArg + arguments[i];
    }
    return sumOfArg;
}

var sumOfNum = sum(10, 20, 40);
console.log("Sum is " + sumOfNum);

function toCheckNumber(num) {
    if (num <= 0 || isNaN(Number(num))) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        num = num * 10;
        return toCheckNumber(num);
    }
}

var numProduced = toCheckNumber("asd");
console.log("The Number is " + numProduced);

function waitThenRun() {
    setTimeout(function() {
        console.log("Hello!");
        setTimeout(function() {
            console.log("Goodbye!");
        }, 1500);
    }, 1500);
}

waitThenRun();
