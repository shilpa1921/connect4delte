fizzbuzz();

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                console.log("fizzbuzz");
            } else {
                console.log("fizz");
            }
        } else {
            if (i % 5 == 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    console.log(9 % 3);

    var n;
    n = 10 % 3;
    console.log(n);
    n = 2;
    console.log(n);

    console.log(null + false);

    console.log(typeof "text");
    console.log('shilpa"s');

    console.log(typeof 9);
}

function toCheckNumber(num) {
    if (num <= 0) {
        if ((num = Number.isNaN(num))) {
            console.log("ERROR");
        }
    } else if (num >= 1000000) {
        return num;
    } else {
        num = num * 10;
        return toCheckNumber(num);
    }
}

toCheckNumber(0);

num <= 0 || num = Number.isNaN(num);

var totaler = getTotaler();

function getTotaler(num) {
    var pNum = 0;
    if (pNum < 0) {
        return num;
    } else {
        return totaler(pNum) + num;
    }
    pNum = num;
}

totaler(2);
totaler(3);
